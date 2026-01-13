$port = 5000
$process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -First 1

if ($process) {
    Write-Host "Found process $process on port $port. Killing it..." -ForegroundColor Yellow
    Stop-Process -Id $process -Force
    Write-Host "Port $port is now free." -ForegroundColor Green
} else {
    Write-Host "No process found on port $port." -ForegroundColor Cyan
}
