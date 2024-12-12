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
    colors: {
        isDark: boolean;
        background: {
            primary: Color;
            secondary: Color;
            accent: Color;
        };
        accent: {
            primary: Color;
            secondary: Color;
        };
        text: {
            default: Color;
            contrast: Color;
            contrastLight: Color;
            link: Color;
            linkContrast: Color;
        };
        gradients: Record<string, LinearGradient>;
    };
    shadows: Record<string, BoxShadow>;
    typography: {
        weights: {
            regular: number;
            bold: number;
        };
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
}
