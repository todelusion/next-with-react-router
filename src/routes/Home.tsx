import React from "react";

export default function Home() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        React Router SPA 首頁
      </h1>
      <div className="space-y-4">
        <p className="text-gray-600">
          這是使用 React Router 建立的 SPA 部分。在這個區域中：
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>使用 JS 來渲染頁面</li>
          <li>路由狀態由 React Router 管理</li>
          <li>可以與 Next.js 的頁面路由共存</li>
        </ul>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600">
            提示：試試點擊上方導航列的不同連結，觀察頁面切換的效果
          </p>
        </div>
      </div>
    </div>
  );
}
