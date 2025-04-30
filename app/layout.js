import "./globals.css";
import Navbar from "@/components/NavBar"; // ✅ Keep this!

import localFont from 'next/font/local';

// ✅ Local Geist font
const geist = localFont({
  src: [
    {
      path: 'fonts/Geist/Geist-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/Geist/Geist-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: 'fonts/Geist/Geist-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
});

// ❌ You can delete this part about Geist_Mono for now, unless you really want to use it later

export const metadata = {
  title: "Resin Products",
  description: "Premium Resin Products for Modern Living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={`${geist.className} bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
