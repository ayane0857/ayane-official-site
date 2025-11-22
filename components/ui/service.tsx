import { useTranslations } from "next-intl";
export function Service() {
  const t = useTranslations("ServiceList");
  return (
    <div>
      <div className="flex flex-col mb-8 pb-3 gap-6">
        <a
          href="https://ayano.ayane0857.net"
          className="block group transition-all duration-300 hover:scale-105"
        >
          <div className="border rounded-lg overflow-hidden shadow-sm duration-300 bg-white dark:bg-slate-800 hover:shadow-md bg-[#fafafa]">
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-2 text-gray-800 dark:text-gray-200 transition-colors">
                {t("ayano-bot-title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("ayano-bot-desc")}
              </p>
              <div className="mt-4 flex items-center text-sm text-primary">
                <span>{t("View-details")}</span>
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
      </div>
      <div className="flex flex-col mb-8 pb-3 gap-6">
        <a
          href="https://utau.ayane0857.net"
          className="block group transition-all duration-300 hover:scale-105"
        >
          <div className="border rounded-lg overflow-hidden shadow-sm duration-300 bg-white dark:bg-slate-800 hover:shadow-md bg-[#fafafa]">
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-2 text-gray-800 dark:text-gray-200 transition-colors">
                {t("kanata-title")} (UTAU)
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("kanata-desc")}
              </p>
              <div className="mt-4 flex items-center text-sm text-primary">
                <span>{t("View-details")}</span>
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
      </div>
      <div className="flex flex-col mb-8 pb-3 gap-6">
        <a
          href="https://slides.ayane0857.net"
          className="block group transition-all duration-300 hover:scale-105"
        >
          <div className="border rounded-lg overflow-hidden shadow-sm duration-300 bg-white dark:bg-slate-800 hover:shadow-md">
            <div className="p-6">
              <h2 className="text-2xl font-medium mb-2 text-gray-800 dark:text-gray-200 transition-colors">
                {t("slideshare-title")}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {t("slideshare-desc")}
              </p>
              <div className="mt-4 flex items-center text-sm text-primary">
                <span>{t("View-details")}</span>
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
      </div>
    </div>
  );
}
