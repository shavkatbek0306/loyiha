// Mahsulot sotib olish tugmasi uchun oddiy funksiya
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Mahsulot savatchaga qo'shildi!");
    });
});

// Aloqa formasini yuborish
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
    this.reset();
});