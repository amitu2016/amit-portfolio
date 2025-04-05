import type { Metadata } from "next";
import "./globals.css";
import MeteorShower from './components/MeteorShower';

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
        <MeteorShower />
        {children}
      </body>
    </html>
  );
}
