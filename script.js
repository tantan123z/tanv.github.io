// Function toggleMenu để xử lý sự kiện khi nhấn vào biểu tượng 3 gạch
function toggleMenu() {
    var navMenu = document.getElementById('navbarSupportedContent');
    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
    }
}

// Function hienThiPhanTu để hiển thị nội dung của các phần tương ứng
function hienThiPhanTu(id) {
    // Lấy danh sách tất cả các phần tử có class 'content'
    var contents = document.getElementsByClassName('content');
    
    // Duyệt qua từng phần tử để ẩn nội dung
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    
    // Hiển thị phần tử có id tương ứng
    var elementToShow = document.getElementById(id);
    if (elementToShow) {
        elementToShow.style.display = 'block';
    }
}
// Lắng nghe sự kiện click vào nút "MUA" của từng sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    var buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productName = this.getAttribute('data-product-name');
            var productPrice = this.getAttribute('data-product-price');
            alert('Bạn đã chọn mua sản phẩm:\nTên: ' + productName + '\nGiá: ' + productPrice + ' đ');
        });
    });
});
document.querySelector('.copy').addEventListener('click', function() {
    // Lấy nội dung từ thẻ có id="bank"
    var bankNumber = document.getElementById('bank').innerText;

    // Sao chép vào clipboard
    navigator.clipboard.writeText(bankNumber).then(function() {
        // Thông báo copy thành công
        alert('Sao chép nội dung thành công: ' + bankNumber);
    }, function(err) {
        // Xử lý lỗi nếu cần
        console.error('Không thể sao chép: ', err);
    });
});