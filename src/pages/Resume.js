import React from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'

const Resume = () => {
  return (
    <form action="https://public.herotofu.com/v1/5ca2d330-685f-11ed-bd0a-c1ef0a3c8340" method="post">
    <div className="bg-[url('https://i.imgur.com/DOWkPg3.jpg')] bg-fixed bg-no-repeat bg-cover grow flex pb-12 pt-12">
    <div className="max-w-3xl mx-auto mt-10 sm:mt-0 bg-white">
      <div className="px-4 py-5 sm:px-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-5">
                <span className="block xl:inline">My</span>{' '}
                <span className="block text-cyan-500 xl:inline">Resume</span>
              </h1>
        
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Jennifer Arnold</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Applying for</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Fullstack Developer</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> Hi, my name is Jennifer and I'm an animator aspiring to dive into the world of Software Development! I currently
                create gaming animations on YouTube and Tik Tok through my personal studio called Pure Imagination Studios. I did a little
                bit of work as well through out the NFT and cryptocurrency space.</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Cannaestia@gmail.com</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">704-794-4791</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Education</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">UNC Charlotte Coding Bootcamp</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Skills</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul>
                <li>MERN Stack, Bootstrap, Tailwind </li>
                <li>JavaScript, REST APIs, PWA </li>
                <li>HTML, CSS, SQL</li>
              </ul>
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Jennifer_Arnold_Resume.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="https://drive.google.com/file/d/1iw7K2Tlj0fs1QIvcsaax2jLjgrLSLwpG/view?usp=share_link" target="_blank" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
    </form>
  )
}

export default Resume;