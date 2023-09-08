import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "../globals.css";

export const metadata = {
  title: 'Auth',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
    >
      <html lang="en">
        <body className="bg-dark-1">
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
