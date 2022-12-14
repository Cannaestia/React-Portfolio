import React from 'react'
// controls the pictures and information
const callouts = [
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/lvXrUOo.png',
    imageAlt: 'GitHub',
    href: 'https://github.com/Cannaestia?tab=repositories',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/GNibuOu.jpg',
    imageAlt: 'TikTok',
    href: 'https://www.tiktok.com/@cannaestia',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/RgE3w0U.jpg',
    imageAlt: 'YouTube',
    href: 'https://www.youtube.com/cannaestia',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/Yuuuns2.jpg',
    imageAlt: 'Gamers Checkpoint',
    href: 'https://supernaldeity.github.io/gamers-checkpoint/',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://images.ctfassets.net/sfnkq8lmu5d7/45un3KmPuTLyUNDwDUOkh7/b17ba9b45cdec97c257be30e18517ec2/2022-05-18_English_Bulldogs_Face_Extinction_Stocksy_txp680f3471PHQ300_Medium_192223.jpg?w=1000&h=750&fl=progressive&q=80&fm=jpg',
    imageAlt: 'Bullies',
    href: 'https://github.com/SupernalDeity/bullies-to-the-rescue',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/ejUjmWq.jpg',
    imageAlt: 'Harry Potter Quiz.',
    href: 'https://github.com/Cannaestia/Quiz',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/B7FYOYu.jpg',
    imageAlt: 'Team Profile.',
    href: 'https://github.com/Cannaestia/Team-profile-generator',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/2ognqI9.jpg',
    imageAlt: 'Social Network API.',
    href: 'https://github.com/Cannaestia/Social-Network-API',
  },
]
const Portfolio = () => {
  return (
    <div className="bg-[url('https://i.imgur.com/DOWkPg3.jpg')] bg-fixed bg-no-repeat bg-cover">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-5">
                <span className="block xl:inline">My</span>{' '}
                <span className="block text-cyan-500 xl:inline">Portfolio</span>
              </h1>
                <p className='text-center'>Click any box to view the Application</p>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className=" space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="text-center relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href} target="_blank"> 
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
export default Portfolio;