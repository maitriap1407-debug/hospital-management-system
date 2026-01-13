# Build images
docker build -t hospital-management-backend:latest ./backend
docker build -t hospital-management-frontend:latest ./frontend

# Load images into Minikube
& "C:\Program Files\Kubernetes\Minikube\minikube.exe" image load hospital-management-backend:latest
& "C:\Program Files\Kubernetes\Minikube\minikube.exe" image load hospital-management-frontend:latest

# Apply manifests
kubectl apply -f k8s/

Write-Host "Deployment complete! Access the services with:" -ForegroundColor Green
Write-Host 'App: & "C:\Program Files\Kubernetes\Minikube\minikube.exe" service frontend' -ForegroundColor Cyan
Write-Host 'Prometheus: & "C:\Program Files\Kubernetes\Minikube\minikube.exe" service prometheus' -ForegroundColor Cyan
Write-Host 'Grafana: & "C:\Program Files\Kubernetes\Minikube\minikube.exe" service grafana' -ForegroundColor Cyan
