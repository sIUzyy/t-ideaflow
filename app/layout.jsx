// landing-page layout
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@style/global.css'

// SEO Optimization
export const metadata = {
    title: 'Ideaflow - The Intelligence Amplification Company',
    description: 'The Intelligence Amplification Company'
}

const RootLayout = ({ children }) => {

    return (
       
        <html lang="en">
            <body>
                
            <div className='bg-black text-white'>
                <Navbar/>
                 {children}
                <Footer/>
            </div>
            
            </body>
        </html>
    )

}

export default RootLayout