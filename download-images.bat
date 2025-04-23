@echo off
echo Cosamia Snack Image Downloader
echo ===============================
echo.
echo This script will download placeholder images for the Cosamia Snack website.
echo.

rem Check if Python is installed
python --version > nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed or not in your PATH.
    echo Please install Python from https://www.python.org/downloads/
    echo and make sure it's added to your PATH.
    echo.
    echo Alternatively, you can open placeholder-images.html in your browser
    echo and download the images manually.
    echo.
    pause
    exit /b 1
)

echo Python is installed. Checking required modules...

rem Check if required modules are installed
python -c "import urllib.request" > nul 2>&1
if %errorlevel% neq 0 (
    echo Required Python modules are missing.
    echo Installing...
    pip install urllib3
)

echo.
echo Starting download process...
echo.

rem Run the Python script
python download_placeholders.py

echo.
echo Process complete! 
echo If any errors occurred, please check the output above.
echo You can also open placeholder-images.html in your browser to download images manually.
echo.
pause 