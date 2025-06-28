terraform {
  required_version = ">= 1.10.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}



# CREATE INSTANCE EC2 FOR AUTHENTICATION DOMAIN

module "authentication" {
  source            = "./modules/ec2_instance"
  name              = "authentication-domain-instance"
  domain            = "authentication"
  ami               = "ami-020cba7c55df1f615"
  instance_type     = var.instance_type
  subnet_id         = data.aws_subnet.default.id
  security_group_id = aws_security_group.authentication_sg.id
  key_name          = var.key_name
  user_data_path    = "${path.module}/initial_configuration.sh"
  eip_allocation_id = var.authentication_eip_id
}



# CREATE INSTANCE EC2 FOR USERS DOMAIN

module "users" {
  source            = "./modules/ec2_instance"
  name              = "users-domain-instance"
  domain            = "users"
  ami               = "ami-020cba7c55df1f615"
  instance_type     = var.instance_type
  subnet_id         = data.aws_subnet.default.id
  security_group_id = aws_security_group.users_sg.id
  key_name          = var.key_name
  user_data_path    = "${path.module}/initial_configuration.sh"
  eip_allocation_id = var.users_eip_id
}



