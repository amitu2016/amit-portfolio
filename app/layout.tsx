import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Kumar Upadhyay - Portfolio",
  description: "Portfolio of Amit Kumar Upadhyay, a Technical Lead with expertise in cloud-native applications and microservices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <div className="stars" />
        {children}
      </body>
    </html>
  );
}
