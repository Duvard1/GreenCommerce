data "aws_eip" "authentication_eip" {
  id = "eipalloc-011fbb1570766badd"
}

data "aws_eip" "users_eip" {
  id = "eipalloc-02384ef023a44df4a"
}
