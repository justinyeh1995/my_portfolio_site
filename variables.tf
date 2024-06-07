variable "aws_region" {
  description = "The AWS region to deploy resources"
  type        = string
  default     = "us-east-2"
}

variable "www_domain" {
  description = "The domain name for the www bucket"
  type        = string
  default     = "www.chih-ting.yeh.com"
}

variable "redirect_domain" {
  description = "The domain name for the redirect bucket"
  type        = string
  default     = "chih-ting.yeh.com"
}