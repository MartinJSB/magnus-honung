# The domain is registered at Loopia; its name servers point here (see docs/deployment.md).

resource "google_dns_managed_zone" "site" {
  name     = replace(var.dns_zone_domain, ".", "-")
  dns_name = "${var.dns_zone_domain}."

  depends_on = [google_project_service.enabled]
}

locals {
  zone_fqdn = google_dns_managed_zone.site.dns_name

  # Cloud Run domain mapping targets (fixed, documented by Google).
  cloud_run_a    = ["216.239.32.21", "216.239.34.21", "216.239.36.21", "216.239.38.21"]
  cloud_run_aaaa = ["2001:4860:4802:32::15", "2001:4860:4802:34::15", "2001:4860:4802:36::15", "2001:4860:4802:38::15"]

  records = merge(
    length(var.apex_txt) > 0 ? {
      "@ TXT" = { name = "", type = "TXT", rrdatas = [for t in var.apex_txt : "\"${t}\""] }
    } : {},
    contains(var.domains, var.dns_zone_domain) ? {
      "@ A"    = { name = "", type = "A", rrdatas = local.cloud_run_a }
      "@ AAAA" = { name = "", type = "AAAA", rrdatas = local.cloud_run_aaaa }
    } : {},
    contains(var.domains, "www.${var.dns_zone_domain}") ? {
      "www CNAME" = { name = "www", type = "CNAME", rrdatas = ["ghs.googlehosted.com."] }
    } : {},
    { for r in var.extra_dns_records : "${r.name} ${r.type}" => r },
  )
}

resource "google_dns_record_set" "site" {
  for_each     = local.records
  managed_zone = google_dns_managed_zone.site.name
  name         = each.value.name == "" ? local.zone_fqdn : "${each.value.name}.${local.zone_fqdn}"
  type         = each.value.type
  ttl          = 300
  rrdatas      = each.value.rrdatas
}
