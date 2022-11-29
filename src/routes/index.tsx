import { createMemo } from 'solid-js'
import { Title } from 'solid-start'
import { css } from 'solid-styled-components'

import { Themes, useTheme } from '~/styles/theme-provider'

export default function Home() {
  const [theme, setTheme] = useTheme()

  const containerStyle = createMemo(
    () => css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
      gap: 1rem;
    `,
  )

  const buttonStyle = createMemo(
    () => css`
      padding: 0.5rem;
      border: none;
      border-radius: 1rem;
      background-color: ${theme().colors.bg_second.fade(0.5).string()};
      color: ${theme().colors.text.string()};
      cursor: pointer;
      font-size: 2rem;
      outline: none;
    `,
  )

  return (
    <>
      <>
        <Title>Hello World</Title>
        <div class={containerStyle()}>
          <button
            class={buttonStyle()}
            onClick={() => {
              setTheme({ ...Themes.dark })
            }}
          >
            Dark
          </button>
          <button
            class={buttonStyle()}
            onClick={() => {
              setTheme({ ...Themes.light })
            }}
          >
            Light
          </button>
        </div>
      </>
    </>
  )
}
