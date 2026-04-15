function updateKoreanDateFlag() {
  const now = new Date();

  const seoulParts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(now);

  const getPart = (type) =>
    seoulParts.find((part) => part.type === type)?.value ?? "";

  const weekdayRaw = getPart("weekday").toUpperCase();
  const day = getPart("day");
  const year = getPart("year");

  const weekdayMap = {
    SUN: "SUN",
    MON: "MON",
    TUE: "TUE",
    WED: "WED",
    THU: "THU",
    FRI: "FRI",
    SAT: "SAT"
  };

  const weekday = weekdayMap[weekdayRaw] || weekdayRaw;

  document.getElementById("dateDay").textContent = weekday;
  document.getElementById("dateDate").textContent = day;
  document.getElementById("dateYear").textContent = year;
}

updateKoreanDateFlag();
setInterval(updateKoreanDateFlag, 60 * 1000);