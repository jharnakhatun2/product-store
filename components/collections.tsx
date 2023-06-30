import Image from "next/image";
import Link from "next/link";

//local json file
const products = [
  {
    id: 1,
    imageSrc: "/images/mancollection.jpg",
    category: "men's clothing",
    title: "Timeless Gentlemen - Men's Apparel",
  },
  {
    id: 2,
    imageSrc: "/images/womencollections.jpg",
    category: "women's clothing",
    title: "Elegance Women's Apparel",
  },
  {
    id: 3,
    imageSrc: "/images/jewelarycollection.png",
    category: "jewelery",
    title: "Luxury Jewelry and Accessories",
  },
  {
    id: 4,
    imageSrc: "/images/electronics.jpg",
    category: "electronics",
    title: "Electronics for Everyday Life",
  },
];

export default function Collections() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <p className="text-primary uppercase text-sm ">Fashion Destination</p>
          <hr className="w-[4%] mb-2 bg-primary h-1 border-0" />
          <h2 className="text-3xl font-bold text-gray-900">Our Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {products.map((product) => {
              return (
                <div key={product.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-nature sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-50 sm:h-64">
                  <Link
                      href={`/product?category=${encodeURIComponent(
                        product.category
                      )}`}
                    >
                    <Image
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                      width={600}
                      height={600}
                      alt="Picture of the product"
                    />
                    </Link>
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link
                      href={`/product?category=${encodeURIComponent(
                        product.category
                      )}`}
                    >
                      <span className="inset-0">
                        {product.category}
                      </span>
                    </Link>
                  </h3>
                  <p className="text-base text-gray-900">
                    {product.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
