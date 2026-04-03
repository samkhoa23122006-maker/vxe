# 🚀 QUICK START GUIDE - BUS TICKET SYSTEM

## 📌 Getting Started in 2 Minutes

### Step 1: Open the Website
Open `index-home.html` in your browser. You'll see the landing page with navigation buttons.

### Step 2: Login or Register
Click **"Đăng Nhập"** (Login) button, or use demo accounts:

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@bus.com | admin123 |
| Staff | staff@bus.com | staff123 |
| Customer | customer1@bus.com | customer123 |

### Step 3: What You Can Do

#### 👤 If You're a Passenger:
1. **Book a Ticket** → Click "Đặt vé" in dashboard
2. **Choose Route** → Select route from dropdown
3. **Pick Date** → Choose departure date
4. **Select Seat** → Click available seat on map
5. **Enter Info** → Provide name and phone
6. **Pay** → Choose payment method
7. **Confirm** → Ticket is created with QR code
8. **View Ticket** → Go to "Vé của tôi" to see all bookings

#### 👨‍💼 If You're an Admin:
1. **Go to Admin** → Click "Quản lý" button on navbar
2. **Add Routes** → Manage bus routes
3. **Add Buses** → Manage vehicle inventory
4. **Add Schedules** → Create departure schedules
5. **View Reports** → See revenue and ticket sales
6. **Export Data** → Download reports to PDF

---

## 🗺️ Site Navigation Map

```
┌─ index-home.html (Landing Page)
│
├─ login.html (Login/Register)
│  ├─ Login Tab
│  ├─ Register Tab
│  └─ Forgot Password Tab
│
├─ dashboard.html (Passenger Home)
│  ├─ Quick Actions
│  └─ Recent Bookings
│
├─ booking.html (Book Tickets)
│  ├─ Search Routes
│  ├─ View Schedules
│  ├─ Select Seats
│  └─ Complete Booking
│
├─ my-tickets.html (My Bookings)
│  ├─ Ticket List
│  ├─ Filter by Status
│  └─ View Details
│
├─ ticket-detail.html (Ticket Info)
│  ├─ Route Details
│  ├─ QR Code
│  ├─ Print/Download
│  └─ Share Ticket
│
├─ profile.html (Account Settings)
│  ├─ View Profile
│  └─ Change Password
│
├─ about.html (About Company)
│
└─ ADMIN SECTION
   ├─ admin-dashboard.html (Admin Home)
   ├─ admin-routes.html (Manage Routes)
   ├─ admin-buses.html (Manage Buses)
   ├─ admin-schedules.html (Manage Schedules)
   └─ admin-reports.html (Reports & Analytics)
```

---

## 📋 Common Tasks

### Task 1: Book Your First Ticket
1. Login with customer account
2. Click "Đặt vé" (Book Ticket)
3. Select "Hà Nội → Hà Giang" route
4. Pick today's date
5. Click on any blue seat (available)
6. Enter your name and phone
7. Choose "Thẻ tín dụng" (Credit Card) payment
8. Click "Đặt vé" (Book)
9. View your ticket with QR code

### Task 2: Cancel a Ticket
1. Go to "Vé của tôi" (My Tickets)
2. Find unpaid ticket
3. Click "Hủy" (Cancel) button
4. Confirm cancellation

### Task 3: Print a Ticket
1. Click on ticket in "Vé của tôi"
2. Click "In vé" (Print Ticket) button
3. Your browser's print dialog opens
4. Click Print

### Task 4: Add a New Route (Admin Only)
1. Login with admin account
2. Click "Quản lý" (Admin)
3. Click "Quản lý tuyến đường" (Manage Routes)
4. Fill in route details:
   - Route name: "Đà Nẵng → Nha Trang"
   - Start point: "Đà Nẵng"
   - End point: "Nha Trang"
   - Distance: 250 km
   - Time: 5 hours
5. Click "Thêm tuyến" (Add Route)

### Task 5: Create a Schedule (Admin Only)
1. Go to Admin → "Quản lý lịch trình"
2. Select:
   - Route: "Hà Nội → Sài Gòn"
   - Bus: "SG-001"
   - Driver: "Nguyễn Văn A"
   - Date: Tomorrow
   - Departure: 10:00
   - Arrival: 18:00
3. Click "Thêm lịch trình"

### Task 6: View Revenue Report (Admin Only)
1. Go to Admin → "Báo cáo doanh thu"
2. Select date range (defaults to current month)
3. View:
   - Total revenue
   - Tickets sold
   - Transactions
4. Click "Xuất PDF" to download report

---

## 🎯 Key Features Explained

### 🎫 Ticket Booking
- Real-time seat availability
- Visual seat selection map
- Multiple payment methods
- Instant QR code generation
- Confirmation email (mock)

### 💳 Payment System
- Cash on delivery
- Credit/debit card
- E-wallet (VNPay, Momo)
- Each payment creates a transaction record

### 📊 Admin Reports
- Revenue by date range
- Ticket sales statistics
- Transaction history
- Export to PDF format
- Customizable date filters

### 🔐 Security
- Password-protected accounts
- Session management
- Role-based access (admin/staff/passenger)
- Unique QR codes per ticket

---

## ⚙️ Technical Details

### How It Works
1. All data stored in browser's localStorage
2. No internet connection needed (works offline)
3. Data persists until browser cache is cleared
4. Each user has their own account

### What Gets Stored
- ✅ User accounts and passwords
- ✅ Routes and schedules
- ✅ Buses and drivers
- ✅ Booked tickets
- ✅ Payment transactions
- ✅ User sessions

### Browser Compatibility
- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop and mobile browsers
- ✅ Works on tablets too

---

## ❓ FAQ

**Q: Where is my data saved?**
A: In your browser's localStorage. It persists until you clear your browser cache.

**Q: Can I book tickets offline?**
A: Yes! Create an account and schedules need to be pre-loaded, but booking works offline.

**Q: How do I share my ticket?**
A: Open your ticket → Click "Chia sẻ" (Share) → Choose method (copy link or native share).

**Q: Can I change my password?**
A: Yes! Go to "Tài khoản" → "Đổi mật khẩu"

**Q: How do I reset my password if I forgot it?**
A: On login page → Click "Quên mật khẩu" → Enter email → Set new password

**Q: Can multiple people use this system?**
A: Yes! Each person needs their own account. 5+ accounts are pre-created for testing.

**Q: Do I need a backend server?**
A: No! For demo/testing. For production, connect to a real database.

**Q: How many tickets can I book?**
A: Unlimited! Each ticket is stored separately.

**Q: Can I delete my account?**
A: Currently no (design choice). But you can change your password.

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't login | Check email/password. Try demo accounts. |
| Data disappeared | You cleared browser cache. Re-enter data. |
| QR code not showing | Refresh page or check internet connection |
| Can't book ticket | Make sure availability exists, try different date |
| Print looks weird | Adjust page margins in print dialog |
| Admin page blocked | Make sure you're logged in as admin |

---

## 📞 Support Contacts

- **Email**: support@busticket.com
- **Phone**: 1900-6666
- **Hours**: Monday-Friday 8AM-5PM

---

## 🔄 What's Next?

Future enhancements:
- Real GPS tracking for buses
- Email/SMS notifications
- Mobile app version
- Real payment gateway
- Passenger reviews/ratings
- Multi-language support
- Dark mode theme

---

**Welcome to Bus Ticket Pro! 🚌**

*Last Updated: April 2026*
