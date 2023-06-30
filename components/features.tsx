"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

async function getProducts() {
  let res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function Features() {
  const router = useRouter();
  let products = await getProducts();
  const allProduct = products.slice(0, 10);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <p className="text-primary uppercase text-sm ">Fashion Destination</p>
          <hr className="w-[4%] mb-2 bg-primary h-1 border-0" />
          <h2 className="text-3xl font-bold text-gray-900">Our Collections</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            {allProduct?.map((obj) => {
              return (
                <div
                  key={obj.id}
                  className="group relative transition hover:shadow-sm hover:border-t-2 bg-white"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={obj.image}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full transition duration-500 group-hover:scale-105"
                      width={600}
                      height={800}
                      alt="Picture of the product"
                    />
                  </div>
                  <div className="px-2 shadow">
                    <div className="py-3">
                      <h3 className="text-md">{obj.title.slice(0, 20)}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {obj.category}
                      </p>
                    </div>
                    <div className="flex justify-between items-center h-[10%] w-full py-3">
                      <p className="text-sm font-medium text-gray-900 ">
                        ${obj.price}
                      </p>
                      <Link
                        className="px-2 py-2 rounded text-gray-700 bg-secondary hover:bg-primary transition-all"
                        href={`/product/${obj.id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
