import type { BoxShadow, Color, LinearGradient } from './color';

export interface Theme {
  colors: {
    border: Color;
    background: {
      primary: Color;
      secondary?: Color;
    };
    text: {
      primary: Color;
      secondary?: Color;
      link: Color;
    };
    gradients: Record<string, LinearGradient>;
    shadows: Record<string, BoxShadow>;
  };
  typography: Record<string, FontSettings>;
}

interface FontSettings {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
}
