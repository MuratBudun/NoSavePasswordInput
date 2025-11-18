# PowerShell script to build both ES6 module and standalone versions
# Usage: .\build.ps1

$sourceFile = "no_save_password_control.js"
$moduleOutput = "no_save_password_control.module.min.js"
$standaloneOutput = "no_save_password_control.min.js"
$tempFile = "temp_standalone.js"

Write-Host ""
Write-Host "=== Building No Save Password Control ===" -ForegroundColor Cyan
Write-Host ""

# Check if source file exists
if (-not (Test-Path $sourceFile)) {
    Write-Host "Error: $sourceFile not found!" -ForegroundColor Red
    exit 1
}

# Check if terser is available
$terserExists = Get-Command npx -ErrorAction SilentlyContinue
if (-not $terserExists) {
    Write-Host "Error: npx not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

$originalSize = (Get-Item $sourceFile).Length

# ============================================
# 1. Build ES6 Module Version (with exports)
# ============================================
Write-Host "1. Building ES6 Module version (for React, Vue, etc.)..." -ForegroundColor Yellow

try {
    npx terser $sourceFile -c -m --module -o $moduleOutput
    
    if ($LASTEXITCODE -eq 0) {
        $moduleSize = (Get-Item $moduleOutput).Length
        $reduction = [math]::Round((($originalSize - $moduleSize) / $originalSize) * 100, 2)
        
        Write-Host "   Module build successful!" -ForegroundColor Green
        Write-Host "   File: $moduleOutput" -ForegroundColor Gray
        Write-Host "   Size: $moduleSize bytes (reduced by $reduction percent)" -ForegroundColor Gray
    } else {
        Write-Host "   Module build failed!" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "   Error: $_" -ForegroundColor Red
    exit 1
}

Write-Host ""

# ============================================
# 2. Build Standalone Version (no exports)
# ============================================
Write-Host "2. Building Standalone version (for vanilla HTML)..." -ForegroundColor Yellow

try {
    # Read source and remove export statements
    $content = Get-Content $sourceFile -Raw
    $content = $content -replace "(?m)^// ES6 module export[\s\S]*export default NoSavePasswordInput;?\s*$", ""
    
    # Write to temp file
    $content | Out-File -FilePath $tempFile -Encoding UTF8 -NoNewline
    
    # Minify without --module flag
    npx terser $tempFile -c -m -o $standaloneOutput
    
    if ($LASTEXITCODE -eq 0) {
        $standaloneSize = (Get-Item $standaloneOutput).Length
        $reduction = [math]::Round((($originalSize - $standaloneSize) / $originalSize) * 100, 2)
        
        Write-Host "   Standalone build successful!" -ForegroundColor Green
        Write-Host "   File: $standaloneOutput" -ForegroundColor Gray
        Write-Host "   Size: $standaloneSize bytes (reduced by $reduction percent)" -ForegroundColor Gray
    } else {
        Write-Host "   Standalone build failed!" -ForegroundColor Red
        Remove-Item $tempFile -ErrorAction SilentlyContinue
        exit 1
    }
} catch {
    Write-Host "   Error: $_" -ForegroundColor Red
    Remove-Item $tempFile -ErrorAction SilentlyContinue
    exit 1
}

# Clean up temp file
Remove-Item $tempFile -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "=== Build Summary ===" -ForegroundColor Cyan
Write-Host "Original:    $originalSize bytes" -ForegroundColor White
Write-Host "Module:      $moduleSize bytes (with exports)" -ForegroundColor Green
Write-Host "Standalone:  $standaloneSize bytes (no exports)" -ForegroundColor Green
Write-Host ""
Write-Host "Usage:" -ForegroundColor Cyan
Write-Host "  React/Vue:       import NoSavePasswordInput from './$moduleOutput'" -ForegroundColor Gray
Write-Host "  Vanilla HTML:    <script src='$standaloneOutput'></script>" -ForegroundColor Gray
Write-Host ""
