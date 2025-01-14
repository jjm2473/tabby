use std::sync::Arc;

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tabby_schema::{
    license::{LicenseService, LicenseType},
    notification::{NotificationRecipient, NotificationService},
};

use super::helper::Job;

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct LicenseCheckJob;

impl Job for LicenseCheckJob {
    const NAME: &'static str = "license_check";
}

impl LicenseCheckJob {
    pub async fn cron(
        _now: DateTime<Utc>,
        license_service: Arc<dyn LicenseService>,
        notification_service: Arc<dyn NotificationService>,
    ) -> tabby_schema::Result<()> {
        let license = match license_service.read().await {
            Ok(license) => license,
            Err(err) => {
                logkit::warn!(exit_code = -1; "Failed to read license: {}", err);
                return Err(err);
            }
        };
        if license.r#type == LicenseType::Community {
            return Ok(());
        }
        if let Some(expire_in_days) = license.expire_in_days() {
            if expire_in_days < 7 && expire_in_days > 0 {
                if let Err(e) = notification_service
                    .create(
                        NotificationRecipient::Admin,
                        &make_expring_message(expire_in_days),
                    )
                    .await
                {
                    logkit::warn!(exit_code = -1; "Failed to create notification: {}", e);
                    return Err(e);
                }
            }
        }

        Ok(())
    }
}

fn make_expring_message(expire_in_days: i64) -> String {
    format!(
        r#"Your license will expire in {} days.

To ensure uninterrupted access to Tabby and to continue enjoying all the premium features, please renew your license before it expires.

If you have any questions or need assistance with the renewal process, please don't hesitate to contact our support team at support@tabbyml.com.
"#,
        expire_in_days
    )
}
