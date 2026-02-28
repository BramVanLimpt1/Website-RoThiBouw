// @next
import { Figtree, Archivo } from 'next/font/google';

export let ThemeMode;

(function (ThemeMode) {
  ThemeMode['LIGHT'] = 'light';
  ThemeMode['DARK'] = 'dark';
})(ThemeMode || (ThemeMode = {}));

export let ThemeDirection;

(function (ThemeDirection) {
  ThemeDirection['LTR'] = 'ltr';
  ThemeDirection['RTL'] = 'rtl';
})(ThemeDirection || (ThemeDirection = {}));

/***************************  CONFIG  ***************************/

const config = {
  mode: ThemeMode.LIGHT,
  themeDirection: ThemeDirection.LTR,
  language: 'nl'
};

export default config;

/***************************  FONT FAMILY  ***************************/

const fontFigtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const fontArchivo = Archivo({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const FONT_FIGTREE = fontFigtree.style.fontFamily;
export const FONT_ARCHIVO = fontArchivo.style.fontFamily;
