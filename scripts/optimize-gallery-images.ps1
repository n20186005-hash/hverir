# Compress the gallery JPEGs in place (max width 1600 px, quality 82).
# Mobile-first LCP optimisation: the gallery folder was ~45 MB, one file alone was 14 MB.
# Run with Windows PowerShell 5.1 (System.Drawing is available):
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts/optimize-gallery-images.ps1

Add-Type -AssemblyName System.Drawing

$dir = Join-Path $PSScriptRoot '..\public\gallery'
$maxWidth = 1600
$quality = 82

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' } | Select-Object -First 1
$params = New-Object System.Drawing.Imaging.EncoderParameters(1)
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality, [long]$quality)

$before = 0
$after = 0

Get-ChildItem -LiteralPath $dir -Filter *.jpg | ForEach-Object {
  $file = $_
  $before += $file.Length

  $img = [System.Drawing.Image]::FromFile($file.FullName)
  $w = $img.Width
  $h = $img.Height
  if ($w -gt $maxWidth) {
    $nw = $maxWidth
    $nh = [int][math]::Round($h * $maxWidth / $w)
  } else {
    $nw = $w
    $nh = $h
  }

  $bmp = New-Object System.Drawing.Bitmap($nw, $nh)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($img, 0, 0, $nw, $nh)
  $g.Dispose()
  $img.Dispose()

  $tmp = $file.FullName + '.tmp.jpg'
  $bmp.Save($tmp, $codec, $params)
  $bmp.Dispose()

  Move-Item -LiteralPath $tmp -Destination $file.FullName -Force
  $after += (Get-Item -LiteralPath $file.FullName).Length
  Write-Output ("{0}  ->  {1}x{2}" -f $file.Name, $nw, $nh)
}

Write-Output ("Total: {0:N1} MB -> {1:N1} MB" -f ($before / 1MB), ($after / 1MB))
