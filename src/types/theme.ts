import type {
  BoxShadow,
  Color,
  LinearGradient,
  SpacingValue,
  RadiusValue,
  FontSettings,
  Border,
} from '.';

export interface Theme {
  colors: {
    isDark: boolean;
    border: Border;
    borderRadius: {
      default: RadiusValue;
      sm: RadiusValue;
      md: RadiusValue;
      lg: RadiusValue;
    };
    spacing: {
      default: SpacingValue;
      xs: SpacingValue;
      sm: SpacingValue;
      md: SpacingValue;
      lg: SpacingValue;
      xl: SpacingValue;
    };
    background: {
      primary: Color;
      secondary: Color;
    };
    text: {
      onLight: Color;
      onDark: Color;
      link: Color;
    };
    gradients: Record<string, LinearGradient>;
    shadows: Record<string, BoxShadow>;
  };
  typography: {
    bold: {
      display: FontSettings;
      h1: FontSettings;
      h2: FontSettings;
      h3: FontSettings;
      h4: FontSettings;
      h5: FontSettings;
      h6: FontSettings;
      label: FontSettings;
      body: FontSettings;
      link: FontSettings;
    };
    regular: {
      display: FontSettings;
      h1: FontSettings;
      h2: FontSettings;
      h3: FontSettings;
      h4: FontSettings;
      h5: FontSettings;
      h6: FontSettings;
      label: FontSettings;
      body: FontSettings;
      link: FontSettings;
    };
  };
}
