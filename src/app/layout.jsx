import NavBar from '@/component/navbar/page'
import Footer from '@/component/footer/page'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next-Top-Api',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body suppressHydrationWarning={true} className={inter.className} > 
       <div className='containerBody'>
         <NavBar />
          {children}
         <Footer/>
       </div>
     </body>
    </html>
  )
}
