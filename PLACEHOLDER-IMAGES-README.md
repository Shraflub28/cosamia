# Cosamia Snack - Placeholder Images Guide

This document explains how to get placeholder images for the Cosamia Snack website.

## Overview

The Cosamia Snack website uses a variety of food and restaurant images that need to be placed in the `assets/images/placeholder/` directory. We've provided several ways to acquire these placeholder images.

## Option 1: View and Download from Browser

1. Open the `placeholder-images.html` file in your browser.
2. This page displays all the required images with their filenames.
3. Right-click on each image and select "Save Image As..."
4. Save each image to the `assets/images/placeholder/` directory with the corresponding filename.

## Option 2: Use the Automated Scripts

### Windows Users:
1. Double-click on the `download-images.bat` file.
2. If Python is installed on your system, the script will automatically download all required images.
3. If Python is not installed, you'll see instructions to install it or use Option 1 instead.

### Mac/Linux Users:
1. Open Terminal and navigate to the project directory.
2. Run the following command to make the script executable (if needed):
   ```
   chmod +x download-images.sh
   ```
3. Run the script:
   ```
   ./download-images.sh
   ```
4. The script will check for Python and download all the images automatically.

## Option 3: Run the Python Script Directly

1. Make sure Python is installed on your system.
2. Open a terminal or command prompt.
3. Navigate to the project directory.
4. Run:
   ```
   python download_placeholders.py
   ```

## Required Images

See the file `assets/images/placeholder/README.md` for a complete list of required images and their descriptions.

## Alternative Image Sources

If the automated methods do not work for you, you can manually find and download appropriate images from:

1. [Unsplash](https://unsplash.com/) - High-quality free stock photos
2. [Pexels](https://www.pexels.com/) - Free stock photos & videos
3. [Pixabay](https://pixabay.com/) - Free stock photos, vectors, and illustrations

Just ensure you name them according to the required filenames and place them in the `assets/images/placeholder/` directory.

## Troubleshooting

If you encounter any issues:

1. Make sure you have an active internet connection.
2. Verify that Python is installed and accessible from your command line.
3. Check that the `assets/images/placeholder/` directory exists.
4. Try running the script again or use Option 1 to download images manually.

## License Note

The placeholder images are sourced from free stock photo websites. When using these images for a production website, make sure to review and comply with the licensing terms of the images you use. 