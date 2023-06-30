import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
  <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
      <div className="sm:max-w-lg">
        <p className='text-primary uppercase '>Own Style Passion</p>
        <hr className='mb-5 w-1/12 bg-primary h-1 border-0'/>
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Discover the Latest Trends in Fashion
        </h1>
        <p className="mt-4 text-gray-500">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn't care if you live or die.
        </p>
      </div>
      <div>
        <div className="mt-10">
          {/* Decorative image grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <Image
                      src="/images/hero1.png"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/man1.jpg"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/man2.jpg"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/2.jpg"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/man3.jpg"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/women3.png"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                  <Image
                      src="/images/man4.png"
                      className="h-full w-full object-cover object-center"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="/product"
            className="inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center font-medium text-white hover:bg-secondary transition-all"
          >
            Shop Collection
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
