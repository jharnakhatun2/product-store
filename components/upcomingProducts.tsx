import Image from "next/image";
import Link from "next/link";
import { ProductDataType } from "./interfaces";

async function getProducts() {
  let res = await fetch(`https://fakestoreapi.com/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function UpcomingProducts() {
  let products = await getProducts();
  const upcomingProduct = products.slice(11, 15);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl pt-0 lg:pt-52  px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8  lg:max-w-none lg:py-16">
          <p className="text-primary uppercase text-sm ">
            Get Ready for Exciting
          </p>
          <hr className="w-[4%] mb-2 bg-primary h-1 border-0" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Upcoming Products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {upcomingProduct?.map((product: ProductDataType) => {
              return (
                <div
                  key={product.id}
                  className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto"
                >
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Image
                      src={product.image}
                      className="object-cover object-center w-full h-56"
                      width={500}
                      height={500}
                      alt="Picture of the product"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-nature bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                  </div>
                  <div className="flex items-center px-6 py-3 bg-nature">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="text-white bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      {" "}
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />{" "}
                    </svg>
                    <h1 className="mx-3 text-lg text-white">
                      {product.category}
                    </h1>
                  </div>
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-center">
                      <div className="flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill text-yellow-500"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-yellow-500 bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-yellow-500 bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-yellow-500 bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="text-yellow-500 bi bi-star-half"
                          viewBox="0 0 16 16"
                        >
                          {" "}
                          <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />{" "}
                        </svg>
                        <h1 className="pl-1 text-sm text-gray-800 dark:text-white">
                          (<span>{product.rating.count}</span> )
                        </h1>
                      </div>
                      <h1>
                        $
                        <span className="pl-1 text-lg font-semibold text-gray-800 dark:text-white">
                          {product.price}
                        </span>
                      </h1>
                    </div>
                    <p className="py-3 text-sm text-gray-700 dark:text-gray-400">
                      {product.title.slice(0, 45)}
                    </p>
                    <div className="w-full bg-secondary hover:bg-primary transition-all mx-auto text-center py-2">
                      <Link
                        className="text-gray-600"
                        href={`/product/${product.id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* More products... */}
          </div>
        </div>
      </div>
    </div>
  );
}
