output "service_url" {
  value = google_cloud_run_v2_service.app.uri
}

output "dns_records" {
  description = "Add these at Loopia (DNS-editor) for each mapped domain."
  value = {
    for domain, m in google_cloud_run_domain_mapping.app : domain => [
      for r in m.status[0].resource_records : { type = r.type, name = r.name, value = r.rrdata }
    ]
  }
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
