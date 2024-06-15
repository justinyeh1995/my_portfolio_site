variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-2"
}

variable "www_domain" {
  description = "The domain name for the www bucket"
  type        = string
  default     = "www.chihtingyeh.com"
}

variable "base_domain" {
  description = "The domain name for the redirect bucket"
  type        = string
  default     = "chihtingyeh.com"
}