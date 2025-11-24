import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { routing } from "./i18nrouting";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const accept_lang = headersList.get("Accept-Language") || "";
  const browserLocale = accept_lang.split(",")[0]?.trim(); // e.g. "en-US"

  // Make sure locale is one of your supported locales
  const locale = routing.locales.includes(
    browserLocale as (typeof routing.locales)[number]
  )
    ? browserLocale
    : routing.defaultLocale;
  return {
    locale,
    messages: (await import(`@/components/locales/${locale}.json`)).default,
  };
});
