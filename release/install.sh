#!/bin/bash
# Fathom — combine release zips into a complete installation
#
# Usage:
#   1. Download all fathom-*.zip files into the same directory
#   2. Run: bash install.sh
#   3. Serve the fathom/ directory with any static file server

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
INSTALL_DIR="$SCRIPT_DIR/fathom"

echo "=== Fathom Installer ==="
echo ""

# Check for zip files
shopt -s nullglob
zips=("$SCRIPT_DIR"/fathom-*.zip)
if [ ${#zips[@]} -eq 0 ]; then
  echo "ERROR: No fathom-*.zip files found in $(pwd)"
  echo "Download all release zips into this directory first."
  exit 1
fi

echo "Found ${#zips[@]} zip file(s):"
for z in "${zips[@]}"; do
  echo "  $(basename "$z")"
done
echo ""

# Create install directory
mkdir -p "$INSTALL_DIR"

# Extract app zip first (contains the built app + data + tldr)
if [ -f "$SCRIPT_DIR/fathom-app.zip" ]; then
  echo "Extracting fathom-app.zip..."
  unzip -qo "$SCRIPT_DIR/fathom-app.zip" -d "$INSTALL_DIR"
else
  echo "WARNING: fathom-app.zip not found — the app won't work without it"
fi

# Extract man page zips
mkdir -p "$INSTALL_DIR/man_pages"
for z in "$SCRIPT_DIR"/fathom-man-pages-*.zip; do
  if [ -f "$z" ]; then
    echo "Extracting $(basename "$z")..."
    unzip -qo "$z" -d "$INSTALL_DIR/man_pages"
  fi
done

# Count files
total=$(find "$INSTALL_DIR" -type f | wc -l)
size=$(du -sh "$INSTALL_DIR" | cut -f1)

echo ""
echo "=== Done ==="
echo "Installed to: $INSTALL_DIR"
echo "Total files:  $total"
echo "Total size:   $size"
echo ""
echo "To run locally:"
echo "  cd $INSTALL_DIR"
echo "  python3 -m http.server 8000"
echo "  # Open http://localhost:8000"
