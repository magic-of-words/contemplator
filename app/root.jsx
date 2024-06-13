import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react"
  
  export default function App() {
    return (
      <html>
        <head>
          <link rel="icon" sizes="32x32" href="/favicon.ico" type="image/x-icon"/>
          <link rel="icon" type="image/svg+xml" href="https://magic-of-words-icons.s3.us-west-1.amazonaws.com/icon-aaa.svg"/>
          <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
          <link rel="manifest" href="path.webmanifest"/>
          <Meta />
          <Links />
        </head>
        <body>
          <h1>magic-of-words</h1>
          <Outlet />
  
          <Scripts />
        </body>
      </html>
    )
  }
  