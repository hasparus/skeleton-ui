import React from 'react';
import { ThemeProvider as ThemeDecorator } from 'theme-ui';
import { theme as defaultTheme } from '../../theme';

const merge = require('deepmerge');

export type Theme = typeof defaultTheme;

// Inform Emotion about SkeletonUITheme theme.
type SkeletonUITheme = Theme;
declare module '@emotion/react' {
  export interface Theme extends SkeletonUITheme {}
}
export interface ThemeProviderProps {
  theme: Theme | ((outerTheme: Theme) => Theme);
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;
  const mergedTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  return <ThemeDecorator theme={mergedTheme}>{children}</ThemeDecorator>;
};
