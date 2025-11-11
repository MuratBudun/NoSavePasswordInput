# PowerShell script to minify no_save_password_control.js using Terser
# Usage: .\minify.ps1

$sourceFile = "no_save_password_control.js"
$outputFile = "no_save_password_control.min.js"

Write-Host "Minifying $sourceFile..." -ForegroundColor Cyan

# Check if source file exists
if (-not (Test-Path $sourceFile)) {
    Write-Host "Error: $sourceFile not found!" -ForegroundColor Red
    exit 1
}

# Check if terser is installed
$terserExists = Get-Command npx -ErrorAction SilentlyContinue
if (-not $terserExists) {
    Write-Host "Error: npx not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

try {
    # Run terser with options:
    # -c: compress
    # -m: mangle (shorten variable names)
    # --module: treat as ES6 module
    npx terser $sourceFile -c -m --module -o $outputFile

    if ($LASTEXITCODE -eq 0) {
        $originalSize = (Get-Item $sourceFile).Length
        $minifiedSize = (Get-Item $outputFile).Length
        $reduction = [math]::Round((($originalSize - $minifiedSize) / $originalSize) * 100, 2)
        
        Write-Host "`nMinification successful!" -ForegroundColor Green
        Write-Host "Original size:  $originalSize bytes" -ForegroundColor Yellow
        Write-Host "Minified size:  $minifiedSize bytes" -ForegroundColor Yellow
        Write-Host "Size reduction: $reduction%" -ForegroundColor Green
        Write-Host "`nOutput: $outputFile" -ForegroundColor Cyan
    } else {
        Write-Host "Error: Terser failed with exit code $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "Error during minification: $_" -ForegroundColor Red
    exit 1
}
