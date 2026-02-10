# GRFF UI Library

Shared component library for GRFF Platform.

## Installation (Build-Time)

This package is included at build time - changes require rebuilding the app.

## Components

- **Button** - Primary UI button
- **Card** - Content card container
- **Alert** - Notification alerts

## Usage

```tsx
import { Button, Card, Alert } from '@grff/ui-library';

function MyPage() {
  return (
    <Card title="Welcome">
      <Alert type="success">Operation successful!</Alert>
      <Button variant="primary">Click me</Button>
    </Card>
  );
}
```
