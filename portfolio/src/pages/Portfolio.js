import React from 'react'

const callouts = [
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/lvXrUOo.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'https://github.com/Cannaestia?tab=repositories',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/Yuuuns2.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: 'https://supernaldeity.github.io/gamers-checkpoint/',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/GNibuOu.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'https://www.tiktok.com/@cannaestia',
  },
  {
    name: '',
    description: '',
    imageSrc: 'https://i.imgur.com/RgE3w0U.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'https://www.youtube.com/cannaestia',
  },
]


const Portfolio = () => {
  return (
    <div className="bg-[url('https://i.imgur.com/DOWkPg3.jpg')] bg-fixed">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl text-center mt-5">
                <span className="block xl:inline">My</span>{' '}
                <span className="block text-cyan-500 xl:inline">Portfolio</span>
              </h1>
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">

        <div className=" space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
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