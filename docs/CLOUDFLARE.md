# Cloudflare Pages Configuration

# Build configuration
[build]
command = "npm run build"
publish = "dist"

# Environment variables
[env.production]
NODE_ENV = "production"

# Functions configuration (if needed)
[functions]
directory = "functions"