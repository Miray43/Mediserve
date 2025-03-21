document.getElementById('newPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (newPassword === confirmPassword) {
        alert('تم تعيين كلمة المرور الجديدة بنجاح!');
        // هنا يمكنك إضافة كود لإرسال كلمة المرور الجديدة إلى الخادم
        errorMessage.style.display = 'none'; // إخفاء رسالة الخطأ
        newPasswordInput.classList.remove('error'); // إزالة الإطار الأحمر
        confirmPasswordInput.classList.remove('error'); // إزالة الإطار الأحمر
    } else {
        errorMessage.style.display = 'block'; // إظهار رسالة الخطأ
        newPasswordInput.classList.add('error'); // إضافة إطار أحمر
        confirmPasswordInput.classList.add('error'); // إضافة إطار أحمر
    }
});