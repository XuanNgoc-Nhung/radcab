#!/bin/bash

# Script to download assets from CDN and update blade file

BLADE_FILE="resources/views/user/components/services/real-estate-tokenization.blade.php"
PUBLIC_DIR="public"

# Extract all unique URLs
grep 'src="https://' "$BLADE_FILE" | sed 's/.*src="https:\/\///' | sed 's/".*//' | sed 's/?.*$//' | sort -u > /tmp/urls.txt

# Also get www.nadcab.com URLs
grep 'src="https://www.nadcab.com/' "$BLADE_FILE" | sed 's/.*src="https:\/\/www.nadcab.com\///' | sed 's/".*//' | sed 's/?.*$//' | sort -u >> /tmp/urls.txt

# Download each file
while IFS= read -r url_path; do
    if [ -z "$url_path" ]; then
        continue
    fi
    
    # Determine the domain and full URL
    if [[ "$url_path" == img.nadcab.com/* ]]; then
        full_url="https://$url_path"
        local_path="$PUBLIC_DIR/${url_path#img.nadcab.com/}"
    elif [[ "$url_path" == www.nadcab.com/* ]]; then
        full_url="https://$url_path"
        local_path="$PUBLIC_DIR/${url_path#www.nadcab.com/}"
    else
        continue
    fi
    
    # Create directory if it doesn't exist
    local_dir=$(dirname "$local_path")
    mkdir -p "$local_dir"
    
    # Download file
    echo "Downloading: $full_url -> $local_path"
    curl -L -o "$local_path" "$full_url" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo "✓ Downloaded: $local_path"
    else
        echo "✗ Failed: $full_url"
    fi
done < /tmp/urls.txt

echo "Download complete!"

