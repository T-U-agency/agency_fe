import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import locales from "@/utils/locales";
import "../globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "Union Cyp",
  description: "Union Cyp",
};

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: (typeof locales)[0] };
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  unstable_setRequestLocale(locale);
  const messages = useMessages();
  console.log("yo yo");
  return (
    <html lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            {/* <Header /> */}
            hi hi hello
            {/* {children} */}
            {/* <Footer /> */}
            {/* 
          <ScrollToTop /> */}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
