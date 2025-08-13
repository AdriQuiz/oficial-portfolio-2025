import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Adriana Quiroz - Portfolio",
  description: "My personal Potfolio of Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #323232',
              borderRadius: '10px',
              color: 'white',
              backgroundColor: '#0d0d0d'
            },
          }}
          containerStyle={{
            top: '15%',
            left: '90%'
          }}
        />
      </body>
    </html>
  );
}
