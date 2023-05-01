import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";
import enLocale from "element-plus/lib/locale/lang/en";
import zhCnLocale from "element-plus/lib/locale/lang/zh-cn";
import zhTwLocale from "element-plus/lib/locale/lang/zh-tw";

import nextEn from "./modules/en";
import nextZhCn from "./modules/zh-cn";
import nextZhTw from "./modules/zh-tw";

import pagesLoginZhCn from "./pages/login/zh-cn";
import pagesLoginEn from "./pages/login/en";
import pagesLoginZhTw from "./pages/login/zh-tw";
import pagesFormI18nZhCn from "./pages/formI18n/zh-cn";
import pagesFormI18nEn from "./pages/formI18n/en";
import pagesFormI18nZhTw from "./pages/formI18n/zh-tw";

// 定义语言国际化内容
/**
 * 说明：
 * /src/i18n/lang 下的 ts 为框架的国际化内容
 * /src/i18n/pages 下的 ts 为各界面的国际化内容
 */
const messages = {
  [zhCnLocale.name]: {
    ...zhCnLocale,
    message: {
      ...nextZhCn,
      ...pagesLoginZhCn,
      ...pagesFormI18nZhCn
    }
  },
  [enLocale.name]: {
    ...enLocale,
    message: {
      ...nextEn,
      ...pagesLoginEn,
      ...pagesFormI18nEn
    }
  },
  [zhTwLocale.name]: {
    ...zhTwLocale,
    message: {
      ...nextZhTw,
      ...pagesLoginZhTw,
      ...pagesFormI18nZhTw
    }
  }
};

const i18n = createI18n({
  // Use Composition API, Set to false
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  fallbackWarn: false,
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  fallbackLocale: zhCnLocale.name,
  messages
});

export default i18n;
