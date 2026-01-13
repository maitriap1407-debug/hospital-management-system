# Build all microservices
docker build -t hospital-management-auth:latest ./services/auth-service
docker build -t hospital-management-doctor:latest ./services/doctor-service
docker build -t hospital-management-patient:latest ./services/patient-service
docker build -t hospital-management-appointment:latest ./services/appointment-service
docker build -t hospital-management-gateway:latest ./services/gateway-service

# Load into Minikube
minikube image load hospital-management-auth:latest
minikube image load hospital-management-doctor:latest
minikube image load hospital-management-patient:latest
minikube image load hospital-management-appointment:latest
minikube image load hospital-management-gateway:latest

# Apply microservices manifests
kubectl apply -f k8s/microservices.yaml

Write-Host "Microservices deployment updated!" -ForegroundColor Green
