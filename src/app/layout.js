import Providers from "@/utils/providers"
import { Inter } from 'next/font/google'
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mintair",
  description: "Connect your ETH wallet and view your details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <Providers>
      <Toaster position="bottom-center" />
      {children}
        </Providers>
        </body>
    </html>
  )
}
