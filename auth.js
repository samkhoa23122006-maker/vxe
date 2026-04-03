// Authentication Management
class AuthManager {
    constructor() {
        this.currentUser = JSON.parse(sessionStorage.getItem('currentUser')) || null;
    }

    login(email, password) {
        const result = db.loginUser(email, password);
        if (result.success) {
            this.currentUser = result.user;
            sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
            localStorage.setItem('lastLogin', new Date().toISOString());
            return { success: true, user: result.user };
        }
        return result;
    }

    register(name, email, phone, password, confirmPassword) {
        if (password !== confirmPassword) {
            return { success: false, message: 'Mật khẩu xác nhận không khớp!' };
        }
        if (password.length < 6) {
            return { success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự!' };
        }
        return db.registerUser(name, email, phone, password, 'customer');
    }

    logout() {
        this.currentUser = null;
        sessionStorage.removeItem('currentUser');
    }

    isLoggedIn() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    hasRole(role) {
        return this.currentUser && this.currentUser.role === role;
    }

    changePassword(oldPassword, newPassword, confirmPassword) {
        if (!this.currentUser) {
            return { success: false, message: 'Vui lòng đăng nhập!' };
        }
        if (newPassword !== confirmPassword) {
            return { success: false, message: 'Mật khẩu xác nhận không khớp!' };
        }
        if (newPassword.length < 6) {
            return { success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự!' };
        }
        return db.updatePassword(this.currentUser.email, oldPassword, newPassword);
    }

    forgotPassword(email) {
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email);
        if (!user) {
            return { success: false, message: 'Email không tồn tại!' };
        }
        // Generate reset token
        const resetToken = 'RESET-' + Date.now();
        localStorage.setItem('resetToken_' + email, resetToken);
        localStorage.setItem('resetTokenTime_' + email, Date.now().toString());
        return { success: true, message: 'Liên kết reset mật khẩu đã được gửi!', token: resetToken };
    }

    resetPassword(email, token, newPassword, confirmPassword) {
        if (newPassword !== confirmPassword) {
            return { success: false, message: 'Mật khẩu xác nhận không khớp!' };
        }
        if (newPassword.length < 6) {
            return { success: false, message: 'Mật khẩu phải có ít nhất 6 ký tự!' };
        }
        const storedToken = localStorage.getItem('resetToken_' + email);
        if (storedToken !== token) {
            return { success: false, message: 'Token không hợp lệ!' };
        }
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find(u => u.email === email);
        if (user) {
            user.password = newPassword;
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.removeItem('resetToken_' + email);
            localStorage.removeItem('resetTokenTime_' + email);
            return { success: true, message: 'Cập nhật mật khẩu thành công!' };
        }
        return { success: false, message: 'Có lỗi xảy ra!' };
    }
}

const auth = new AuthManager();
