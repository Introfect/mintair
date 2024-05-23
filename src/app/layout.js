import Providers from "@/utils/providers"
import { Inter } from 'next/font/google'
import "./globals.css";

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
       
      {children}
        </Providers>
        </body>
    </html>
  )
}
