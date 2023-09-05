import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["cyrillic"], weight: "300" });

export const metadata = {
  title: "Homepage",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning={true} className={inter.className}>
        <nav>My Navbar</nav>
        {children}
      </body>
    </html>
  );
}
