'use client'

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@providers/AuthProvider";
import TanstackProvider from "@providers/TanstackProvider";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@styles/globals.css';
import "../i18n";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Converter | Landing",
//   description: "converter landing page",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TanstackProvider>
            <MantineProvider> 
              {children}
            </MantineProvider>
          </TanstackProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
