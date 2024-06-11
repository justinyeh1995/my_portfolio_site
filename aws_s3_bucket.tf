#####################################
# create www.chihtingyeh.com bucket #
#####################################

resource "aws_s3_bucket" "www_bucket" {
  bucket = var.www_domain
}

# Upload the out/ directory to the bucket
resource "aws_s3_object" "provision_source_files" {
    bucket = aws_s3_bucket.www_bucket.id
    # upload out folder to the bucket
    for_each = fileset("${local.prefix}/", "**/*.*")

    key    = "${local.prefix}/${each.key}"
    source = "${local.prefix}/${each.value}"

    content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
}

resource "aws_s3_bucket_website_configuration" "www_bucket" {
    bucket = aws_s3_bucket.www_bucket.id
    index_document {
        suffix = "index.html"
    }

    error_document {
        key = "404.html"
    }
}

# Configure Permissions
resource "aws_s3_bucket_public_access_block" "www_bucket" {
  bucket = aws_s3_bucket.www_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.www_bucket.id
  policy = jsonencode({
  Version = "2012-10-17"
  Statement = [
    {
    Sid       = "PublicReadGetObject"
    Effect    = "Allow"
    Principal = "*"
    Action    = "s3:GetObject"
    Resource = [
      aws_s3_bucket.www_bucket.arn,
      "${aws_s3_bucket.www_bucket.arn}/*",
    ]
    },
  ]
  })
  depends_on = [
  aws_s3_bucket_public_access_block.www_bucket
  ]
}


#################################
# create chihtingyeh.com bucket #
#################################

resource "aws_s3_bucket" "base_bucket" {
  bucket = var.base_domain
}

resource "aws_s3_bucket_website_configuration" "base_bucket" {
    bucket = aws_s3_bucket.base_bucket.bucket
    redirect_all_requests_to {
        host_name = var.www_domain
        protocol  = "https"
    }
}

