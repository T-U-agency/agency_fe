import Header from "@/components/Header";
import "../styles/index.css";
import "node_modules/react-modal-video/css/modal-video.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
            {/* 
          <ScrollToTop /> */}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Script from "next/script";
import Footer from "@/components/Footer";
