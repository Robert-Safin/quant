import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-bgBlack">
      <body className={inter.className}>
        <div className="mx-auto overflow-hidden">{children}</div>
      </body>
    </html>
  );
}
