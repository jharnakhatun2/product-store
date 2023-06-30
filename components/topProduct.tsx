"use client";
import Image from "next/image";
import Link from "next/link";
import SVGIcon from "./svgIcon";

export default function TopProduct() {
  const textStyle = [
    " ml-3 my-1 border border-1 inline-block py-2 px-3 hover:shadow hover:bg-white hover:border-none hover:text-primary text-gray-700"
  ]

  const divStyle = [
    "flex items-center transition-all"
  ]
  return (
    
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 sm:pb-16 lg:max-w-none lg:pb-24">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                src="/images/ima12.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                width={1000}
                height={1000}
                alt="Picture of the product"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
            <div className="p-8 sm:p-16 lg:p-24">
              <p className="text-primary uppercase text-sm ">Buying Methods</p>
              <hr className="w-[4%] mb-2 bg-primary h-1 border-0" />
              <h2 className="text-2xl font-bold sm:text-3xl">
                How to buy products from our website
              </h2>
              <div>
                <div className="py-4">
                  <div className={`${divStyle}`}>
                    <div>
                     <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Browse Products
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Product Selection
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Product Selection
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Add to Cart
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Proceed to Checkout
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Shipping and Billing Information
                    </h1>
                  </div>
                  <div className={`${divStyle}`}>
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Review Order
                    </h1>
                  </div>
                  <div className="flex items-center transition-all">
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Payment
                    </h1>
                  </div>
                  <div className="flex items-center transition-all">
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Order Confirmation
                    </h1>
                  </div>
                  <div className="flex items-center transition-all">
                    <div>
                    <SVGIcon/>
                    </div>
                    <h1 className={`${textStyle}`}>
                      Order Fulfillment
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center px-2 py-2 rounded text-white bg-primary hover:bg-secondary transition-all ">
                <Link className="mx-3 " href="/product">
                  BUY NOW
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />{" "}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
