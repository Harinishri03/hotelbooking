import React from 'react'

const NewsLetter = () => {
  return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            
            <section className="flex flex-col items-center justify-center pt-16 pb-24">
                
                <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mt-4">Get started for free today</h1>
                <p className="max-w-lg text-center text-slate-500 mt-6">Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.</p>
                <form className="relative flex items-center rounded-md border border-slate-200 mt-6 text-sm max-w-md w-full">
                    <svg className="absolute left-3" width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6 9.505 8.865a1 1 0 0 1-1.005 0L4 6" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.3 1H2.7C1.761 1 1 1.84 1 2.875v11.25C1 15.161 1.761 16 2.7 16h13.6c.939 0 1.7-.84 1.7-1.875V2.875C18 1.839 17.239 1 16.3 1" stroke="#90A1B9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="email" 
                        name="email"
                        placeholder="Enter your email" 
                        className="focus:outline-none pl-10 py-5 bg-transparent w-full"
                        required />
                    <button className="shrink-0 mr-2 px-6 py-3 text-sm bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-md active:scale-95 transition duration-300 text-white cursor-pointer">
                        Subscribe now
                    </button>
                </form>
                <p className='text-gray-500 mt-6 text-xs text-center'>By subscribing, you agree to our Privacy Policy and consent to receive updates</p>

            </section>
        </>
    );
}

export default NewsLetter;