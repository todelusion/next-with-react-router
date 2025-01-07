import Link from "next/link";

export default function Demo() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Link href={"/spa"} className="underline text-blue-700">
        回到 SPA 首頁
      </Link>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* 標題區塊 */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">路由系統比較</h1>
            <p className="mt-2 text-gray-600">
              了解 Next.js Pages Router 與 React Router 的差異
            </p>
          </div>

          {/* 內容區塊 */}
          <div className="px-6 py-6 space-y-8">
            {/* Next.js Pages Router 說明 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium mr-2">
                  Next.js Pages Router
                </span>
                <span className="text-gray-600 text-sm">(目前所在位置)</span>
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  使用 {`<Link>`} 元件時支援客戶端導航，無需重新載入頁面
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  支援伺服器端渲染 (SSR) 與靜態生成 (SSG)
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  適合需要 SEO 的頁面
                </li>
              </ul>
            </div>

            {/* React Router 說明 */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium mr-2">
                  React Router
                </span>
                <span className="text-gray-600 text-sm">(在 /spa 路徑下)</span>
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  切換頁面不會重新載入
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  適合複雜的前端互動
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  更流暢的使用者體驗
                </li>
              </ul>
            </div>

            {/* 操作提示 */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <h3 className="font-medium text-gray-900 mb-2">實際體驗</h3>
              <p className="text-gray-600 text-sm">
                請嘗試點擊頂部導航列中的不同連結，觀察兩種路由系統的特點：
              </p>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>
                  • Next.js 路由：首次載入時支援
                  SSR/SSG，後續導航時使用客戶端路由
                </li>
                <li>• React Router：完全客戶端路由，無需伺服器端渲染</li>
              </ul>
            </div>
            {/* 在使用場景建議後新增路由衝突處理說明 */}
            <div className="bg-yellow-50 p-4 rounded-lg mt-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                路由衝突處理方案
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  當混合使用 Next.js 和 React Router
                  時，可能會遇到路由衝突的問題，例如 SPA 連結到
                  Next.js頁面時，瀏覽器上一頁按鈕失效。以下是常見解決方案：
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <span>
                      <strong>使用原生 a 標籤：</strong> 在 SPA 中連結到 Next.js
                      頁面時，使用 {`<a href="/">`} 替代 {`<Link>`}
                      ，確保完整頁面重載
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 新增 Next.js 建構說明區塊 */}
            <div className="px-6 py-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Next.js 建構結果說明
              </h2>

              <div className="space-y-6">
                {/* 檔案結構說明 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    建構後的檔案結構
                  </h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                    {`.
├── 404.html      # 找不到頁面的錯誤頁
├── 500.html      # 伺服器錯誤頁面
├── _app.js       # Next.js 應用程式進入點
├── _document.js  # HTML 文件結構定義
├── doc.html      # doc頁面的靜態輸出
├── index.html    # 首頁的靜態輸出
└── spa.html      # SPA 頁面的靜態輸出`}
                  </pre>
                </div>

                {/* 路由系統整合說明 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    路由系統整合原理
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-900">靜態頁面：</strong>{" "}
                        Next.js 在建構時會為每個頁面生成獨立的 HTML 檔案（如
                        demo.html、index.html）
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-900">SPA 整合：</strong>{" "}
                        spa.html 是 React Router 的容器頁面，所有 SPA
                        路由都在此頁面內處理
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-900">混合運作：</strong>{" "}
                        當訪問 /spa/* 路徑時，Next.js 會載入 spa.html，然後由
                        React Router 接管路由
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 使用場景建議 */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    使用場景建議
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      使用 Next.js Pages Router 處理需要 SEO
                      的公開頁面（如首頁、產品頁）
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      使用 React Router 處理後台管理介面等需要流暢體驗的功能
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 在建構結果說明後新增 next.config.js 說明區塊 */}
            <div className="px-6 py-6 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Next.js 設定檔說明
              </h2>

              <div className="space-y-6">
                {/* next.config.js 程式碼展示 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    next.config.js 關鍵設定
                  </h3>
                  <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                    {`/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... 其他設定 ...
  async rewrites() {
    return [
      {
        source: "/spa/:path*",
        destination: "/spa",
      },
    ];
  },
};`}
                  </pre>
                </div>

                {/* 重定向設定說明 */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    重定向設定解析
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-900">:path* 參數：</strong>{" "}
                        捕捉所有 /spa/ 後的路徑，例如 /spa/about、/spa/contact
                        等
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-indigo-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span>
                        <strong className="text-gray-900">重定向目的：</strong>{" "}
                        將所有 SPA 路由重定向到同一個 /spa 頁面，讓 React Router
                        接管路由處理
                      </span>
                    </li>
                  </ul>
                </div>

                {/* 為什麼需要這個設定 */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    為什麼需要這個設定？
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span>
                        <strong>沒有這個設定：</strong> 直接訪問 /spa/about
                        會返回 404，因為 Next.js 找不到對應的頁面
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>
                        <strong>有了這個設定：</strong> 所有 /spa/*
                        的請求都會導向 /spa 頁面，讓 React Router 正確處理路由
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
