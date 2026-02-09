@echo off
REM Fathom — combine release zips into a complete installation
REM
REM Usage:
REM   1. Download all fathom-*.zip files into the same directory
REM   2. Double-click install.bat
REM   3. Serve the fathom\ directory with any static file server

echo === Fathom Installer ===
echo.

set "INSTALL_DIR=%~dp0fathom"
mkdir "%INSTALL_DIR%" 2>nul

if exist "%~dp0fathom-app.zip" (
    echo Extracting fathom-app.zip...
    powershell -Command "Expand-Archive -Force '%~dp0fathom-app.zip' '%INSTALL_DIR%'"
) else (
    echo WARNING: fathom-app.zip not found
)

mkdir "%INSTALL_DIR%\man_pages" 2>nul

for %%f in ("%~dp0fathom-man-pages-*.zip") do (
    echo Extracting %%~nxf...
    powershell -Command "Expand-Archive -Force '%%f' '%INSTALL_DIR%\man_pages'"
)

echo.
echo === Done ===
echo Installed to: %INSTALL_DIR%
echo.
echo To run locally:
echo   cd %INSTALL_DIR%
echo   python -m http.server 8000
echo   Open http://localhost:8000
echo.
pause
