# 🔧 TECHNICAL REFERENCE - Developer Guide

## 📚 System Architecture

```
┌─────────────────────────────────────────────────────┐
│          HTML User Interface Layer (16 pages)       │
├─────────────────────────────────────────────────────┤
│        Business Logic Layer (auth.js)               │
│     - Authentication & Authorization                 │
│     - Session Management (sessionStorage)            │
│     - Role-Based Access Control                      │
├─────────────────────────────────────────────────────┤
│      Data Abstraction Layer (db.js)                 │
│     - User Management                               │
│     - Route, Bus, Driver, Schedule CRUD             │
│     - Ticket Booking & Status                       │
│     - Transaction & Payment Tracking                │
│     - Revenue Statistics                            │
├─────────────────────────────────────────────────────┤
│           utility Functions (utils.js)              │
│     - Formatting, Notifications, QR Codes           │
│     - Authentication Guards                         │
│     - Data Lookups                                  │
├─────────────────────────────────────────────────────┤
│         Browser localStorage (JSON Data)            │
│     - Persistent data storage (no backend)          │
│     - ~5MB limit per domain                         │
└─────────────────────────────────────────────────────┘
```

---

## 📖 API Reference

### Database Layer (db.js)

#### Class: Database

```javascript
const db = new Database();
```

#### User Management

```javascript
// Register new user
db.registerUser(name, email, phone, password, role)
// Returns: {success: true/false, message: "..."}

// Login user
db.loginUser(email, password)
// Returns: {success: true, user: {...}} or {success: false}

// Update user password
db.updatePassword(userId, newPassword)
// Returns: success flag

// Get user by ID
db.getUser(userId)
// Returns: user object
```

#### Route Management

```javascript
// Get all routes
db.getRoutes()
// Returns: Array of route objects

// Add new route
db.addRoute(name, startPoint, endPoint, distance, estimatedTime)
// Returns: route object with ID

// Delete route
db.deleteRoute(routeId)
// Returns: success flag
```

#### Bus Management

```javascript
// Get all buses
db.getBuses()
// Returns: Array of bus objects

// Add new bus
db.addBus(licensePlate, type, capacity, status)
// Returns: bus object with ID

// Delete bus
db.deleteBus(busId)
// Returns: success flag
```

#### Driver Management

```javascript
// Get all drivers
db.getDrivers()
// Returns: Array of driver objects

// Get driver by ID
db.getDriver(driverId)
// Returns: driver object
```

#### Schedule Management

```javascript
// Get all schedules
db.getSchedules()
// Returns: Array of schedule objects

// Get schedules for route on specific date
db.getSchedulesByRouteAndDate(routeId, date)
// Returns: Filtered schedules array

// Add new schedule
db.addSchedule(routeId, busId, driverId, date, departureTime, arrivalTime)
// Returns: schedule object with ID

// Get available seats for schedule
db.getAvailableSeats(scheduleId)
// Returns: Array of available seat numbers
```

#### Ticket Management

```javascript
// Book new ticket
db.bookTicket(scheduleId, passengerName, email, phone, seatNumber, price)
// Returns: ticket object with QR code

// Get user's tickets
db.getTicketsByUserId(userId)
// Returns: Array of ticket objects

// Get all tickets (admin)
db.getTickets()
// Returns: All tickets array

// Update ticket status
db.updateTicketStatus(ticketId, status)
// Status: 'paid', 'unpaid', 'used', 'cancelled'

// Cancel ticket
db.cancelTicket(ticketId)
// Returns: success flag
```

#### Payment/Transaction Management

```javascript
// Add transaction
db.addTransaction(ticketId, paymentMethod, amount, status)
// Returns: transaction object

// Get user's transactions
db.getTransactionsByUserId(userId)
// Returns: Array of transaction objects

// Get all transactions (admin)
db.getTransactions()
// Returns: All transactions array
```

#### Reporting

```javascript
// Get revenue statistics
db.getRevenueStats(startDate, endDate)
// Returns: {
//   totalRevenue: number,
//   ticketsSold: number,
//   transactions: array,
//   averagePrice: number
// }

// Get tickets by status
db.getTicketsByStatus(status)
// Returns: Filtered tickets array
```

---

### Authentication Layer (auth.js)

#### Class: AuthManager

```javascript
const auth = new AuthManager();
```

#### Authentication Methods

```javascript
// User registration
auth.register(name, email, phone, password, confirmPassword)
// Returns: {success, message, user}

// User login
auth.login(email, password)
// Returns: {success, user, message}
// Stores in sessionStorage

// User logout
auth.logout()
// Returns: {success: true}

// Get current logged-in user
auth.getCurrentUser()
// Returns: user object or null

// Check if user has role
auth.hasRole(role)
// role: 'admin', 'staff', 'customer'
// Returns: true/false
```

#### Password Management

```javascript
// Change password
auth.changePassword(oldPassword, newPassword, confirmPassword)
// Returns: {success, message}

// Request password reset
auth.forgotPassword(email)
// Returns: {success, token, message}

// Reset password with token
auth.resetPassword(email, token, newPassword, confirmPassword)
// Returns: {success, message}
```

---

### Utilities Layer (utils.js)

#### Authentication Guards

```javascript
// Check if user is logged in
checkAuth()
// Redirects to login.html if not authenticated

// Check if user is admin
checkAdminAuth()
// Redirects to login.html if not admin role
```

#### Formatting Functions

```javascript
// Format currency (Vietnamese Dong)
formatCurrency(amount)
// Returns: "1.500.000 ₫"

// Format date
formatDate(date)
// Returns: "01/04/2026"

// Format date and time
formatDateTime(date)
// Returns: "01/04/2026 14:30"
```

#### QR Code Generation

```javascript
// Generate QR code URL
generateQRCode(text)
// Returns: URL to QR image from qrserver.com
// Usage: <img src="generateQRCode(ticketId)" />
```

#### Notifications

```javascript
// Show temporary notification
showNotification(message, type)
// type: 'success', 'error', 'info', 'warning'
// Auto-dismisses after 3 seconds
```

#### Data Lookup Functions

```javascript
// Get route name by ID
getRouteNameById(routeId)
// Returns: string (route name)

// Get bus name by ID
getBusNameById(busId)
// Returns: string (bus license plate)

// Get driver name by ID
getDriverNameById(driverId)
// Returns: string (driver name)
```

#### PDF/Document Generation

```javascript
// Generate ticket PDF content
generateTicketPDF(ticket, schedule)
// Returns: formatted string for download
```

---

## 🔑 Data Models

### User Object
```javascript
{
  id: "USR-001",
  name: "Nguyễn Văn A",
  email: "user@example.com",
  phone: "0912345678",
  password: "hashed_password", // In production: use bcrypt
  role: "customer", // 'admin', 'staff', 'customer'
  status: "active", // 'active', 'inactive', 'suspended'
  createdDate: "2026-01-15"
}
```

### Route Object
```javascript
{
  id: "ROUTE-001",
  name: "Hà Nội → Sài Gòn",
  startPoint: "Hà Nội",
  endPoint: "Sài Gòn",
  distance: 1600, // km
  estimatedTime: 20, // hours
  status: "active"
}
```

### Bus Object
```javascript
{
  id: "BUS-001",
  licensePlate: "SG-001",
  type: "Limousine", // or "VIP", "Thường"
  capacity: 45,
  status: "active", // 'active', 'maintenance', 'inactive'
  driverId: "DRV-001"
}
```

### Driver Object
```javascript
{
  id: "DRV-001",
  name: "Trần Văn B",
  phone: "0987654321",
  status: "active",
  busId: "BUS-001"
}
```

### Schedule Object
```javascript
{
  id: "SCH-001",
  routeId: "ROUTE-001",
  busId: "BUS-001",
  driverId: "DRV-001",
  date: "2026-04-15",
  departureTime: "10:00",
  arrivalTime: "18:00",
  status: "active",
  price: 450000 // VND
}
```

### Ticket Object
```javascript
{
  id: "TKT-001",
  scheduleId: "SCH-001",
  userId: "USR-001",
  passengerName: "Nguyễn Văn A",
  email: "user@example.com",
  phone: "0912345678",
  seatNumber: 5,
  price: 450000,
  status: "paid", // 'paid', 'unpaid', 'used', 'cancelled'
  qrCode: "TKT-001-QR",
  bookingDate: "2026-04-10"
}
```

### Transaction Object
```javascript
{
  id: "TXN-001",
  ticketId: "TKT-001",
  paymentMethod: "card", // 'cash', 'card', 'ewallet'
  amount: 450000,
  status: "completed", // 'completed', 'pending', 'failed'
  timestamp: "2026-04-10 10:30:00"
}
```

---

## 🔄 Common Workflows

### Workflow 1: User Registration & Login

```
1. User visits login.html
2. User clicks "Đăng ký" (Register)
3. Form submits with: name, email, phone, password
4. auth.register() validates inputs
5. db.registerUser() stores user in localStorage
6. Success → redirect to login, user logs in
7. auth.login() validates credentials
8. sessionStorage stores currentUser
9. Redirect to dashboard.html
```

### Workflow 2: Ticket Booking

```
1. User at booking.html
2. Select route from dropdown (db.getRoutes())
3. Select date (minimum = today)
4. Search button → db.getSchedulesByRouteAndDate()
5. Click schedule card
6. Visual seat map loaded (db.getAvailableSeats())
7. Click seat → mark as selected
8. Enter passenger info (name, phone)
9. Select payment method
10. Submit → db.bookTicket() creates ticket
11. If payment status = paid, create transaction
12. QR code generated (generateQRCode())
13. Redirect to ticket-detail.html
```

### Workflow 3: Admin Adding Route

```
1. Admin at admin-routes.html
2. checkAdminAuth() confirms admin role
3. Fill form: name, start, end, distance, time
4. Submit button → db.addRoute()
5. localStorage updated with new route
6. Table reloaded showing new route
7. Success notification displays
```

### Workflow 4: Revenue Report Generation

```
1. Admin at admin-reports.html
2. Select date range
3. Submit → db.getRevenueStats(startDate, endDate)
4. Calculates: total revenue, tickets sold, transactions
5. Display in stats boxes and transaction table
6. Export button generates text file
7. Browser downloads file to computer
```

---

## 🛠️ Customization Guide

### Adding a New Field to User

1. Update User object in `db.js` initDatabase()
2. Update registration form in `login.html`
3. Update profile display in `profile.html`
4. Add styling in `style.css`

### Adding a New Payment Method

1. Add option to payment dropdown in `booking.html`
2. Update transaction creation logic
3. Update report filtering if needed

### Adding a New Admin Feature

1. Create new HTML page (e.g., `admin-users.html`)
2. Add link to `admin-dashboard.html`
3. Add checkAdminAuth() guard
4. Use db methods for CRUD operations
5. Style with existing CSS classes

### Creating a New Report

1. Add method to `db.js` for data aggregation
2. Create new HTML page (e.g., `admin-analytics.html`)
3. Call db method to fetch data
4. Display in charts/tables
5. Add export functionality

---

## 🔐 Security Implementation

### Current Implementation

```javascript
// Password storage (UNSAFE - demo only)
password: user.password // Stored as plain text

// Session management
sessionStorage.setItem('currentUser', JSON.stringify(user))

// RBAC check
if (!auth.hasRole('admin')) {
  window.location.href = 'login.html'
}
```

### Production Recommendations

```javascript
// 1. Use bcrypt for password hashing
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);

// 2. Use JWT tokens
const jwt = require('jsonwebtoken');
const token = jwt.sign({userId}, SECRET_KEY);

// 3. HTTPS only
// 4. CSRF protection
// 5. Input sanitization
// 6. Rate limiting
// 7. Audit logging
// 8. Environment variables for secrets
```

---

## 🧪 Testing Checklist

### Unit Tests

- [ ] Auth registration with invalid email
- [ ] Auth login with wrong password
- [ ] Adding duplicate route
- [ ] Booking seat already taken
- [ ] Payment transaction creation
- [ ] Date validation (no past dates)

### Integration Tests

- [ ] Complete booking workflow
- [ ] Admin route creation and use in booking
- [ ] Schedule creation and ticket availability
- [ ] Revenue reporting accuracy

### UI Tests

- [ ] Form validation messages appear
- [ ] QR codes generate and display
- [ ] Responsive layout on mobile
- [ ] Print functionality works
- [ ] PDF export generates correctly
- [ ] Navigation links work

### Security Tests

- [ ] Can't access admin pages as customer
- [ ] Session expires on browser close
- [ ] Password change validates old password
- [ ] No XSS vulnerabilities in user input
- [ ] localStorage not accessible from other domains

---

## 📊 Performance Optimization

### Current Bottlenecks

1. **localStorage Limitations**
   - Max 5MB per domain
   - No async operations
   - No transactions

2. **Sync Processing**
   - All operations blocking
   - No caching layer
   - Full table scans

### Optimization Strategies

```javascript
// 1. Implement indexing
const userIndex = {}; // id -> user mapping
const emailIndex = {}; // email -> userId mapping

// 2. Pagination for large lists
function getTicketsPage(pageNum, pageSize) {
  const start = pageNum * pageSize;
  return tickets.slice(start, start + pageSize);
}

// 3. Lazy loading
const visibleRows = 20;
const totalRows = tickets.length;

// 4. Caching frequent queries
const scheduleCache = {};
const cacheExpiry = 5 * 60 * 1000; // 5 minutes
```

---

## 🚀 Deployment Guide

### Step 1: Prepare for Production

```bash
# Update security
- Hash passwords with bcrypt
- Use environment variables
- Add HTTPS certificate
- Enable CORS properly
```

### Step 2: Setup Backend API

```javascript
// Replace localStorage with API calls
// Example: Get routes
fetch('/api/routes')
  .then(res => res.json())
  .then(routes => {
    // Use routes
  })
```

### Step 3: Deploy to Server

```bash
# Option 1: Static hosting (Netlify, Vercel)
npm run build
# Deploy dist folder

# Option 2: Traditional server (Apache, Nginx)
# Move files to /var/www/html

# Option 3: Node.js server
npm install express
# Create server.js to serve files
node server.js
```

### Step 4: Configure Database

```javascript
// Replace db.js with API integration
class Database {
  async registerUser(name, email, phone, password) {
    return fetch('/api/users/register', {
      method: 'POST',
      body: JSON.stringify({name, email, phone, password})
    })
  }
}
```

---

## 📚 External Dependencies

None! This system uses:

- **Pure HTML5** - No frameworks
- **Vanilla JavaScript** - ES6 compatible
- **Browser APIs** - localStorage, sessionStorage
- **External Services** - qrserver.com for QR codes

### Optional Enhancements

- **Google Maps API** - For GPS tracking
- **Stripe/VNPay** - Real payment processing
- **SendGrid** - Email notifications
- **Twilio** - SMS notifications
- **Chart.js** - Advanced analytics charts

---

## 🔗 Integration Points

### Ready for Backend Integration

```javascript
// Backend endpoint pattern
GET    /api/routes
POST   /api/routes
PUT    /api/routes/:id
DELETE /api/routes/:id

GET    /api/tickets/:userId
POST   /api/tickets
PUT    /api/tickets/:id

GET    /api/reports/revenue?from=&to=
```

### Database Schema (for backend)

```sql
-- Sample SQL for postgres/mysql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  role ENUM('admin', 'staff', 'customer'),
  ...
);
```

---

## 📖 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Apr 2026 | Initial release |
| 1.1.0 | TBD | Backend API integration |
| 1.2.0 | TBD | Real payment gateway |
| 1.3.0 | TBD | GPS tracking |
| 2.0.0 | TBD | Mobile app |

---

**Last Updated**: April 2026  
**Created**: April 2026  
**Maintained By**: Development Team

For questions or updates, contact: dev@busticket.com
