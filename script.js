// وظيفة لجلب الرصيد الحالي
function getBalance() {
    return parseInt(localStorage.getItem('user_coins')) || 0;
}

// تحديث عرض الرصيد في الصفحة
function updateDisplay() {
    const display = document.getElementById('balance-display');
    if (display) display.innerText = getBalance();
}

// وظيفة شراء الفصل
function accessChapter(chapterUrl, cost) {
    let currentBalance = getBalance();
    
    if (currentBalance >= cost) {
        // إذا دفع مسبقاً لا نخصم مرة أخرى (اختياري)
        if (!localStorage.getItem(chapterUrl)) {
            localStorage.setItem('user_coins', currentBalance - cost);
            localStorage.setItem(chapterUrl, 'unlocked');
        }
        window.location.href = chapterUrl;
    } else {
        alert("عذراً! رصيدك غير كافٍ. تحتاج إلى " + cost + " كوينز.");
        window.location.href = 'buy_coins.html';
    }
}

// شحن وهمي للتجربة (سنربطه لاحقاً بباي بال)
function addDemoCoins(amount) {
    localStorage.setItem('user_coins', getBalance() + amount);
    updateDisplay();
    alert("تم إضافة " + amount + " كوينز لحسابك!");
}

window.onload = updateDisplay;
