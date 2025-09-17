// ChzzkHub Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize tooltips
    initializeTooltips();
    
    // Initialize form validations
    initializeFormValidations();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize event listeners
    initializeEventListeners();
}

function initializeTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

function initializeFormValidations() {
    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Password toggle functionality
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', togglePasswordVisibility);
    }
}

function initializeAnimations() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Add slide-in animation to sidebar
    const sidebar = document.querySelector('.col-md-3');
    if (sidebar) {
        sidebar.classList.add('slide-in');
    }
}

function initializeEventListeners() {
    // Search functionality
    const searchInputs = document.querySelectorAll('input[placeholder*="검색"]');
    searchInputs.forEach(input => {
        input.addEventListener('input', debounce(handleSearch, 300));
    });
    
    // Status filter functionality
    const statusFilters = document.querySelectorAll('select');
    statusFilters.forEach(select => {
        select.addEventListener('change', handleStatusFilter);
    });
}

// Login functionality
function handleLogin(event) {
    event.preventDefault();
    
    const streamerId = document.getElementById('streamerId').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    if (!streamerId || !password) {
        showAlert('스트리머 ID와 비밀번호를 입력해주세요.', 'warning');
        return;
    }
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span> 로그인 중...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Simulate successful login
        showAlert('로그인에 성공했습니다!', 'success');
        
        // Redirect to main page
        setTimeout(() => {
            window.location.href = '/';
        }, 1500);
    }, 2000);
}

// Password visibility toggle
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.getElementById('togglePassword');
    const icon = toggleBtn.querySelector('i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Crew management functions
function createCrew() {
    const crewName = document.getElementById('crewName').value;
    const crewDescription = document.getElementById('crewDescription').value;
    const crewCategory = document.getElementById('crewCategory').value;
    
    if (!crewName) {
        showAlert('크루 이름을 입력해주세요.', 'warning');
        return;
    }
    
    // Show loading state
    const createBtn = document.querySelector('#createCrewModal .btn-primary');
    const originalText = createBtn.innerHTML;
    createBtn.innerHTML = '<span class="spinner"></span> 생성 중...';
    createBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        createBtn.innerHTML = originalText;
        createBtn.disabled = false;
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('createCrewModal'));
        modal.hide();
        
        // Show success message
        showAlert('크루가 성공적으로 생성되었습니다!', 'success');
        
        // Refresh page or update UI
        setTimeout(() => {
            location.reload();
        }, 1500);
    }, 2000);
}

// Friend management functions
function addFriend() {
    const friendId = document.getElementById('friendId').value;
    const friendMessage = document.getElementById('friendMessage').value;
    
    if (!friendId) {
        showAlert('스트리머 ID를 입력해주세요.', 'warning');
        return;
    }
    
    // Show loading state
    const addBtn = document.querySelector('#addFriendModal .btn-primary');
    const originalText = addBtn.innerHTML;
    addBtn.innerHTML = '<span class="spinner"></span> 요청 중...';
    addBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        addBtn.innerHTML = originalText;
        addBtn.disabled = false;
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('addFriendModal'));
        modal.hide();
        
        // Show success message
        showAlert('친구 요청이 전송되었습니다!', 'success');
        
        // Clear form
        document.getElementById('addFriendForm').reset();
    }, 2000);
}

function sendMessage(friendName) {
    document.getElementById('messageTo').value = friendName;
    const modal = new bootstrap.Modal(document.getElementById('messageModal'));
    modal.show();
}

function sendMessageToFriend() {
    const messageTo = document.getElementById('messageTo').value;
    const messageContent = document.getElementById('messageContent').value;
    
    if (!messageContent) {
        showAlert('메시지 내용을 입력해주세요.', 'warning');
        return;
    }
    
    // Show loading state
    const sendBtn = document.querySelector('#messageModal .btn-primary');
    const originalText = sendBtn.innerHTML;
    sendBtn.innerHTML = '<span class="spinner"></span> 전송 중...';
    sendBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        sendBtn.innerHTML = originalText;
        sendBtn.disabled = false;
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('messageModal'));
        modal.hide();
        
        // Show success message
        showAlert('메시지가 전송되었습니다!', 'success');
        
        // Clear form
        document.getElementById('messageContent').value = '';
    }, 1500);
}

// Collaboration management functions
function createCollaboration() {
    const collabTitle = document.getElementById('collabTitle').value;
    const collabCategory = document.getElementById('collabCategory').value;
    const collabType = document.getElementById('collabType').value;
    const collabDate = document.getElementById('collabDate').value;
    const collabTime = document.getElementById('collabTime').value;
    const collabMaxMembers = document.getElementById('collabMaxMembers').value;
    const collabDescription = document.getElementById('collabDescription').value;
    
    if (!collabTitle || !collabDate || !collabTime) {
        showAlert('필수 정보를 모두 입력해주세요.', 'warning');
        return;
    }
    
    // Show loading state
    const createBtn = document.querySelector('#createCollabModal .btn-primary');
    const originalText = createBtn.innerHTML;
    createBtn.innerHTML = '<span class="spinner"></span> 생성 중...';
    createBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        createBtn.innerHTML = originalText;
        createBtn.disabled = false;
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('createCollabModal'));
        modal.hide();
        
        // Show success message
        showAlert('합방이 성공적으로 생성되었습니다!', 'success');
        
        // Refresh page or update UI
        setTimeout(() => {
            location.reload();
        }, 1500);
    }, 2000);
}

// Utility functions
function showAlert(message, type = 'info') {
    const alertContainer = document.createElement('div');
    alertContainer.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertContainer.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertContainer.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alertContainer);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertContainer.parentNode) {
            alertContainer.remove();
        }
    }, 5000);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const searchableItems = document.querySelectorAll('.card');
    
    searchableItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function handleStatusFilter(event) {
    const selectedStatus = event.target.value;
    const filterableItems = document.querySelectorAll('.card');
    
    filterableItems.forEach(item => {
        if (selectedStatus === 'all') {
            item.style.display = 'block';
        } else {
            const statusBadge = item.querySelector('.badge');
            if (statusBadge && statusBadge.textContent.toLowerCase().includes(selectedStatus)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Confirmation dialogs
function confirmAction(message, callback) {
    if (confirm(message)) {
        callback();
    }
}

// Format date and time
function formatDateTime(dateString, timeString) {
    const date = new Date(`${dateString}T${timeString}`);
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showAlert('클립보드에 복사되었습니다!', 'success');
    }).catch(() => {
        showAlert('복사에 실패했습니다.', 'danger');
    });
}

// Export functions for global access
window.ChzzkHub = {
    createCrew,
    addFriend,
    sendMessage,
    sendMessageToFriend,
    createCollaboration,
    showAlert,
    confirmAction,
    copyToClipboard
};
