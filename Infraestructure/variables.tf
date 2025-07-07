variable "aws_region" {
  description = "AWS region"
  type        = string
}

variable "instance_type" {
  description = "Instance type for EC2"
  type        = string
}

variable "key_name" {
  description = "Key pair name for SSH"
  type        = string
}

variable "domain_name" {
  description = "Name of the business domain"
  type        = string
}

variable "vpc_id" {
  description = "ID de la VPC donde se creará el grupo de seguridad"
  type        = string
}

variable "authentication_eip_id" {
  description = "EIP Allocation ID for Authentication EC2"
  type        = string
}

variable "users_eip_id" {
  description = "EIP Allocation ID for Users EC2"
  type        = string
}
