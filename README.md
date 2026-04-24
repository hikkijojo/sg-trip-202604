# 202604 新加坡 · 迪士尼郵輪行程頁

公開 repo，內容不含同行者暱稱與敏感個資。

## 專案結構

- **`content/trip.md`**：行程備忘與規劃草稿（**不**自動轉成網頁；網頁為獨立撰寫）。此檔已列入 **`.gitignore`，不會被推上 GitHub**，僅保留在本機。
- **靜態網頁（手機優先、多頁）**
  - `index.html`：首屏 **班機／專車／飯店** 三卡＋其餘入口。
  - `singapore.html`：**新加坡自由行** 詳頁（Google 地圖、維基圖片與延伸閱讀）。
  - `map.html`：**地圖一覽**（嵌入 Google「我的地圖」`embed?mid=…`；站內 `singapore-pois.kml` 僅備份下載）。若更換地圖，請改 `map.html` 內之 `mid` 與連結。
  - **`.nojekyll`**：讓 GitHub Pages 以純靜態方式提供檔案（避免 Jekyll 處理）。
  - `order.html`、`timeline.html`、`cruise.html`、`checklist.html`、`links.html`：摘要頁。
- **`assets/app.css`**：共用樣式。
- **`manifest.json`**、`sw.js`：輕量 PWA（可加入主畫面；曾造訪過的頁面可離線快取）。
- **`assets/register-sw.js`**：註冊 Service Worker。

## 本機預覽

在專案根目錄啟動任一靜態伺服器即可，例如：

```bash
python3 -m http.server 8080
```

瀏覽 `http://127.0.0.1:8080/`。

## GitHub Pages

1. 將 repo 推上 GitHub。
2. Repo **Settings → Pages**：**Source** 選 **Deploy from a branch**，Branch 選 **`main`**（或你使用的分支）且資料夾選 **`/ (root)`**。
3. 儲存後約數分鐘可透過 `https://<使用者>.github.io/<repo>/` 存取（路徑依帳號與 repo 名稱而定）。

若網址含中文 repo 名，瀏覽器會自動編碼路徑；建議可選用 **英文 repo 名** 較好口頭分享。

## 圖片與版權

`singapore.html` 所嵌照片來自 **維基共享資源**，各圖授權請以頁內「檔案頁」連結為準。
