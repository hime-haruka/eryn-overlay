function updateKoreanTimeBadge() {
    const now = new Date();

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Seoul",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    }).formatToParts(now);

    const get = (type) => parts.find((part) => part.type === type)?.value ?? "";

    const weekday = get("weekday").toUpperCase();
    const hour = get("hour");
    const minute = get("minute");

    document.getElementById("dateDay").textContent = weekday;
    document.getElementById("timeHour").textContent = hour;
    document.getElementById("timeMinute").textContent = minute;
}

updateKoreanTimeBadge();
setInterval(updateKoreanTimeBadge, 1000);