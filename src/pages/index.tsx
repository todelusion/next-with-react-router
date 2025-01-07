import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block p-2 bg-blue-50 rounded-full mb-4">
            <span className="text-blue-600 text-sm font-semibold">
              混合路由示範
            </span>
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-8">
            Next.js + React Router{" "}
            <span className="text-blue-600">混合路由示例</span>
          </h1>

          {/* 主要內容區塊 */}
          <div className="space-y-8">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              這個專案展示了如何在 Next.js
              中靈活運用不同的路由策略，打造更好的使用者體驗
            </p>

            {/* 特色區塊 */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mb-3">📚</div>
                <h3 className="font-bold mb-2">Pages Router</h3>
                <p className="text-gray-600">Next.js 原生的檔案系統路由</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mb-3">⚡</div>
                <h3 className="font-bold mb-2">React Router</h3>
                <p className="text-gray-600">靈活的客戶端路由管理</p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-2xl mb-3">🔄</div>
                <h3 className="font-bold mb-2">無縫整合</h3>
                <p className="text-gray-600">兩種路由系統完美結合</p>
              </div>
            </div>

            {/* 按鈕區塊 */}
            <div className="space-x-4 pt-8">
              <Link
                href="/spa"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 font-medium"
              >
                體驗 SPA 路由 →
              </Link>
              <Link
                href="https://github.com/todelusion/next-with-react-router"
                target="_blank"
                className="inline-block bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all transform hover:-translate-y-1 font-medium"
              >
                查看原始碼
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
