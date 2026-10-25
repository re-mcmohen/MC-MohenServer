(function () {
    "use strict";

    // 使用同一台设备的本地日期，同时更新年份和运行时长。
    var startedAt = new Date(2021, 7, 15);
    var timeElement = document.getElementById("time");
    var yearElements = document.querySelectorAll("[data-current-year]");

    function updateTime() {
        var now = new Date();
        for (var i = 0; i < yearElements.length; i++) {
            yearElements[i].textContent = now.getFullYear();
        }
        if (!timeElement) return;

        var years = Math.max(0, now.getFullYear() - startedAt.getFullYear());
        var anniversary = new Date(startedAt.getFullYear() + years, 7, 15);
        if (now < anniversary && years > 0) {
            years--;
            anniversary = new Date(startedAt.getFullYear() + years, 7, 15);
        }
        var remaining = Math.max(0, Math.floor((now - anniversary) / 1000));
        var days = Math.floor(remaining / 86400);
        var hours = Math.floor(remaining % 86400 / 3600);
        var minutes = Math.floor(remaining % 3600 / 60);
        var seconds = remaining % 60;
        timeElement.textContent = years + "年" + days + "天" + hours + "小时" +
            minutes + "分钟" + seconds + "秒啦";
    }

    updateTime();
    window.setInterval(updateTime, 1000);
}());
