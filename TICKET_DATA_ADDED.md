# 🎫 Pre-Booked Ticket Data - Verification Guide

## ✅ Ticket Successfully Added to Database

**Ticket Details:**
- **Ticket ID:** TKT-001
- **Route:** Hà Nội → Hà Giang
- **Date:** April 5, 2026 (05/04/2026)
- **Departure Time:** 08:00 AM
- **Arrival Time:** 1:00 PM (5 hours)
- **Passenger Name:** Nguyễn Văn C
- **Seat Number:** 8
- **Ticket Price:** ₫350,000 VND
- **Status:** Paid ✓
- **Payment Method:** Credit Card
- **Booking Date:** April 3, 2026
- **QR Code:** TKT-001-QR-HANOI-HAGIANG

---

## 🔑 Account Credentials for This Ticket

**Customer Account:**
- **Name:** Nguyễn Văn C
- **Email:** `customer1@bus.com`
- **Password:** `customer123`
- **Phone:** 0987654322
- **Role:** Customer

---

## 👀 How to View the Ticket

### Method 1: View in "Vé của tôi" (My Tickets)

1. **Login** with:
   - Email: `customer1@bus.com`
   - Password: `customer123`

2. Click on **"Vé của tôi"** in the navbar

3. You will see:
   - ✓ **Ticket TKT-001** in the list
   - Route: **Hà Nội → Hà Giang**
   - Date: **05/04/2026**
   - Time: **08:00 - 13:00**
   - Seat: **8**
   - Price: **₫350,000**
   - Status: **✓ Đã thanh toán** (Paid)
   - QR Code visible
   - Action buttons: Print, Download, Share

### Method 2: View Ticket Details

1. From "Vé của tôi" page
2. Click on the ticket card for **TKT-001**
3. You'll see detailed information:
   - **Route Details:**
     - Khởi hành: Hà Nội
     - Đến: Hà Giang
     - Khoảng cách: 200km
     - Thời gian dự tính: 5 giờ
   
   - **Schedule Details:**
     - Ngày: 05/04/2026
     - Giờ xuất phát: 08:00
     - Giờ dự kiến đến: 13:00
     - Loại xe: VIP
     - Tài xế: Nguyễn Văn A
   
   - **Passenger Information:**
     - Tên: Nguyễn Văn C
     - Email: customer1@bus.com
     - Điện thoại: 0987654322
     - Ghế: 8
   
   - **Payment:**
     - Giá vé: ₫350,000
     - Tình trạng: ✓ Đã thanh toán
     - Phương thức: Thẻ tín dụng
   
   - **QR Code:** Displayed for ticket scanning
   - **Buttons:**
     - 🖨️ In vé (Print)
     - ⬇️ Tải xuống (Download)
     - 📤 Chia sẻ (Share)
     - 🗺️ Theo dõi (Track Journey)

### Method 3: Check in Browser Console

To verify raw ticket data:

1. Open browser DevTools (F12)
2. Go to **Application** tab
3. Click **Local Storage**
4. Find key: `tickets`
5. View the JSON data:

```json
[
  {
    "id": "TKT-001",
    "scheduleId": 1,
    "userId": 3,
    "passengerName": "Nguyễn Văn C",
    "email": "customer1@bus.com",
    "phone": "0987654322",
    "seatNumber": 8,
    "price": 350000,
    "status": "paid",
    "qrCode": "TKT-001-QR-HANOI-HAGIANG",
    "bookingDate": "2026-04-03"
  }
]
```

---

## 💳 Payment Information Stored

**Transaction Details:**
- **Transaction ID:** TXN-001
- **Ticket ID:** TKT-001
- **Amount:** ₫350,000
- **Payment Method:** Credit Card (Thẻ tín dụng)
- **Status:** Completed ✓
- **Timestamp:** April 3, 2026 10:30 AM

**Verification in Console:**
1. Open DevTools (F12)
2. Go to **Local Storage**
3. Find key: `transactions`
4. View the JSON:

```json
[
  {
    "id": "TXN-001",
    "ticketId": "TKT-001",
    "paymentMethod": "card",
    "amount": 350000,
    "status": "completed",
    "timestamp": "2026-04-03 10:30:00"
  }
]
```

---

## 🔍 Schedule Information

The April 5, 2026 morning trip details:

| Field | Value |
|-------|-------|
| **Schedule ID** | 1 |
| **Route** | Hà Nội - Hà Giang |
| **Bus** | 29A-123456 (VIP, 30 seats) |
| **Driver** | Nguyễn Văn A |
| **Date** | April 5, 2026 |
| **Departure** | 08:00 AM |
| **Arrival** | 1:00 PM |
| **Distance** | 200 km |
| **Duration** | 5 hours |
| **Price** | ₫350,000 |
| **Status** | Scheduled |

---

## 🧪 Test Scenarios

### Scenario 1: Check Ticket Status
1. Login as customer1
2. Go to "Vé của tôi"
3. Filter by status: "Đã thanh toán" (Paid)
4. ✓ Ticket TKT-001 appears

### Scenario 2: View Ticket Details
1. From "Vé của tôi"
2. Click ticket TKT-001
3. ✓ All details display correctly
4. ✓ QR code visible
5. ✓ Price shows ₫350,000

### Scenario 3: Print Ticket
1. On ticket detail page
2. Click "In vé" (Print) button
3. Browser print dialog opens
4. ✓ Prints with all ticket info

### Scenario 4: Download Ticket
1. On ticket detail page
2. Click "Tải xuống" (Download) button
3. ✓ File downloads as text file
4. Open file and verify contents

### Scenario 5: Check Payment History
1. Login as customer1
2. View ticket details
3. Payment section shows:
   - ✓ Giá vé: ₫350,000
   - ✓ Tình trạng: Đã thanh toán
   - ✓ Ngày: 03/04/2026

---

## 📊 Database Verification Checklist

- [x] Customer account created (Nguyễn Văn C)
- [x] Customer credentials set (customer1@bus.com / customer123)
- [x] April 5 schedule updated to ₫350,000
- [x] Ticket TKT-001 created with correct data
- [x] Payment transaction TXN-001 recorded
- [x] Status set to "paid"
- [x] All passenger info correct
- [x] Seat number assigned (8)
- [x] QR code generated
- [x] Booking date recorded (2026-04-03)

---

## 🎯 Quick Action: View Your Ticket

Follow these 3 steps:

**Step 1:** Login
```
URL: index-home.html → Click "Đăng Nhập"
Email: customer1@bus.com
Password: customer123
```

**Step 2:** Go to Tickets
```
Click: "Vé của tôi" in navbar
```

**Step 3:** View Details
```
Click: TKT-001 ticket card
See: Full ticket details with QR code
```

---

## 🐛 Troubleshooting

### Ticket doesn't appear?
1. ✓ Make sure you logged in as `customer1@bus.com`
2. ✓ Try clearing browser cache (Ctrl+Shift+Delete)
3. ✓ Close and reopen the page
4. ✓ Check DevTools → Application → Local Storage

### Price shows wrong amount?
1. ✓ Check database initialization in db.js
2. ✓ Verify schedule price is 350000 (not 450000)
3. ✓ Verify ticket price is 350000
4. ✓ Clear localStorage and refresh

### Ticket not in "Vé của tôi"?
1. ✓ Ticket belongs to customer1 (userId: 3)
2. ✓ Check current user ID matches 3
3. ✓ Verify filter settings (all statuses enabled)
4. ✓ Check console for JavaScript errors (F12)

---

## 📱 Mobile View

The ticket displays correctly on:
- ✅ Desktop (full width)
- ✅ Tablet (optimized layout)
- ✅ Mobile (responsive design)

All buttons are touch-friendly on mobile devices.

---

## ✨ Summary

**Ticket Ready to Verify:**
- Route: Hà Nội → Hà Giang
- Date: April 5, 2026 at 08:00
- Seat: 8
- Price: ₫350,000
- Status: ✓ Paid
- Account: customer1@bus.com / customer123

**Happy testing!** 🎉 You can now see how a booked ticket appears in the system.
