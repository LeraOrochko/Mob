document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.lessons__tab');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('lessons__tab--active');
            });
            tab.classList.add('lessons__tab--active');
        });
    });

    const progressFills = document.querySelectorAll('.lesson-item__progress-fill');

    progressFills.forEach(function (fill) {
        const targetWidth = fill.style.width;
        fill.style.width = '0%';
        setTimeout(function () {
            fill.style.width = targetWidth;
        }, 200);
    });
});