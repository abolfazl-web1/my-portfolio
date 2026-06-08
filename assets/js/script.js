// ۱. انتخاب المان‌های همبرگر و منو از داخل HTML
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// ۲. اضافه کردن یک "شنونده" برای رویداد کلیک
hamburger.addEventListener('click', () => {
    // ۳. با هر کلیک، کلاس active رو اضافه یا حذف کن (تغییر وضعیت)
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}   );

// ۴. بستن منو وقتی کاربر روی یکی از لینک‌های منو کلیک کرد
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


// =========================================
// تغییر تم و ذخیره در حافظه (Dark Mode + LocalStorage)
// =========================================

const themeBtn = document.getElementById("theme-btn");

// ۱. وقتی صفحه لود می‌شه، چک کن ببین کاربر قبلاً چه تمی رو انتخاب کرده بوده؟
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  themeBtn.classList.replace("fa-moon", "fa-sun");
}

// ۲. وقتی روی دکمه کلیک می‌شه...
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // اگر تم تاریک فعال شد:
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.classList.replace("fa-moon", "fa-sun");
    // انتخاب کاربر رو تو حافظه با کلید "theme" و مقدار "dark" ذخیره کن
    localStorage.setItem("theme", "dark"); 
  } else {
    // اگر تم روشن شد:
    themeBtn.classList.replace("fa-sun", "fa-moon");
    // انتخاب رو به "light" تغییر بده
    localStorage.setItem("theme", "light"); 
  }
});