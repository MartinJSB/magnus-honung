output "service_url" {
  value = google_cloud_run_v2_service.app.uri
}

output "name_servers" {
  description = "Enter these under Namnservrar for the domain in Loopia Customer Zone."
  value       = google_dns_managed_zone.site.name_servers
}

# Values for GitHub > Settings > Secrets and variables > Actions > Variables.
output "github_variables" {
  value = {
    GCP_PROJECT_ID   = var.project_id
    GCP_REGION       = var.region
    GCP_SERVICE      = google_cloud_run_v2_service.app.name
    GCP_IMAGE_REPO   = local.image_repo
    GCP_WIF_PROVIDER = google_iam_workload_identity_pool_provider.github.name
    GCP_DEPLOY_SA    = google_service_account.deployer.email
  }
}
