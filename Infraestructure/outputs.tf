output "authentication_instance_public_ip" {
  description = "Elastic IP associated with the authentication instance"
  value       = data.aws_eip.authentication_eip.public_ip
}

output "users_instance_public_ip" {
  description = "Elastic IP of the users domain instance"
  value       = data.aws_eip.users_eip.public_ip
}
