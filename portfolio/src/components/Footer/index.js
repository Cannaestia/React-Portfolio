import React from 'react';

const Footer = () => {
  return (
    <footer className="footer p-4 bg-white shadow md:px-6 md:py-8 bg-zinc-800">
    <div className="sm:flex sm:items-center sm:justify-center">
        <a href="https://www.youtube.com/cannaestia" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/3d-fluency/344/youtube-play.png" className="mr-3 h-8" alt="Facebook Logo" />
        </a>
        <a href="https://www.tiktok.com/@cannaestia" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/nolan/344/tiktok.png" className="mr-3 h-8" alt="TikTok Logo" />
        </a>
        
        <a href="https://github.com/Cannaestia?tab=repositories" className="flex items-center mb-4 sm:mb-0">
            <img src="https://img.icons8.com/nolan/344/github.png" className="mr-3 h-8" alt="Instagram Logo" />
        </a>
        {/* <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://www.facebook.com/b2trbullies/" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>

            <li>
                <a href="https://www.facebook.com/b2trbullies/" className="hover:underline">Contact</a>
            </li>
        </ul> */}
    </div>
    {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
    <span className="block text-sm pt-5 text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://github.com/Cannaestia?tab=repositories" className="hover:underline">Cannaestia™</a>. All Rights Reserved.
    </span>
</footer>
  ); 
}; 

export default Footer;
