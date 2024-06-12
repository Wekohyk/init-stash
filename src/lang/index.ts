import { createI18n } from 'vue-i18n';
import zh from './zh.ts';
import en from './en.ts';
import jp from './jp.ts';
import { getLocale } from './tool';

// 约束所有lang对象为typeof zh
const i18n = createI18n({
  locale: getLocale(),
  messages: {
    zh,
    en,
    jp,
  },
  legacy: false,
});
export const getI18nGlobal = () => i18n.global;
export const $t = i18n.global.t.bind(i18n.global);
export default i18n;
