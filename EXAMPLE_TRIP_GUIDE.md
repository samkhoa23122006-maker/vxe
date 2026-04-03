# 🚌 Example Trip Data - Test Guide

## ✅ Example Trip Added to Database

**Trip Details:**
- **Route:** Hà Nội → Hà Giang
- **Date:** April 20, 2026 (20/04/2026)
- **Departure Time:** 09:30
- **Arrival Time:** 14:30
- **Duration:** ~5 hours
- **Bus Type:** Limousine (Giường nằm)
- **Ticket Price:** ₫350,000 VND (lower price for example!)
- **Driver:** Trần Văn B
- **Bus Capacity:** 35 seats
- **Available Seats:** 35 (fully available)

---

## 🧪 How to Test This Trip

### Step 1: Login to the System
1. Open your browser
2. Go to `index-home.html`
3. Click **"Đăng Nhập"** (Login)
4. Use demo account:
   - **Email:** `customer1@bus.com`
   - **Password:** `customer123`
5. Click **Login**

### Step 2: Go to Booking Page
1. In dashboard, click **"Đặt vé"** (Book Ticket) button
2. Or navigate to `booking.html`

### Step 3: Search for the Trip

**Fill in the search form:**

| Field | Value |
|-------|-------|
| **Điểm khởi hành** (Departure) | Hà Nội |
| **Điểm đến** (Destination) | Hà Giang |
| **Ngày đi** (Date) | 20/04/2026 (April 20, 2026) |
| **Giá từ - đến** (Price) | Leave empty (or 350000) |
| **Loại xe** (Bus Type) | Limousine |
| **Công ty xe buýt** (Company) | Leave empty |

5. Click **"Tìm kiếm"** (Search) button

### Step 4: View the Results

You will see:
```
Kết quả tìm kiếm - 1 chuyến đi
(Search results - 1 trip)
```

**Trip Card Shows:**
- 🚌 **Hà Nội - Hà Giang** | ⭐ 4.5
- **Loại xe:** Limousine - Phòng nằm (Vehicle: Limousine - Bed room)
- **Departure:** 09:30 | **Duration:** 5h | **Arrival:** 14:30
- **Tài xế:** Trần Văn B (Driver: Tran Van B)
- **Khoảng cách:** 200km (Distance)
- **Ghế trống:** 35/35 (Available seats)
- **Điểm khởi hành:** Hà Nội (Pickup point)
- **Điểm dừa:** Hà Giang (Drop-off point)
- **Price:** **₫350,000** (Lower than standard 450,000!)
- **Button:** "Chọn chuyến" (Select Trip)

### Step 5: Book the Ticket

1. Click **"Chọn chuyến"** (Select Trip) button
2. Page scrolls to booking form section

**In Booking Form:**
1. **Họ và tên** (Name): Pre-filled with your name
2. **Số điện thoại** (Phone): Pre-filled with your phone
3. **Chọn ghế** (Select Seat): 
   - Visual seat map appears with 35 available seats
   - Click any blue seat to select it
   - Example: Click seat **5**
4. The price updates to show: **Ghế số 5 - ₫350,000**
5. **Phương thức thanh toán** (Payment Method):
   - Select one of:
     - "Tiền mặt" (Cash)
     - "Thẻ ngân hàng" (Credit Card)
     - "Ví điện tử" (E-wallet)
6. Click **"Xác nhận đặt vé"** (Confirm Booking)

### Step 6: Confirm Booking Success

✓ **Success message:** "Đặt vé thành công!" (Booking successful!)  
✓ **Redirects to:** Ticket detail page with QR code  
✓ **Shows:** Your ticket with:
- Route: Hà Nội → Hà Giang
- Date: 20/04/2026
- Seat: 5
- Price: ₫350,000
- QR Code for ticket scanning
- Print/Download/Share buttons

---

## 🔍 Advanced Testing

### Test Price Filtering
1. In search form, set **Giá từ - đến:**
   - **Từ (From):** 300000
   - **Đến (To):** 400000
2. Click Search
3. Trip should appear (350,000 is within range)

### Test Price Sorting
1. Perform any search
2. In results, click **"Sắp xếp theo:"** dropdown
3. Select **"Giá (thấp nhất)"** (Price - lowest)
4. Your trip at ₫350,000 should be among the first

### Test Bus Type Filter
1. Select **"Loại xe: Limousine"** in search
2. Your trip (Limousine bed room) should appear

### Test Date Range
1. Try searching with date **2026-04-20** (April 20, 2026)
2. Only trips on this date will show
3. You'll see the Hà Nội → Hà Giang trip at 09:30

---

## 📊 Database Data Structure

The example trip was added to `db.js` with this structure:

```json
{
  "id": 4,
  "routeId": 1,
  "busId": 2,
  "driverId": 2,
  "date": "2026-04-20",
  "departureTime": "09:30",
  "arrivalTime": "14:30",
  "status": "scheduled",
  "price": 350000
}
```

**Mapped to:**
- Route 1: Hà Nội - Hà Giang
- Bus 2: Limousine (35 seats)
- Driver 2: Trần Văn B
- Custom Price: ₫350,000 (instead of default 450,000)

---

## 💡 How Custom Pricing Works

### Backend Enhancement
The system now supports **per-schedule pricing**:

```javascript
// Before: Fixed price for all trips
const pricePerSeat = 450000;

// Now: Each schedule can have custom price
const ticketPrice = schedule.price || defaultPrice;
```

### Features Enabled:
✅ Different prices for different routes  
✅ Seasonal pricing (higher during peak, lower during off-season)  
✅ Promotional pricing  
✅ VIP bus higher pricing  
✅ Early bird discounts  
✅ Group booking discounts  

### Example Business Cases:
- **Premium Routes** (Hà Nội ↔ Sài Gòn): 500,000 VND
- **Mid-range Routes** (Hà Nội ↔ Hà Giang): 350,000 VND
- **Off-peak Trips:** 300,000 VND
- **Holiday Specials:** 400,000 VND

---

## 📱 Mobile Testing

The booking page is responsive. Test on:
- **Desktop:** Full width layout
- **Tablet:** Adjusted layout
- **Mobile:** Optimized for touch

All features work the same:
- Search form adjusts width
- Trip cards stack vertically
- Seat map adapts to screen size
- Buttons are touch-friendly

---

## 🎯 What You Can Verify

After booking the example trip:

| Feature | Verification |
|---------|--------------|
| ✅ Search Works | Found trip with Hà Nội → Hà Giang |
| ✅ Custom Price | Shows ₫350,000 (not 450,000) |
| ✅ Booking Works | Ticket created successfully |
| ✅ Seat Selection | Correct seat number saved |
| ✅ QR Code | Generated with ticket ID |
| ✅ Payment Method | Correctly recorded |
| ✅ Confirmation | Message shows success |
| ✅ Ticket Details | All info displays correctly |

---

## 🐛 Troubleshooting

### Trip doesn't appear in search?
1. ✓ Check date is exactly **2026-04-20**
2. ✓ Departure should be "Hà Nội"
3. ✓ Destination should be "Hà Giang"
4. ✓ Have you logged in? (Required)
5. ✓ Check browser console for errors (F12)

### Price shows ₫450,000 instead of ₫350,000?
1. ✓ Browser cache issue
2. ✓ Clear localStorage: Open DevTools → Application → Clear Storage
3. ✓ Refresh page (Ctrl+F5)
4. ✓ Login again

### Seat selection not working?
1. ✓ Make sure you clicked "Chọn chuyến" first
2. ✓ Scroll down to see seat map
3. ✓ Click on blue seats only (not gray booked ones)

### Payment method not saving?
1. ✓ Make sure to select a payment method before clicking confirm
2. ✓ Check that you've selected a seat

---

## 🔄 Add More Example Trips

Want to add more trips? Follow this pattern in `db.js`:

```javascript
{
  id: 5,
  routeId: 2,              // Route ID
  busId: 1,                // Bus ID
  driverId: 1,             // Driver ID
  date: "2026-04-21",      // YYYY-MM-DD format
  departureTime: "06:00",  // HH:MM format
  arrivalTime: "18:00",
  status: "scheduled",
  price: 400000            // Custom price
}
```

---

## ✨ Summary

**Example Trip Ready to Test:**
- Route: Hà Nội → Hà Giang
- Date: April 20, 2026 09:30 - 14:30
- Price: ₫350,000
- Seats: 35 available
- Status: Ready to book!

**Happy testing!** 🎉

If you encounter any issues, check the browser console (F12 → Console tab) for error messages.
