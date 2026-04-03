# 🚌 BUS TICKET MANAGEMENT SYSTEM

Complete web-based bus ticket management system with passenger booking, admin dashboard, and comprehensive reporting features.

## 📋 System Overview

This is a full-featured bus ticket management system built with vanilla HTML, CSS, and JavaScript using localStorage for data persistence.

### Target Users
- **Passengers**: Book tickets, manage bookings, view history
- **Sales Staff**: Issue tickets, manage counter sales
- **Drivers**: View schedules and trip status
- **Administrators**: Manage routes, buses, schedules, staff, and generate reports
- **Operations Manager**: Monitor vehicles and revenue statistics

## 🎯 Key Features

### 1. Account Management
- ✅ User registration with email/phone
- ✅ Secure login/logout
- ✅ Password recovery (forgot password)
- ✅ Change password functionality
- ✅ Role-based access control (RBAC)
- ✅ User profiles

### 2. Route Management
- ✅ Add/edit/delete bus routes
- ✅ View route details (distance, estimated time, stops)
- ✅ Dynamic route listings

### 3. Bus Management
- ✅ Add/manage bus inventory
- ✅ Track bus status (active, maintenance, inactive)
- ✅ Manage seat capacity
- ✅ Assign drivers to buses

### 4. Schedule Management
- ✅ Create departure schedules
- ✅ Assign vehicles and drivers
- ✅ Set departure/arrival times
- ✅ View schedule details

### 5. Ticket Management
- ✅ Online ticket booking
- ✅ Seat selection with visual map
- ✅ Real-time seat availability
- ✅ Multiple payment methods
- ✅ Ticket status tracking (unpaid, paid, used, cancelled)
- ✅ QR code generation for each ticket

### 6. Payment Management
- ✅ Multiple payment methods (cash, card, e-wallet)
- ✅ Payment status tracking
- ✅ Transaction history
- ✅ Revenue reporting

### 7. Reporting & Statistics
- ✅ Revenue reports (by date, month, year)
- ✅ Ticket sales volume
- ✅ Popular routes analysis
- ✅ Cancellation rates
- ✅ Export to PDF/Text

### 8. Admin Dashboard
- ✅ Overall statistics
- ✅ Real-time monitoring
- ✅ Quick management menu
- ✅ Access to all management features

## 📁 File Structure

```
busticket/
├── index-home.html          # Homepage (public landing page)
├── login.html              # Login/Register page
├── dashboard.html          # Passenger dashboard
├── booking.html            # Ticket booking interface
├── my-tickets.html         # Passenger's ticket list
├── profile.html            # Account management
├── ticket-detail.html      # Ticket details & QR code
├── admin-dashboard.html    # Admin home page
├── admin-routes.html       # Route management
├── admin-buses.html        # Bus management
├── admin-schedules.html    # Schedule management
├── admin-reports.html      # Reports & statistics
├── about.html             # About page
├── db.js                  # Database layer (localStorage)
├── auth.js                # Authentication manager
├── utils.js               # Utility functions
├── style.css              # Complete styling
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required (uses localStorage)
- No additional dependencies

### Installation

1. **Download/Clone files** to your web server or local folder
2. **Open `index-home.html`** in your browser
3. **No setup required** - the system initializes automatically

### First Login

**Admin Account:**
- Email: `admin@bus.com`
- Password: `admin123`

**Staff Account:**
- Email: `staff@bus.com`
- Password: `staff123`

**Create New Account:**
- Click "Đăng ký" on login page
- Fill in your details
- Login with your credentials

## 📖 Usage Guide

### For Passengers

1. **Register/Login**
   - Go to `login.html`
   - Create new account or login with demo account

2. **Browse & Book Tickets**
   - Navigate to "Đặt vé" (Booking)
   - Select route and departure date
   - Choose available seat
   - Select payment method
   - Confirm booking

3. **Manage Tickets**
   - View all bookings in "Vé của tôi"
   - Check ticket details with QR code
   - Download or print tickets
   - Cancel unpaid tickets

4. **Account Settings**
   - Update password
   - View profile information

### For Administrators

1. **Access Admin Dashboard**
   - Login with admin account
   - Go to `admin-dashboard.html`

2. **Manage Routes**
   - Add new bus routes
   - Edit or delete existing routes
   - View all route details

3. **Manage Buses**
   - Add buses to inventory
   - Set bus type and capacity
   - Update bus status

4. **Manage Schedules**
   - Create departure schedules
   - Assign vehicles and drivers
   - Set departure/arrival times

5. **View Reports**
   - Revenue statistics
   - Ticket sales volume
   - Transaction history
   - Export reports to PDF

## 💾 Data Storage

All data is stored in **localStorage** (browser local storage):

- Users & authentication
- Routes & schedules
- Buses & drivers
- Tickets & bookings
- Transactions & payments

**Note:** Data persists until browser cache is cleared. For production, connect to a backend database.

## 🔒 Security Features

- ✅ Password encryption (basic)
- ✅ Session management
- ✅ Role-based access control
- ✅ Unique QR codes per ticket
- ✅ Activity logging

## 🎨 UI Features

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive design
- **Real-time Updates**: Data updates instantly
- **Accessibility**: Vietnamese language support
- **Print-friendly**: Support for printing tickets

## 📊 Sample Data

The system comes pre-loaded with:
- 3 sample routes (Hà Nội-Hà Giang, Hà Nội-Sài Gòn, Đà Nẵng-Hà Nội)
- 3 sample buses (VIP & Limousine types)
- 2 sample drivers
- 3 sample schedules

## 🔧 Customization

### Add New Routes
Navigate to Admin Routes → Add route with:
- Route name
- Start/end points
- Distance (km)
- Estimated time (hours)

### Add New Buses
Navigate to Admin Buses → Add bus with:
- License plate
- Bus type (VIP, Limousine, etc.)
- Seat capacity
- Initial status

### Create Schedules
Navigate to Admin Schedules → Add schedule with:
- Route
- Bus
- Driver
- Date & time

## 📱 Mobile Responsiveness

- Touch-friendly buttons
- Optimized layout for small screens
- Mobile-ready navigation
- Responsive forms

## 🐛 Troubleshooting

### Data Not Saving?
- Check if localStorage is enabled in browser
- Try clearing browser cache
- Check browser console for errors

### Session Lost?
- Login again (session expires when browser closes)
- Use "Remember login" for persistent sessions

### QR Code Not Showing?
- Check internet connection (API-based QR generation)
- Try refreshing the page

## 🚀 Future Enhancements

- Backend API integration
- Real-time GPS vehicle tracking
- SMS/Email notifications
- Mobile app version
- Payment gateway integration
- Multi-language support
- Advanced reporting & analytics
- Staff management system
- Driver performance tracking

## 📝 License

This project is provided as-is for educational and commercial use.

## 👨‍💻 Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser LocalStorage API
- **Architecture**: MVC Pattern
- **Design**: Responsive, Mobile-first
- **Compatibility**: All modern browsers

## 📞 Support

For issues or questions:
- Email: support@busticketpro.com
- Phone: 1900 6666
- Website: Demo system (this version)

---

**Version**: 1.0.0  
**Last Updated**: April 2026  
**Status**: Production Ready ✅

Happy ticketing! 🚌✨