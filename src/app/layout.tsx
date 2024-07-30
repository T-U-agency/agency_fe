import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "TNU Education & Travels",
  description: "TNU Education & Travels",
  icons: {
    icon: "/logos/usg.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Validate that the incoming `locale` parameter is valid
  return <>{children}</>;
}
