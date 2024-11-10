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

interface createThemeFromTemplateProps {
    colors: {
        isDark?: boolean;
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
        shadows: Record<string, BoxShadow>;
    };
    typography: {
        bold?: {
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

export function createThemeFromTemplate(
    props?: createThemeFromTemplateProps
): Theme {
    return {} as Theme;
}

function createDefaultTheme(): Theme {
    const IAESTE_Blue: Color = '#0B3D59';
    const IASETE_MidBlue: Color = '#1B75BB';
    const white: Color = '#fff';
    const black: Color = '#000';
    const light_blue_50: Color = 'rgba(220, 232, 241, 0.5)';
    const fontFamily = 'League Spartan, sans-serif';
    const fontWeights = {
        regular: 400,
        bold: 700,
    };

    return {
        colors: {
            isDark: false,
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
            background: {
                primary: white,
                secondary: light_blue_50,
            },
            accent: {
                primary: IAESTE_Blue,
                secondary: IASETE_MidBlue,
            },
            text: {
                default: black,
                contrast: white,
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
            shadows: {
                default: [
                    '43px 89px 28px 0px rgba(163, 163, 163, 0)',
                    '28px 57px 25px 0px rgba(163, 163, 163, 0.01)',
                    '7px 14px 16px 0px rgba(163, 163, 163, 0.09)',
                    '16px 32px 21px 0px rgba(163, 163, 163, 0.05)',
                    '2px 4px 9px 0px rgba(163, 163, 163, 0.1)',
                ],
            },
        },
        typography: {
            bold: {
                display: {
                    fontFamily,
                    fontSize: '4.5rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h1: {
                    fontFamily,
                    fontSize: '3.5rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h2: {
                    fontFamily,
                    fontSize: '3rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h3: {
                    fontFamily,
                    fontSize: '2.5rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h4: {
                    fontFamily,
                    fontSize: '2rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h5: {
                    fontFamily,
                    fontSize: '1.5rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                h6: {
                    fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                label: {
                    fontFamily,
                    fontSize: '0.875rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                body: {
                    fontFamily,
                    fontSize: '1rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                },
                link: {
                    fontFamily,
                    fontSize: '1rem',
                    fontWeight: fontWeights.bold,
                    lineHeight: 'normal',
                    textDecoration: 'underline',
                },
            },
            regular: {
                display: {
                    fontFamily,
                    fontSize: '4.5rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h1: {
                    fontFamily,
                    fontSize: '3.5rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h2: {
                    fontFamily,
                    fontSize: '3rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h3: {
                    fontFamily,
                    fontSize: '2.5rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h4: {
                    fontFamily,
                    fontSize: '2rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h5: {
                    fontFamily,
                    fontSize: '1.5rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                h6: {
                    fontFamily,
                    fontSize: '1.25rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                label: {
                    fontFamily,
                    fontSize: '0.875rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                body: {
                    fontFamily,
                    fontSize: '1rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                },
                link: {
                    fontFamily,
                    fontSize: '1rem',
                    fontWeight: fontWeights.regular,
                    lineHeight: 'normal',
                    textDecoration: 'underline',
                },
            },
        },
    };
}
