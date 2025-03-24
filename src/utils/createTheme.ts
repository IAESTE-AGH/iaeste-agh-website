import type {
    Theme,
    Border,
    RadiusValue,
    SpacingValue,
    Color,
    LinearGradient,
    BoxShadow,
    FontSettings,
} from '@/types';

interface createThemeFromDefaultProps {
    border?: Border;
    borderRadius: {
        default: RadiusValue;
        sm?: RadiusValue;
        md?: RadiusValue;
        lg?: RadiusValue;
    };
    spacing: {
        default: SpacingValue;
        xs?: SpacingValue;
        sm?: SpacingValue;
        md?: SpacingValue;
        lg?: SpacingValue;
        xl?: SpacingValue;
    };
    colors: {
        isDark?: boolean;
        background: {
            primary: Color;
            secondary?: Color;
        };
        accent: {
            primary: Color;
            secondary?: Color;
        };
        text: {
            default: Color;
            contrast: Color;
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

export function createThemeFromDefault(
    props?: createThemeFromDefaultProps
): Theme {
    const theme = createDefaultTheme();
    if (!props) return theme;
    // TODO: Implement the function to create a theme from the default theme
    return {} as Theme;
}

export function createDefaultTheme(): Theme {
    const IAESTE_Blue: Color = '#0B3D59';
    const IASETE_MidBlue: Color = '#1B75BB';
    const white: Color = '#fff';
    const black: Color = '#000';
    const light_blue_50: Color = 'rgba(220, 232, 241, 0.5)';
    const fontFamily = 'League Spartan, sans-serif';
    const fontFamily_quote = 'Libre Baskerville, serif';
    const fontWeights = {
        regular: 400,
        bold: 600,
    };

    return {
        border: `2px solid ${light_blue_50}`,
        borderRadius: {
            default: '24px',
            sm: '8px',
            md: '16px',
            lg: '24px',
        },
        spacing: {
            default: '32px',
            xs: '16px',
            sm: '24px',
            md: '32px',
            lg: '48px',
            xl: '96px',
        },
        colors: {
            isDark: false,
            background: {
                primary: white,
                secondary: white,
                accent: light_blue_50,
            },
            accent: {
                primary: IAESTE_Blue,
                secondary: IASETE_MidBlue,
            },
            text: {
                default: black,
                contrast: white,
                contrastLight: '#dce8f1',
                link: IAESTE_Blue,
                linkContrast: white,
            },
            gradients: {
                iaeste_gradient_1: `linear-gradient(90deg, #1B75BB, #27A9E1, #49C0B5)`,
                iaeste_gradient_2: `linear-gradient(90deg, #38B449, #8CC63E, #D6DF23)`,
                iaeste_gradient_3: `linear-gradient(90deg, #EF4036, #F05A28, #F7931D)`,
                iaeste_gradient_4: `linear-gradient(90deg, #652C90, #91268F, #D91B5B)`,
                iaeste_gradient_5: `linear-gradient(90deg, #F6F18F, #F7DC3C, #FCB31E)`,
            },
        },
        shadows: {
            default: [
                '43px 89px 28px 0px rgba(163, 163, 163, 0)',
                '28px 57px 25px 0px rgba(163, 163, 163, 0.01)',
                '7px 14px 16px 0px rgba(163, 163, 163, 0.09)',
                '16px 32px 21px 0px rgba(163, 163, 163, 0.05)',
                '2px 4px 9px 0px rgba(163, 163, 163, 0.1)',
            ],
        },
        typography: {
            weights: fontWeights,
            display: {
                fontFamily,
                fontSize: '4.5rem',
                lineHeight: '5rem',
            },
            h1: {
                fontFamily,
                fontSize: '3.5rem',
                lineHeight: '4rem',
            },
            h2: {
                fontFamily,
                fontSize: '3rem',
                lineHeight: '3.5rem',
            },
            h3: {
                fontFamily,
                fontSize: '2.5rem',
                lineHeight: '3rem',
            },
            h4: {
                fontFamily,
                fontSize: '2rem',
                lineHeight: '2.5rem',
            },
            h5: {
                fontFamily,
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
            h6: {
                fontFamily,
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
            },
            label: {
                fontFamily,
                fontSize: '0.875rem',
                lineHeight: '1.3rem',
            },
            body: {
                fontFamily,
                fontSize: '1rem',
                lineHeight: '1.5rem',
            },
            link: {
                fontFamily,
                fontSize: '1rem',
                lineHeight: '1.5rem',
                textDecoration: 'underline',
            },
            quote: {
                fontFamily: fontFamily_quote,
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
        },
    };
}

export function createDefaultMobileTheme(): Theme {
    const IAESTE_Blue: Color = '#0B3D59';
    const IASETE_MidBlue: Color = '#1B75BB';
    const white: Color = '#fff';
    const black: Color = '#000';
    const light_blue_50: Color = 'rgba(220, 232, 241, 0.5)';
    const fontFamily = 'League Spartan, sans-serif';
    const fontFamily_quote = 'Libre Baskerville, serif';
    const fontWeights = {
        regular: 400,
        bold: 600,
    };

    return {
        border: `2px solid ${light_blue_50}`,
        borderRadius: {
            default: '24px',
            sm: '8px',
            md: '16px',
            lg: '24px',
        },
        spacing: {
            default: '24px',
            xs: '12px',
            sm: '16px',
            md: '24px',
            lg: '32px',
            xl: '48px',
        },
        colors: {
            isDark: false,
            background: {
                primary: white,
                secondary: white,
                accent: light_blue_50,
            },
            accent: {
                primary: IAESTE_Blue,
                secondary: IASETE_MidBlue,
            },
            text: {
                default: black,
                contrast: white,
                contrastLight: '#dce8f1',
                link: IAESTE_Blue,
                linkContrast: white,
            },
            gradients: {
                iaeste_gradient_1: `linear-gradient(90deg, #1B75BB, #27A9E1, #49C0B5)`,
                iaeste_gradient_2: `linear-gradient(90deg, #38B449, #8CC63E, #D6DF23)`,
                iaeste_gradient_3: `linear-gradient(90deg, #EF4036, #F05A28, #F7931D)`,
                iaeste_gradient_4: `linear-gradient(90deg, #652C90, #91268F, #D91B5B)`,
                iaeste_gradient_5: `linear-gradient(90deg, #F6F18F, #F7DC3C, #FCB31E)`,
            },
        },
        shadows: {
            default: [
                '43px 89px 28px 0px rgba(163, 163, 163, 0)',
                '28px 57px 25px 0px rgba(163, 163, 163, 0.01)',
                '7px 14px 16px 0px rgba(163, 163, 163, 0.09)',
                '16px 32px 21px 0px rgba(163, 163, 163, 0.05)',
                '2px 4px 9px 0px rgba(163, 163, 163, 0.1)',
            ],
        },
        typography: {
            weights: fontWeights,
            display: {
                fontFamily,
                fontSize: '4rem',
                lineHeight: '4.5rem',
            },
            h1: {
                fontFamily,
                fontSize: '3rem',
                lineHeight: '3.5rem',
            },
            h2: {
                fontFamily,
                fontSize: '2.5rem',
                lineHeight: '3rem',
            },
            h3: {
                fontFamily,
                fontSize: '2rem',
                lineHeight: '2.5rem',
            },
            h4: {
                fontFamily,
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
            h5: {
                fontFamily,
                fontSize: '1.25rem',
                lineHeight: '1.75rem',
            },
            h6: {
                fontFamily,
                fontSize: '1rem',
                lineHeight: '1.5rem',
            },
            label: {
                fontFamily,
                fontSize: '0.875rem',
                lineHeight: '1.3rem',
            },
            body: {
                fontFamily,
                fontSize: '1rem',
                lineHeight: '1.5rem',
            },
            link: {
                fontFamily,
                fontSize: '1rem',
                lineHeight: '1.5rem',
                textDecoration: 'underline',
            },
            quote: {
                fontFamily: fontFamily_quote,
                fontSize: '1.5rem',
                lineHeight: '2rem',
            },
        },
    };
}
