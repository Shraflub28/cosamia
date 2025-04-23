#!/bin/bash

echo "Cosamia Snack Image Downloader"
echo "==============================="
echo ""
echo "This script will download placeholder images for the Cosamia Snack website."
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null && ! command -v python &> /dev/null
then
    echo "Python is not installed."
    echo "Please install Python from https://www.python.org/downloads/"
    echo "or use your system's package manager."
    echo ""
    echo "Alternatively, you can open placeholder-images.html in your browser"
    echo "and download the images manually."
    echo ""
    exit 1
fi

# Determine python command
PYTHON_CMD="python3"
if ! command -v python3 &> /dev/null
then
    PYTHON_CMD="python"
fi

echo "Python is installed. Checking required modules..."

# Check if required modules are installed
$PYTHON_CMD -c "import urllib.request" &> /dev/null
if [ $? -ne 0 ]
then
    echo "Required Python modules are missing."
    echo "Installing..."
    pip install urllib3 || pip3 install urllib3
fi

echo ""
echo "Starting download process..."
echo ""

# Run the Python script
$PYTHON_CMD download_placeholders.py

echo ""
echo "Process complete!"
echo "If any errors occurred, please check the output above."
echo "You can also open placeholder-images.html in your browser to download images manually."
echo ""

read -p "Press Enter to exit..." 