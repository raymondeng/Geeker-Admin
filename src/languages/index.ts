import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";

import zhCn from "./modules/zh-cn";
import zhTw from "./modules/zh-tw";
import en from "./modules/en";

const i18n = createI18n({
  // Use Composition API, Set to false
  allowComposition: true,
  legacy: false,
  locale: getBrowserLang(),
  messages: {
    zhCn,
    zhTw,
    en
  }
});

export default i18n;
