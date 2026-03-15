### Demo 1

## Small Ecommerce App


Small Ecommerce App

# Utkarsh Mahajan
Responsibility: Base setup of Host Application

Initialize and configure the Host app
Setup Webpack with Module Federation
Define basic folder structure
Ensure the Host runs independently without remotes
Verify development server runs on defined port

# Chintan
Responsibility: Micro App Configuration and Error Handling

Configure remote integration in the Host application
Manage shared dependencies configuration
Implement error handling for remote loading failures
Add fallback UI if a micro app fails to load
Validate integration between Host and Micro Apps

## Integration Validation Checklist

| # | Check | How to Verify |
|---|-------|---------------|
| 1 | Host loads without remote | Start host only (`pnpm start:host_app`); fallback UI shown |
| 2 | Host loads with remote | Run `pnpm dev`; HomePage renders in content area |
| 3 | Remote standalone works | Open http://localhost:4001 |
| 4 | Shared deps (React) singleton | No duplicate React instances; no hydration mismatch |
| 5 | Header/Footer in host | Visible, correct styling |
| 6 | Fallback on remote down | Stop remote; refresh host; retry/fallback works |

# Ankit
Responsibility: Shared UI Package (Header and Footer)

Create reusable Header component
Create reusable Footer component
Setup package configuration for npm
Publish the package to npm registry
Ensure package is consumable by Host and Micro Apps

# Nitin
Responsibility: About Us Micro App

Create standalone About Us microfrontend
Configure Module Federation remote setup
Integrate shared Header and Footer package
Ensure the app runs independently
Ensure it loads properly through Host

# Abhay
Responsibility: Home Page

Develop Home Page UI
Integrate shared Header and Footer package
Ensure proper integration within Host application
Validate overall UI consistency
