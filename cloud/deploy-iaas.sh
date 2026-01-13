#!/bin/bash

# 1. Update system
sudo apt-get update
sudo apt-get upgrade -y

# 2. Install Docker
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce

# 3. Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 4. Clone and Start App (Conceptual)
# git clone https://github.com/your-repo/hospital-management-system.git
# cd hospital-management-system
# docker-compose up -d --build

echo "IaaS Infrastructure is ready! Docker and Compose are installed."
