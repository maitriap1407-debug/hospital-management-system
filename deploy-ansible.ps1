# deploy.ps1
# Automates the Ansible deployment process using the chatter-ansible container.

Write-Host "--- Ansible Deployment Orchestrator ---" -ForegroundColor Cyan

$ansibleDir = "ansible-deployment"

# Step 1: Build the chatter-ansible image
Write-Host "[1/3] Building chatter-ansible engine..." -ForegroundColor Yellow
docker-compose -f "$ansibleDir/docker-compose.yml" build

# Step 2: Run the deployment playbook
Write-Host "[2/3] Executing Ansible playbook inside chatter-ansible..." -ForegroundColor Yellow
docker-compose -f "$ansibleDir/docker-compose.yml" up --abort-on-container-exit

# Step 3: Cleanup (Optional - can be commented out if you want to inspect logs)
# Write-Host "[3/3] Cleaning up..." -ForegroundColor Yellow
# docker-compose -f "$ansibleDir/docker-compose.yml" down

Write-Host "--- Deployment Run Complete ---" -ForegroundColor Green
