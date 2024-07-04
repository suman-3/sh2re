import { Inter } from 'next/font/google'
import './globals.css'
import "@uploadthing/react/styles.css";
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sh2re - Direct File Link',
  description: 'Get direct link of your files for your projects!',
  icons: {
    icon: 'https://i.postimg.cc/HsmwGfkH/Screenshot-2023-12-08-235237.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className,"overflow-x-hidden")}>{children}<Toaster /></body>
    </html>
  )
}
