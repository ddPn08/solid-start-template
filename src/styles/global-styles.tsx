import { useTheme } from './theme-provider'

export const GlobalStyles = () => {
  const [theme] = useTheme()
  return (
    <style
      // eslint-disable-next-line solid/no-innerhtml
      innerHTML={`
        *,
        ::before,
        ::after {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          font-family: inherit;
        }

        html {
          padding: 0;
          margin: 0;
          -webkit-tap-highlight-color: transparent;
          text-size-adjust: 100%;
          text-size-adjust: none;
          word-break: break-word;
        }

        body {
          padding: 0;
          background-color: ${theme().colors.bg.string()};
          min-height: 100vh;
          margin: 0;
          font-family: 'Noto Sans JP', sans-serif;
          font-size: 16px;
          line-height: 1.5;
          overscroll-behavior: none;
          word-break: break-word;
        }

        a {
          text-decoration: none;
        }

        @media (hover: hover) and (pointer: fine) {
          a:hover {
            text-decoration: none;
          }
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}
    />
  )
}
