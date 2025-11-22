import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { routing } from "./i18nrouting";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const accept_lang =
    headersList.get("Accept-Language") || routing.defaultLocale;
  const locale = accept_lang.split(",")[0];
  return {
    locale,
    messages: (await import(`@/components/locales/${locale}.json`)).default,
  };
});
