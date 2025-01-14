import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "LOL Profile Customizer",
  description: "Customize your League of Legends profile with ease!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
