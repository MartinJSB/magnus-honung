terraform {
  # 1.11+ for write-only arguments (keeps the SMTP password out of state).
  required_version = ">= 1.11"

  # Created once by hand, see docs/deployment.md.
  backend "gcs" {
    bucket = "magnus-honung-tfstate"
  }

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 8.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region

  # The Budgets API needs a quota project when called with user credentials.
  user_project_override = true
  billing_project       = var.project_id
}
