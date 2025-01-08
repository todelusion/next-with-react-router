# Next.js + React Router 混合路由範例

這個專案展示了如何在 Next.js 專案中同時使用 Next.js 的 Pages Router 和 React Router，實現更靈活的路由管理方案。

## 🌟 特色

- Next.js Pages Router 用於傳統的頁面路由
- React Router 用於 SPA（單頁應用）體驗
- 兩種路由系統的無縫整合
- 完整的 TypeScript 支援
- Tailwind CSS 樣式設計

## 🔍 專案結構

```
src/
├── components/         # React 組件
├── layouts/           # 布局組件
├── pages/             # Next.js 頁面
│   ├── _app.tsx      # Next.js 應用入口
│   ├── _document.tsx # Next.js 文檔設置
│   ├── doc.tsx       # 文檔頁面
│   ├── index.tsx     # 首頁
│   └── spa.tsx       # SPA 入口
├── routes/            # React Router 路由組件
│   ├── About.tsx
│   ├── AppRoutes.tsx # 路由配置
│   ├── Contact.tsx
│   └── Home.tsx
└── styles/           # 樣式文件
    └── globals.css   # 全域樣式
```

## 🚀 快速開始

1. 複製專案
```bash
git clone https://github.com/todelusion/next-with-react-router.git
cd next-with-react-router
```

2. 安裝依賴
```bash
npm install
# 或
yarn install
```

3. 啟動開發伺服器
```bash
npm run dev
# 或
yarn dev
```

## 📖 路由系統說明

### Next.js Pages Router
- 位於 `src/pages` 目錄
- 提供傳統的多頁面應用體驗
- 支援伺服器端渲染與靜態生成 (SSR/SSG)
- 使用 `<Link>` 元件支援客戶端導航
- 適合需要 SEO 的頁面（如首頁、產品頁）

### React Router (SPA)
- 位於 `src/routes` 目錄
- 提供流暢的單頁應用體驗
- 完全客戶端路由，切換頁面不會重新載入
- 適合複雜的前端互動（如後台管理介面）
- 範例路由：
  - `/spa` - SPA 首頁
  - `/spa/about` - 關於頁面
  - `/spa/contact` - 聯絡頁面

## 🔧 路由整合與設定

### Next.js 設定
```javascript
// next.config.js
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/spa/:path*",
        destination: "/spa",
      },
    ];
  },
};
```

此設定確保所有 `/spa/*` 路徑都重定向到 `/spa` 頁面，使 React Router 能正確處理路由。

### 建構結果
建構後會生成以下關鍵檔案：
```
.
├── 404.html      # 找不到頁面的錯誤頁
├── 500.html      # 伺服器錯誤頁面
├── _app.js       # Next.js 應用程式進入點
├── _document.js  # HTML 文件結構定義
├── doc.html      # doc頁面的靜態輸出
├── index.html    # 首頁的靜態輸出
└── spa.html      # SPA 頁面的靜態輸出
```

## ⚠️ 注意事項

### 路由衝突處理
當混合使用 Next.js 和 React Router 時，可能會遇到以下情況：
- SPA 連結到 Next.js 頁面時，瀏覽器上一頁按鈕可能失效
- 解決方案：在 SPA 中連結到 Next.js 頁面時，使用原生 `<a href="/">` 替代 `<Link>`，確保完整頁面重載

### 使用建議
1. **Next.js Pages Router 適用於：**
   - 需要 SEO 的公開頁面
   - 需要伺服器端渲染的內容
   - 初始載入速度重要的頁面

2. **React Router 適用於：**
   - 後台管理介面
   - 需要流暢使用者體驗的功能區
   - 複雜的前端互動功能

## 💡 使用技巧

1. **路由整合**
   - Next.js 的頁面路由用於主要的應用架構
   - React Router 用於需要 SPA 體驗的特定區域

2. **狀態管理**
   - 使用 React Router 的 `useLocation` 和 `useNavigate` 進行 SPA 路由控制
   - 使用 Next.js 的 `useRouter` 處理頁面級導航

## 🛠️ 技術棧

- Next.js
- React Router
- TypeScript
- Tailwind CSS

## 📝 注意事項
1. **SPA 路由需要在客戶端渲染後才能正常運作，且必須避免在 SSR 階段使用到 React Router**  
   - **原因**：Single-Page Application (SPA) 主要依靠客端（瀏覽器）執行 JavaScript 來切換頁面或組件。
2. **所有 React Router 包含相關鉤子都應該被包裹在 BrowserRouter / HashRouter / MemoryRouter 中才能正常使用**  
   - **原因**：React Router 的 `<Link>`, `useNavigate`, `useParams` 等功能，都依賴在「Router 容器」內部的 `context`；如果不在其內部使用，這些功能就無法取得路由資訊或更新路徑。  

## 參考資料
[building-a-spa-with-nextjs](https://colinhacks.com/essays/building-a-spa-with-nextjs)
