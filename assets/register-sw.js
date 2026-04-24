/* 相對路徑以「目前頁面」為準：各頁與 sw.js 同層時使用 ./sw.js */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  });
}
