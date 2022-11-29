// @refresh reload
import { Suspense } from 'solid-js'
import { Assets } from 'solid-js/web'
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'
import { extractCss } from 'solid-styled-components'

import { GlobalStyles } from './styles/global-styles'
import { ThemeProvider } from './styles/theme-provider'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />

        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <Assets>
          {/* eslint-disable-next-line solid/no-innerhtml */}
          <style innerHTML={extractCss()} />
        </Assets>
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <ThemeProvider>
              <GlobalStyles />
              <main>
                <Routes>
                  <FileRoutes />
                </Routes>
              </main>
            </ThemeProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
