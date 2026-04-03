// Utility Functions
function checkAuth() {
    if (!auth.isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function checkAdminAuth() {
    if (!auth.isLoggedIn() || !auth.hasRole('admin')) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function logout() {
    auth.logout();
    window.location.href = 'login.html';
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('vi-VN');
}

function formatDateTime(dateTime) {
    return new Date(dateTime).toLocaleString('vi-VN');
}

function generateQRCode(text) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showModal(title, message, onConfirm = null) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <h2>${title}</h2>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn-secondary">Hủy</button>
            ${onConfirm ? '<button onclick="this.parentElement.parentElement.remove(); onConfirm();" class="btn-primary">Xác nhận</button>' : ''}
        </div>
    `;
    document.body.appendChild(modal);
}

function getCurrentUser() {
    return auth.getCurrentUser();
}

function getRouteNameById(routeId) {
    const routes = db.getRoutes();
    const route = routes.find(r => r.id === routeId);
    return route ? route.name : 'N/A';
}

function getBusNameById(busId) {
    const buses = JSON.parse(localStorage.getItem('buses'));
    const bus = buses.find(b => b.id === busId);
    return bus ? `${bus.type} (${bus.licensePlate})` : 'N/A';
}

function getDriverNameById(driverId) {
    const drivers = JSON.parse(localStorage.getItem('drivers'));
    const driver = drivers.find(d => d.id === driverId);
    return driver ? driver.name : 'N/A';
}

function generateTicketPDF(ticket, schedule) {
    const route = db.getRoutes().find(r => r.id === schedule.routeId);
    const bus = JSON.parse(localStorage.getItem('buses')).find(b => b.id === schedule.busId);
    
    let content = `
    ============================================
    VÉ XE BUS - BUS TICKET
    ============================================
    ID Vé: ${ticket.id}
    Mã QR: ${ticket.qrCode}
    
    Hành khách: ${ticket.passengerName}
    Điện thoại: ${ticket.passengerPhone}
    
    Tuyến đường: ${route.name}
    Loại xe: ${bus.type}
    Biển số: ${bus.licensePlate}
    
    Ngày: ${schedule.date}
    Giờ xuất phát: ${schedule.departureTime}
    Giờ dự kiến đến: ${schedule.arrivalTime}
    
    Ghế số: ${ticket.seatNumber}
    Giá vé: ${formatCurrency(ticket.price)}
    Trạng thái: ${ticket.status}
    
    Ngày đặt: ${ticket.bookingDate}
    ============================================
    `;
    
    return content;
}
