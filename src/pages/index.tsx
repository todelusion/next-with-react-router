import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Next.js + React Router 混合路由示例
          </h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-600 mb-4">
              這個專案展示了如何在 Next.js 中同時使用：
            </p>
            <ul className="text-lg text-gray-700 space-y-2 mb-8">
              <li>• Next.js 內建的頁面路由 (Pages Router)</li>
              <li>• React Router 的單頁應用路由 (SPA)</li>
              <li>• 兩種路由系統的無縫整合</li>
            </ul>
            <div className="space-x-4">
              <Link
                href="/spa"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                體驗 SPA 路由
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
