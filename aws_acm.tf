# provider "aws" {
#   region = "us-east-1" # North Virginia
  
# }

# resource "aws_acm_certificate" "www_cert" {
#   domain_name       = "www.chihitingyeh.com"
#   domain_name = "chihitingyeh.com"
#   validation_method = "DNS"
#   key_algorithm = "RSA_2048"

#   tags = {
#     Environment = "resume-challenge-account"
#   }

#   lifecycle {
#     create_before_destroy = true
#   }
# }