// Database Layer - Using localStorage
class Database {
    constructor() {
        this.initDatabase();
    }

    initDatabase() {
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                { id: 1, name: 'Admin', email: 'admin@bus.com', phone: '0123456789', password: 'admin123', role: 'admin', status: 'active' },
                { id: 2, name: 'Sales Staff', email: 'staff@bus.com', phone: '0987654321', password: 'staff123', role: 'staff', status: 'active' },
                { id: 3, name: 'Nguyễn Văn C', email: 'customer1@bus.com', phone: '0987654322', password: 'customer123', role: 'customer', status: 'active' }
            ]));
        }
        if (!localStorage.getItem('routes')) {
            localStorage.setItem('routes', JSON.stringify([
                { id: 1, name: 'Hà Nội - Hà Giang', startPoint: 'Hà Nội', endPoint: 'Hà Giang', distance: 200, estimatedTime: 5, status: 'active' },
                { id: 2, name: 'Hà Nội - Sài Gòn', startPoint: 'Hà Nội', endPoint: 'Sài Gòn', distance: 1500, estimatedTime: 24, status: 'active' },
                { id: 3, name: 'Đà Nẵng - Hà Nội', startPoint: 'Đà Nẵng', endPoint: 'Hà Nội', distance: 800, estimatedTime: 12, status: 'active' }
            ]));
        }
        if (!localStorage.getItem('buses')) {
            localStorage.setItem('buses', JSON.stringify([
                { id: 1, licensePlate: '29A-123456', type: 'VIP', capacity: 30, status: 'active', driver: 1 },
                { id: 2, licensePlate: '29A-789012', type: 'Limousine', capacity: 35, status: 'active', driver: 2 },
                { id: 3, licensePlate: '29A-345678', type: 'VIP', capacity: 30, status: 'maintenance', driver: null }
            ]));
        }
        if (!localStorage.getItem('drivers')) {
            localStorage.setItem('drivers', JSON.stringify([
                { id: 1, name: 'Nguyễn Văn A', phone: '0912345678', license: 'DL001', status: 'active' },
                { id: 2, name: 'Trần Văn B', phone: '0912345679', license: 'DL002', status: 'active' }
            ]));
        }
        if (!localStorage.getItem('schedules')) {
            localStorage.setItem('schedules', JSON.stringify([
                { id: 1, routeId: 1, busId: 1, driverId: 1, date: '2026-04-05', departureTime: '08:00', arrivalTime: '13:00', status: 'scheduled', price: 350000 },
                { id: 2, routeId: 1, busId: 2, driverId: 2, date: '2026-04-05', departureTime: '14:00', arrivalTime: '19:00', status: 'scheduled', price: 450000 },
                { id: 3, routeId: 2, busId: 1, driverId: 1, date: '2026-04-06', departureTime: '12:00', arrivalTime: '12:00', status: 'scheduled', price: 450000 },
                { id: 4, routeId: 1, busId: 2, driverId: 2, date: '2026-04-20', departureTime: '09:30', arrivalTime: '14:30', status: 'scheduled', price: 350000 }
            ]));
        }
        if (!localStorage.getItem('tickets')) {
            localStorage.setItem('tickets', JSON.stringify([
                { id: 'TKT-001', scheduleId: 1, userId: 3, passengerName: 'Nguyễn Văn C', email: 'customer1@bus.com', phone: '0987654322', seatNumber: 8, price: 350000, status: 'paid', qrCode: 'TKT-001-QR-HANOI-HAGIANG', bookingDate: '2026-04-03' }
            ]));
        }
        if (!localStorage.getItem('transactions')) {
            localStorage.setItem('transactions', JSON.stringify([
                { id: 'TXN-001', ticketId: 'TKT-001', paymentMethod: 'card', amount: 350000, status: 'completed', timestamp: '2026-04-03 10:30:00' }
            ]));
        }
    }

    // User Methods
    registerUser(name, email, phone, password, role = 'customer') {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users.find(u => u.email === email || u.phone === phone)) {
            return { success: false, message: 'Email hoặc điện thoại đã tồn tại!' };
        }
        const newUser = { id: Date.now(), name, email, phone, password, role, status: 'active' };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: 'Đăng ký thành công!', user: newUser };
    }

    loginUser(email, password) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            return { success: true, user };
        }
        return { success: false, message: 'Email hoặc mật khẩu không đúng!' };
    }

    updatePassword(email, oldPassword, newPassword) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email && u.password === oldPassword);
        if (!user) {
            return { success: false, message: 'Mật khẩu cũ không đúng!' };
        }
        user.password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        return { success: true, message: 'Đổi mật khẩu thành công!' };
    }

    // Route Methods
    getRoutes() {
        return JSON.parse(localStorage.getItem('routes'));
    }

    addRoute(name, startPoint, endPoint, distance, estimatedTime) {
        const routes = JSON.parse(localStorage.getItem('routes'));
        const newRoute = { id: Date.now(), name, startPoint, endPoint, distance, estimatedTime, status: 'active' };
        routes.push(newRoute);
        localStorage.setItem('routes', JSON.stringify(routes));
        return newRoute;
    }

    // Schedule Methods
    getSchedules(routeId = null) {
        const schedules = JSON.parse(localStorage.getItem('schedules'));
        return routeId ? schedules.filter(s => s.routeId === routeId) : schedules;
    }

    addSchedule(routeId, busId, driverId, date, departureTime, arrivalTime) {
        const schedules = JSON.parse(localStorage.getItem('schedules'));
        const newSchedule = { id: Date.now(), routeId, busId, driverId, date, departureTime, arrivalTime, status: 'scheduled' };
        schedules.push(newSchedule);
        localStorage.setItem('schedules', JSON.stringify(schedules));
        return newSchedule;
    }

    // Ticket Methods
    bookTicket(scheduleId, passengerName, passengerEmail, passengerPhone, seatNumber, price) {
        const tickets = JSON.parse(localStorage.getItem('tickets'));
        const qrCode = 'QR-' + Date.now();
        const newTicket = {
            id: Date.now(),
            scheduleId,
            passengerName,
            passengerEmail,
            passengerPhone,
            seatNumber,
            price,
            status: 'unpaid',
            qrCode,
            bookingDate: new Date().toLocaleString('vi-VN')
        };
        tickets.push(newTicket);
        localStorage.setItem('tickets', JSON.stringify(tickets));
        return newTicket;
    }

    getTickets(filterBy = null, filterValue = null) {
        const tickets = JSON.parse(localStorage.getItem('tickets'));
        if (filterBy && filterValue) {
            return tickets.filter(t => t[filterBy] === filterValue);
        }
        return tickets;
    }

    updateTicketStatus(ticketId, status) {
        const tickets = JSON.parse(localStorage.getItem('tickets'));
        const ticket = tickets.find(t => t.id === ticketId);
        if (ticket) {
            ticket.status = status;
            localStorage.setItem('tickets', JSON.stringify(tickets));
            return ticket;
        }
        return null;
    }

    // Transaction Methods
    addTransaction(ticketId, paymentMethod, amount) {
        const transactions = JSON.parse(localStorage.getItem('transactions'));
        const newTransaction = {
            id: Date.now(),
            ticketId,
            paymentMethod,
            amount,
            status: 'completed',
            timestamp: new Date().toLocaleString('vi-VN')
        };
        transactions.push(newTransaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));
        return newTransaction;
    }

    getRevenueStats(startDate = null, endDate = null) {
        const transactions = JSON.parse(localStorage.getItem('transactions'));
        let filtered = transactions;
        if (startDate && endDate) {
            filtered = transactions.filter(t => {
                const tDate = new Date(t.timestamp);
                return tDate >= new Date(startDate) && tDate <= new Date(endDate);
            });
        }
        const totalRevenue = filtered.reduce((sum, t) => sum + t.amount, 0);
        const totalTickets = filtered.length;
        return { totalRevenue, totalTickets, transactions: filtered };
    }
}

const db = new Database();
