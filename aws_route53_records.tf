resource "aws_route53_record" "base_a" {
  zone_id = data.aws_route53_zone.base_domain.zone_id
  name    = var.base_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.base_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.base_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_a" {
  zone_id = data.aws_route53_zone.base_domain.zone_id
  name    = var.www_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.www_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}
