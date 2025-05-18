import React from "react";

const ServicesSection: React.FC = () => {
  return (
    <div className="max-w-4xl w-full mx-auto">
      <h1 className="text-4xl font-bold mb-8 pb-3 border-b flex items-center gap-2">
        <span className="text-primary">運営サービス一覧</span>
      </h1>
      <div className="flex flex-col gap-6">
        {/* 外部リンクには通常のaタグを使用 */}
        <a
          href="https://ayano.ayane0857.net"
          target="_blank"
          rel="noopener noreferrer"
          className="block group transition-all duration-300 hover:scale-105"
        >
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                彩乃
                <span className="font-bold">bot</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                総合型開発中
                <span>Bot</span>
                です。 ギャンブルできます（）
              </p>
              <div className="mt-4 flex items-center text-sm text-primary">
                <span>詳細を見る</span>
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
        <div className="border border-dashed rounded-lg overflow-hidden p-6 flex flex-col items-center justify-center h-full bg-gray-50 dark:bg-gray-800/50">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <p className="mt-4 text-gray-500 dark:text-gray-400 text-center">
            近日公開予定の新サービスなんてないです
          </p>
        </div>
      </div>
    </div>
  );
};

// React.memoでコンポーネントをラップ
export default React.memo(ServicesSection);
