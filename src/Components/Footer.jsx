import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
        <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-black bg-slate-100">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-indigo-100 pb-10">
                <div className="md:max-w-96">
                    <img alt="" class="h-11 invert opacity-80" src={assets.logo}/>
                    <p className="mt-6 text-sm">
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6 ' />
                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6' />
                        <img src={assets.linkendinIcon} alt="linkedin-icon" className='w-6' />
                    </div>
                    
                    <div className="flex items-center gap-2 mt-4">
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/googlePlayBtnBlack.svg" alt="google play" className="h-10 w-auto border border-white rounded" />
                        <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/appDownload/appleStoreBtnBlack.svg" alt="app store" className="h-10 w-auto border border-white rounded" />
                    </div>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Company</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Events & Hotels</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+91 99999-99999</p>
                            <p>harinishrisangeetha@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="#">Harini Shri R</a>. All Right Reserved.
            </p>
        </footer>
    )
}

export default Footer;