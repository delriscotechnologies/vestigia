# Photo Journal

A minimalist personal photography archive ordered by publication date. The newest entry appears first and the archive unfolds vertically.

## Add a publication

1. Copy the image into `public/photos/`.
2. Add a new object at the start of the `entries` array in `src/App.jsx`.
3. Use the publication date for `date` and `dateTime`; the capture location is not used for organization.
4. Run the checks below before publishing.

## Local development

```powershell
$nodeDir = Join-Path (Get-Location) '.tools\node-v24.18.0-win-x64'
$env:PATH = "$nodeDir;$env:PATH"
& (Join-Path $nodeDir 'npm.cmd') run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

## Verify

```powershell
$nodeDir = Join-Path (Get-Location) '.tools\node-v24.18.0-win-x64'
$env:PATH = "$nodeDir;$env:PATH"
& (Join-Path $nodeDir 'npm.cmd') run build
& (Join-Path $nodeDir 'npm.cmd') run test:sites
```
