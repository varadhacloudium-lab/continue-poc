#!/bin/bash

# Deployment script for Hello World Multi-Language App
echo "Starting deployment process..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Run the application
echo "Starting Express server..."
npm start
echo "Deployment complete! Server is running on http://localhost:3000"