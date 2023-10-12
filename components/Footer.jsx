import Image from "next/image"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'


const Footer = () => {
  return (
  <div className="main-container p-4 max-w-7xl mx-auto bg-black py-24  ">

    <div className="xl:flex xl:items-center">

    <div className="title-section xl:w-[50%]  ">   
        <Image
        src={'/assets/icon.png'}
        alt="ideaflow logo"
        width={35}
        height={35}
        className="object-contain my-8 "
        />
        <h1 className="tagline text-white font-header my-8 ">Empowering Minds, Enriching Lives: The Intelligence Amplification Company.</h1>

        <div className="social-media-icons mb-10 flex items-center text-[#A1A1AA] ">
            <BsFacebook size={25} className="mr-10  hover:text-white xl:mr-5 " />
            <BsInstagram size={25} className="mr-10 hover:text-white xl:mr-5 "/>
            <BsTwitter size={25} className="mr-10 hover:text-white xl:mr-5 "/> 
            <BsYoutube size={25} className="mr-10 hover:text-white xl:mr-5 "/>
        </div>
    </div>



    <div className="main-content grid grid-cols-2 lg:grid-cols-4 xl:w-[50%]  ">
    
    <div className="solution mb-5">
        <h1 className="font-header mb-5 text-[17px]">Solution</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Marketing</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Analytics</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Insights</h1>
    </div>

    <div className="latest-update mb-5"> 
        <h1 className="font-header mb-5 text-[17px] ">Latest Update</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Blog</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Funding</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Bullet View Video</h1>
    </div>

    <div className="support mb-5">
        <h1 className="font-header mb-5 text-[17px] ">Support</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Pricing</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Guide</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Documentation</h1>
    </div>

    <div className="legal mb-5">
        <h1 className="font-header mb-5 text-lg ">Legal</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Claim</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Privacy</h1>
        <h1 className="my-4 text-sm text-[#D1C6CF]">Terms</h1>
    </div>

    </div>  

   
   
    </div>

    <div className="all-right-served font-header  border-t-[1px] pt-5">
        <h1 className="text-[#9C9CA5] text-sm">© 2023 Ideaflow, Inc. All rights reserved.</h1>
    </div>

    
  </div>
  )
}

export default Footer