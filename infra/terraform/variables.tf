variable "project_id" {
  description = "GCP project ID (the project must already exist and be linked to billing)."
  type        = string
}

variable "billing_account" {
  description = "Billing account ID, e.g. 012345-6789AB-CDEF01 (gcloud billing accounts list)."
  type        = string
}

variable "region" {
  description = "Cloud Run region. Must support domain mappings; europe-north1 (Finland) is closest."
  type        = string
  default     = "europe-north1"
}

variable "service_name" {
  type    = string
  default = "magnus-honung"
}

variable "github_repo" {
  description = "owner/name of the GitHub repo allowed to deploy."
  type        = string
  default     = "MartinJSB/magnus-honung"
}

variable "deploy_branch" {
  description = "Only pushes to this branch may deploy."
  type        = string
  default     = "main"
}

variable "domains" {
  description = "Custom domains mapped to the service. Leave empty until the domain is verified."
  type        = list(string)
  default     = []
}

# --- DNS (Cloud DNS zone, see dns.tf) ---

variable "dns_zone_domain" {
  type    = string
  default = "magnushonung.se"
}

variable "apex_txt" {
  description = "TXT values on the bare domain, e.g. the Google Search Console google-site-verification=... token."
  type        = list(string)
  default     = []
}

variable "extra_dns_records" {
  description = "Other records, e.g. from Resend. name is relative to the zone (\"send\", \"resend._domainkey\")."
  type = list(object({
    name    = string
    type    = string
    rrdatas = list(string)
  }))
  default = []
}

# --- Budget ---

variable "budget_amount" {
  description = "Monthly budget. Alerts are emailed to the billing account admins at 50/90/100 %."
  type        = number
  default     = 10
}

variable "budget_currency" {
  description = "Must match the billing account's currency (shown in Billing > Account management)."
  type        = string
  default     = "SEK"
}

# --- Mail (see apps/api/.env.example) ---

variable "order_inbox" {
  description = "Where order requests are sent."
  type        = string
}

variable "mail_from" {
  type    = string
  default = "Magnus Honung <no-reply@magnushonung.se>"
}

variable "smtp_host" {
  type    = string
  default = "mailcluster.loopia.se"
}

variable "smtp_port" {
  type    = number
  default = 587
}

variable "smtp_user" {
  type = string
}

variable "smtp_pass" {
  description = "Written to Secret Manager; write-only, so it never lands in state."
  type        = string
  sensitive   = true
  ephemeral   = true
}

variable "smtp_pass_version" {
  description = "Bump this to push a new smtp_pass to Secret Manager."
  type        = number
  default     = 1
}
