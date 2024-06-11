locals {
    s3_origin_id = "S3-${var.www_domain}"
}

resource "aws_cloudfront_distribution" "www_distribution" {
  depends_on = [aws_s3_bucket.www_bucket]

  origin {
    domain_name = "${var.www_domain}.s3-website.us-east-2.amazonaws.com"
    origin_id   = local.s3_origin_id
    origin_path = "/out"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  aliases = [
    var.base_domain,
    var.www_domain
  ]
  comment             = "${var.www_domain} CloudFront distribution"
  default_root_object = "index.html"

  default_cache_behavior {
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    min_ttl     = 0
    default_ttl = 120
    max_ttl     = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    # cloudfront_default_certificate = true
    acm_certificate_arn = aws_acm_certificate.ssl_certificate.arn
    ssl_support_method  = "sni-only"
  }
}