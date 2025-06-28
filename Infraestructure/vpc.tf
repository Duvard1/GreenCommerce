# Obtener la VPC por defecto
data "aws_vpc" "default" {
  default = true
}

# Obtener las subredes dentro de esa VPC
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

# Tomar la primera subred pública (por simplicidad)
data "aws_subnet" "default" {
  id = data.aws_subnets.default.ids[0]
}
