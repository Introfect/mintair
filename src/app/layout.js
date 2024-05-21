import AuthProviders from "@/utils/authProviders";
import Providers from "@/utils/providers";
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
      <body className={inter.className}>
        <AuthProviders>
        <Providers>
        {children}
        </Providers>
        </AuthProviders>
        </body>
    </html>
  );
}
