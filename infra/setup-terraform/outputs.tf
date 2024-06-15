output "zone_name_servers" {
  value = data.aws_route53_zone.base_domain.name_servers
}