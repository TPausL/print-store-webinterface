import { ThemeProvider, extendTheme } from '@mui/joy/styles';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

declare module '@mui/joy/Typography' {
  interface TypographyPropsVariantOverrides {
    CTA1: true;
    CTA2: true;
    CTA3: true;
    body3: true;
    body4: true;
    Body1: true;
    Body2: true;
    Body3: true;
    Body1Medium: true;
    Body1SemiBold: true;
  }
}
export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = extendTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
