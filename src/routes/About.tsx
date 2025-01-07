import React from "react";

export default function About() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">關於此專案</h1>
      <div className="space-y-6">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">技術架構</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Next.js 作為主要框架</li>
            <li>React Router 處理 SPA 路由</li>
            <li>Tailwind CSS 處理樣式</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">路由說明</h2>
          <p className="text-gray-600">
            本專案展示了如何在 Next.js 專案中整合 React
            Router，實現更靈活的路由管理。
            您可以體驗到兩種不同的路由系統如何和諧共存。
          </p>
        </section>
      </div>
    </div>
  );
}
