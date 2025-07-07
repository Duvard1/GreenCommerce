# ☁️ Terraform Infrastructure

This module defines and manages the AWS infrastructure for the **GreenCommerce** project, automating the provisioning of key services such as networking, EC2 instances, elastic IP addresses, and security groups.

---

## 🧱 Included Components

- **VPCs and Subnets** (private and public)
- **Security Groups** per domain
- **EC2 Instances** for the `Authentication` and `Users` domains
- **Elastic IPs** associated with each instance
- **Automatic startup script** (`initial_configuration.sh`) to install dependencies and run services
- **Manual import of existing resources** such as the RDS SG

---

## 🚀 Usage

### 1. Clone this repository and navigate to the infrastructure folder:

```bash
git clone https://github.com/tu-usuario/greencommerce.git
cd greencommerce/Infraestructure
```

### 2. Configure your AWS credentials:

```bash
aws configure
```

Or use environment variables:

```bash
$env:AWS_ACCESS_KEY_ID="XXX"
$env:AWS_SECRET_ACCESS_KEY="XXX"
$env:AWS_SESSION_TOKEN="XXX"
```

### 3. Deploy the infrastructure:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

## 🔧 Repository structure

```
└── 📁Infraestructure
    └── 📁.terraform
    └── 📁modules
        └── 📁ec2_instance
            ├── main.tf
            ├── outputs.tf
            ├── variables.tf
    ├── .gitignore
    ├── elastic_ip.tf
    ├── initial_configuration.sh
    ├── main.tf
    ├── outputs.tf
    ├── providers.tf
    ├── README.md
    ├── variables.tf
    └── vpc.tf
```

- `vpc.tf`: Defines the virtual private network
- `security_groups.tf`: Traffic rules by domain
- `elastic_ip.tf`: Public IPs associated with the instances
- `modules/ec2_instance/`: Reusable module for creating EC2 instances
- `initial_configuration.sh`: Script that installs Docker and launches microservices
- `variables.tf / terraform.tfvars`: Variables and values ​​defined to parameterize the infrastructure
- `outputs.tf`: Exposes useful information such as public IPs
- `main.tf`: Main Terraform Resource Orchestration
- `providers.tf`: Define the AWS provider and region

---

## 📥 Importing existing resources

```bash
terraform import aws_security_group.rds_manual_sg sg-0a1b57...
```

## 💣 Controlled Destruction

⚠️ Do not destroy the RDS Security Group if it contains critical rules. Destroy only EC2s and their associations:

```bash
terraform destroy `
  "-target=module.users.aws_instance.this" `
  "-target=module.authentication.aws_instance.this" `
  "-target=module.users.aws_eip_association.this" `
  "-target=module.authentication.aws_eip_association.this"
```


## 🧑‍💻 Author

- **Project:** GreenCommerce
- **Developed:** Duvard Cisneros
- **Institution:** Central University of Ecuador - Distributed Programming 
- **Professor:** Juan Pablo Guevara