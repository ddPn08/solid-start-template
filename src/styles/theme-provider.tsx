import Color from 'color'
import { Accessor, Component, createContext, createSignal, JSX, Setter, useContext } from 'solid-js'
import type { DefaultTheme } from 'solid-styled-components'

type ThemeContextT = [Accessor<DefaultTheme>, Setter<DefaultTheme>]
type ThemeNames = 'dark' | 'light'

const ThemeContext = createContext([] as unknown as ThemeContextT)

export const MediaBreakpoints = {
  sm: '(min-width: 512px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1420px)',
} as const

export const Themes: Record<ThemeNames, DefaultTheme> = {
  light: {
    name: 'light',
    colors: {
      main: Color('#aed1ff'),
      sub: Color('#96c2fc'),
      text: Color('#333333'),
      bg: Color('#aed1ff'),
      bg_second: Color('#fff'),
    },
    media: {
      breakpoints: {
        sm: `@media ${MediaBreakpoints.sm}`,
        md: `@media ${MediaBreakpoints.md}`,
        lg: `@media ${MediaBreakpoints.lg}`,
        xl: `@media ${MediaBreakpoints.xl}`,
      },
    },
  },
  dark: {
    name: 'dark',
    colors: {
      main: Color('#aed1ff'),
      sub: Color('#96c2fc'),
      text: Color('#eee'),
      bg: Color('#222'),
      bg_second: Color('#333'),
    },
    media: {
      breakpoints: {
        sm: `@media ${MediaBreakpoints.sm}`,
        md: `@media ${MediaBreakpoints.md}`,
        lg: `@media ${MediaBreakpoints.lg}`,
        xl: `@media ${MediaBreakpoints.xl}`,
      },
    },
  },
}

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: Component<{ children: JSX.Element }> = (props) => {
  const [theme, setTheme] = createSignal(Themes.light)

  return <ThemeContext.Provider value={[theme, setTheme]}>{props.children}</ThemeContext.Provider>
}

declare module 'solid-styled-components' {
  export interface DefaultTheme {
    name: ThemeNames
    colors: {
      main: Color
      sub: Color
      text: Color
      bg: Color
      bg_second: Color
    }
    media: {
      breakpoints: {
        sm: string
        md: string
        lg: string
        xl: string
      }
    }
  }
}
