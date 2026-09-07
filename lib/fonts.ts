import { Bodoni_Moda, Manrope } from 'next/font/google';

export const fontDisplay = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: 'variable',
  axes: ['opsz'],
  adjustFontFallback: false,
});

export const fontBody = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: 'variable',
  adjustFontFallback: false,
});
