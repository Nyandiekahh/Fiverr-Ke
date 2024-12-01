# Fiverr Ke Frontend Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [API Requirements](#api-requirements)
4. [Components](#components)
5. [Authentication](#authentication)
6. [Admin Features](#admin-features)
7. [Additional Notes](#additional-notes)

## Project Overview
Fiverr Ke is a Kenyan freelance marketplace where users can buy and sell services. The platform is built with React.js and supports both freelancers and clients with a comprehensive admin system.

## Project Structure
```
src/
├── components/
│   ├── common/
│   │   └── Navbar.js
│   ├── gigs/
│   │   ├── GigCard.js
│   │   ├── RatingForm.js
│   │   ├── Reviews.js
│   │   └── SearchFilters.js
│   └── notifications/
│       └── NotificationDropdown.js
├── context/
│   ├── AuthContext.js
│   └── NotificationContext.js
└── pages/
    ├── admin/
    │   ├── ActivityLog.js
    │   ├── AdminDashboard.js
    │   ├── AdminSettings.js
    │   ├── GigsManagement.js
    │   ├── OrdersManagement.js
    │   ├── ReportsAnalytics.js
    │   ├── SystemMonitoring.js
    │   ├── UserDetailsModal.js
    │   └── UsersManagement.js
    ├── Checkout.js
    ├── CreateGig.js
    ├── GigDetails.js
    ├── Gigs.js
    ├── Home.js
    ├── Login.js
    ├── Messages.js
    ├── OrderDetails.js
    ├── Orders.js
    ├── Profile.js
    ├── Register.js
    └── Settings.js
```

## API Requirements

### Authentication Endpoints

```typescript
POST /api/auth/login
{
  email: string,
  password: string
}

POST /api/auth/register
{
  fullName: string,
  email: string,
  password: string,
  role: "buyer" | "seller"
}

POST /api/auth/logout
GET /api/auth/me
```

### User Endpoints

```typescript
GET /api/users
GET /api/users/:id
PATCH /api/users/:id
{
  name?: string,
  email?: string,
  status?: "active" | "suspended" | "banned",
  role?: "buyer" | "seller"
}
```

### Gig Endpoints

```typescript
GET /api/gigs
GET /api/gigs/:id
POST /api/gigs
{
  title: string,
  description: string,
  category: string,
  packages: {
    basic: {
      price: number,
      deliveryTime: number,
      revisions: number,
      features: string[]
    },
    standard: {...},
    premium: {...}
  }
}

PATCH /api/gigs/:id
DELETE /api/gigs/:id
```

### Order Endpoints

```typescript
GET /api/orders
GET /api/orders/:id
POST /api/orders
{
  gigId: string,
  package: "basic" | "standard" | "premium",
  requirements: string
}

PATCH /api/orders/:id
{
  status: "pending" | "in_progress" | "completed" | "cancelled"
}
```


### Common Components

#### Navbar (`components/common/Navbar.js`)
```typescript
interface NavProps {
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
  onLogout: () => void;
}
```
Navigation bar with user authentication status, search, and main menu links.

### Gig Components

#### GigCard (`components/gigs/GigCard.js`)
```typescript
interface GigCardProps {
  id: string;
  title: string;
  seller: {
    name: string;
    rating: number;
    level: string;
  };
  price: number;
  image: string;
  reviews: number;
}
```
Displays gig preview in grid layout.

#### RatingForm (`components/gigs/RatingForm.js`)
```typescript
interface RatingFormProps {
  gigId: string;
  onSubmit: (rating: number, comment: string) => void;
}
```
Form for submitting gig reviews and ratings.

#### Reviews (`components/gigs/Reviews.js`)
```typescript
interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  comment: string;
  date: string;
}
```
Displays gig reviews with pagination.

## Page Components

### User Pages

#### Home (`pages/Home.js`)
- Landing page with featured gigs
- Category navigation
- Popular services
- Top sellers

#### Profile (`pages/Profile.js`)
```typescript
interface ProfileData {
  name: string;
  email: string;
  bio: string;
  skills: string[];
  languages: string[];
  education: string;
  portfolio: {
    title: string;
    link: string;
  }[];
}
```
User profile management page.

#### Messages (`pages/Messages.js`)
```typescript
interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  read: boolean;
}
```
Real-time messaging system.

### Gig Management

#### CreateGig (`pages/CreateGig.js`)
```typescript
interface GigData {
  title: string;
  category: string;
  description: string;
  packages: {
    basic: Package;
    standard: Package;
    premium: Package;
  };
  requirements: string[];
}

interface Package {
  price: number;
  deliveryTime: number;
  revisions: number;
  features: string[];
}
```
Form for creating and editing gigs.

## Admin Components

### AdminDashboard (`pages/admin/AdminDashboard.js`)
```typescript
interface DashboardStats {
  totalUsers: number;
  totalGigs: number;
  activeOrders: number;
  totalRevenue: number;
  recentOrders: Order[];
}
```
Main admin interface with overview statistics.

### UsersManagement (`pages/admin/UsersManagement.js`)
```typescript
interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
  totalOrders: number;
  revenue: number;
}
```
User management interface with filtering and actions.

### GigsManagement (`pages/admin/GigsManagement.js`)
```typescript
interface GigManagementData {
  id: string;
  title: string;
  seller: string;
  category: string;
  price: number;
  status: string;
  created: string;
  orders: number;
}
```
Gig moderation and management interface.

## Context Providers

### AuthContext (`context/AuthContext.js`)
```typescript
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: RegisterData) => Promise<void>;
}
```
Manages authentication state and user sessions.

### NotificationContext (`context/NotificationContext.js`)
```typescript
interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markAsRead: (id: string) => void;
  clearNotification: (id: string) => void;
}
```
Handles system notifications and alerts.

## API Integration Requirements

### Authentication
- JWT token-based authentication
- Token refresh mechanism
- Session management
- Role-based access control

### Real-time Features
- WebSocket connection for messaging
- Real-time notifications
- Order status updates

### File Management
```typescript
interface FileUpload {
  endpoint: '/api/upload';
  allowedTypes: ['image/jpeg', 'image/png', 'image/gif'];
  maxSize: 5242880; // 5MB
}
```

### Payment Integration
```typescript
interface PaymentConfig {
  mpesa: {
    endpoint: '/api/payments/mpesa';
    callbacks: {
      success: string;
      cancel: string;
    };
  };
}
```

## Additional Technical Requirements

### Security
- CSRF protection
- XSS prevention
- Rate limiting
- Input validation

### Performance
- Image optimization
- Lazy loading
- Pagination
- Caching strategy

### Error Handling
```typescript
interface ErrorResponse {
  status: number;
  message: string;
  details?: string;
}
```

### Monitoring
- Error logging
- Performance metrics
- User activity tracking
- System health monitoring

No, let me complete the documentation with additional important sections:


## Payment System Integration

### M-PESA Integration Requirements
```typescript
interface MPESAPayment {
  endpoints: {
    initiate: '/api/payments/mpesa/initiate';
    confirm: '/api/payments/mpesa/confirm';
    status: '/api/payments/mpesa/status/:transactionId';
  };
  paymentTypes: {
    orderPayment: 'ORDER_PAYMENT';
    withdrawal: 'WITHDRAWAL';
  };
  callbacks: {
    success: string;
    failure: string;
  };
}
```

## Order Management System

### Order States
```typescript
enum OrderStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  UNDER_REVIEW = 'under_review',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  DISPUTED = 'disputed'
}

interface OrderWorkflow {
  currentState: OrderStatus;
  allowedTransitions: OrderStatus[];
  timeoutRules: {
    deliveryTime: number;
    reviewTime: number;
    disputeWindow: number;
  };
}
```

## Ratings and Reviews System

### Review Requirements
```typescript
interface ReviewSystem {
  rating: {
    min: 1;
    max: 5;
    allowHalf: boolean;
  };
  reviews: {
    minLength: 10;
    maxLength: 500;
    requireOrder: boolean;
  };
  reporting: {
    reasons: string[];
    moderationQueue: boolean;
  };
}
```

## User Roles and Permissions

### Role Definitions
```typescript
enum UserRole {
  ADMIN = 'admin',
  SELLER = 'seller',
  BUYER = 'buyer'
}

interface RolePermissions {
  admin: {
    canManageUsers: boolean;
    canManageGigs: boolean;
    canViewAnalytics: boolean;
    canManageSettings: boolean;
  };
  seller: {
    canCreateGigs: boolean;
    canReceiveOrders: boolean;
    canWithdraw: boolean;
  };
  buyer: {
    canPlaceOrders: boolean;
    canLeaveReviews: boolean;
  };
}
```

## Search and Filter System

### Search Configuration
```typescript
interface SearchConfig {
  endpoints: {
    search: '/api/search';
    suggestions: '/api/search/suggestions';
    filters: '/api/search/filters';
  };
  filters: {
    price: {
      min: number;
      max: number;
      ranges: PriceRange[];
    };
    delivery: {
      options: DeliveryOption[];
    };
    rating: {
      min: number;
    };
    sellerLevel: string[];
  };
  sorting: {
    options: [
      'price_low_to_high',
      'price_high_to_low',
      'rating',
      'newest'
    ];
  };
}
```

## Notification System

### Notification Types
```typescript
interface NotificationConfig {
  types: {
    ORDER_UPDATE: 'order_update';
    MESSAGE: 'message';
    REVIEW: 'review';
    ADMIN_ALERT: 'admin_alert';
  };
  delivery: {
    inApp: boolean;
    email: boolean;
    push: boolean;
  };
  retention: {
    days: number;
  };
}
```

## Analytics Requirements

### Tracking Events
```typescript
interface AnalyticsEvents {
  user: {
    signup: 'USER_SIGNUP';
    login: 'USER_LOGIN';
    profileUpdate: 'PROFILE_UPDATE';
  };
  gig: {
    create: 'GIG_CREATE';
    view: 'GIG_VIEW';
    search: 'GIG_SEARCH';
  };
  order: {
    create: 'ORDER_CREATE';
    statusChange: 'ORDER_STATUS_CHANGE';
    complete: 'ORDER_COMPLETE';
  };
}
```

## Error Handling System

### Error Types
```typescript
interface ErrorHandling {
  validation: {
    code: 'VALIDATION_ERROR';
    handler: (error: ValidationError) => void;
  };
  authentication: {
    code: 'AUTH_ERROR';
    handler: (error: AuthError) => void;
  };
  network: {
    code: 'NETWORK_ERROR';
    handler: (error: NetworkError) => void;
  };
  payment: {
    code: 'PAYMENT_ERROR';
    handler: (error: PaymentError) => void;
  };
}
```

## Environment Configuration

### Required Environment Variables
```typescript
interface EnvConfig {
  API_URL: string;
  SOCKET_URL: string;
  MPESA_CALLBACK_URL: string;
  STORAGE_URL: string;
  MAX_FILE_SIZE: number;
  PAGINATION_LIMIT: number;
  JWT_EXPIRY: number;
}
```

## Deployment Requirements

### Build Configuration
```typescript
interface BuildConfig {
  target: 'ES2020';
  optimization: {
    splitChunks: boolean;
    minify: boolean;
  };
  environment: {
    development: EnvConfig;
    production: EnvConfig;
  };
}
```

## Testing Requirements

### Test Coverage
```typescript
interface TestRequirements {
  coverage: {
    statements: 80;
    branches: 80;
    functions: 80;
    lines: 80;
  };
  types: {
    unit: boolean;
    integration: boolean;
    e2e: boolean;
  };
}
```

## Mobile Responsiveness

### Breakpoints
```typescript
interface Breakpoints {
  mobile: '320px';
  tablet: '768px';
  desktop: '1024px';
  widescreen: '1280px';
}
```

## Performance Requirements

### Loading Speed Targets
```typescript
interface PerformanceMetrics {
  firstContentfulPaint: '< 1.5s';
  timeToInteractive: '< 3s';
  largestContentfulPaint: '< 2.5s';
  firstInputDelay: '< 100ms';
}
```

## Security Implementation

### Security Requirements
```typescript
interface SecurityMeasures {
  authentication: {
    tokenExpiry: '24h';
    refreshTokenExpiry: '7d';
    passwordRequirements: {
      minLength: 8;
      requireNumbers: true;
      requireSpecialChars: true;
      requireUppercase: true;
    };
  };
  rateLimit: {
    loginAttempts: 5;
    requestsPerMinute: 100;
  };
}
```

## Data Models

### Core Data Structures
```typescript
interface Models {
  User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    profileData: ProfileData;
    created_at: Date;
    updated_at: Date;
  }

  Gig {
    id: string;
    seller_id: string;
    title: string;
    description: string;
    category: string;
    packages: GigPackages;
    status: GigStatus;
    created_at: Date;
    updated_at: Date;
  }

  Order {
    id: string;
    gig_id: string;
    buyer_id: string;
    seller_id: string;
    package_type: PackageType;
    status: OrderStatus;
    amount: number;
    created_at: Date;
    updated_at: Date;
  }
}
```

## Backend API Integration Guide

### API Standards
```typescript
interface APIStandards {
  baseURL: string;
  headers: {
    'Content-Type': 'application/json';
    'Authorization': 'Bearer ${token}';
  };
  responseFormat: {
    success: boolean;
    data?: any;
    error?: {
      code: string;
      message: string;
    };
  };
}
```

## Webhook Requirements

### Webhook Implementation
```typescript
interface WebhookConfig {
  endpoints: {
    mpesaCallback: '/webhooks/mpesa';
    orderUpdate: '/webhooks/orders';
    userActivity: '/webhooks/activity';
  };
  security: {
    secret: string;
    ipWhitelist: string[];
  };
}
```

## Third-Party Integrations

### Required Services
```typescript
interface Integrations {
  payment: {
    mpesa: boolean;
    serviceProvider: 'Safaricom';
  };
  storage: {
    type: 'AWS S3';
    bucketConfiguration: {
      region: string;
      bucket: string;
    };
  };
  email: {
    provider: 'SendGrid';
    templates: {
      welcome: string;
      orderConfirmation: string;
      passwordReset: string;
    };
  };
}
```# Fiverr-Ke
