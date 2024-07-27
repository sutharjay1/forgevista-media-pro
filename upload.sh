#!/bin/bash

# Prompt for commit message
read -p "Enter commit message: " message

# Commit and push changes
git add .
git commit -m "$message"
git push origin main
