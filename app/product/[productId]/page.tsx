
import StarButton from "@/components/starbutton";
import Image from "next/image";


async function getProduct(id: string) {
  let res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export default async function Product({
  params: { productId },
}: {
  params: {
    productId: string;
  };
}) {
  const product = await getProduct(productId);
  const { title, price, description, category, image, rating } = product;
 

  return (
    <>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <Image
                src={image}
                className="aspect-square w-full rounded-xl object-cover"
                width={500}
                height={500}
                alt="Picture of the product"
              />
            </div>
            <div className="sticky top-0">
              <strong className="rounded-full border border-gray-400 bg-secondary px-3 py-0.5 text-xs font-medium tracking-wide text-nature">
                Pre Order
              </strong>
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {title}
                  </h1>
                  <p className="text-sm">Category : {category}</p>
                  <div className="-ms-0.5 flex">
                    <StarButton/>
                    <StarButton/>
                    <StarButton/>
                    <StarButton/>
                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <h1 className="pl-1 text-sm text-gray-800 dark:text-white">
                    (<span>{rating.count}</span> )
                  </h1>
                  </div>
                  <h1 className="pl-1 text-sm text-gray-800 dark:text-white">
                    Ratings : <span>{rating.rate}</span>
                  </h1>
                </div>
                <p className="text-lg font-bold">${price}</p>
              </div>
              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>
                    {description}
                  </p>
                </div>
              </div>
              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>
                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                      Grey
                      </span>
                    </label>
                    <label htmlFor="color_fr" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        Teal
                      </span>
                    </label>
                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        Blue
                      </span>
                    </label>
                  </div>
                </fieldset>
                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Size</legend>
                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="size_xs" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        XS
                      </span>
                    </label>
                    <label htmlFor="size_s" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        S
                      </span>
                    </label>
                    <label htmlFor="size_m" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        M
                      </span>
                    </label>
                    <label htmlFor="size_l" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_l"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-nature peer-checked:text-white">
                        L
                      </span>
                    </label>
                    <label htmlFor="size_xl" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xl"
                        className="peer sr-only"
                      />
                      <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-primary peer-checked:text-white">
                        XL
                      </span>
                    </label>
                  </div>
                </fieldset>
                <div className="mt-8 flex gap-4">
                  <div>
                    <label htmlFor="Quantity" className="sr-only">
                      {" "}
                      Quantity{" "}
                    </label>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        id="Quantity"
                        defaultValue={1}
                        className="h-10 w-16 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        type="button"
                        className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="block rounded bg-primary px-5 py-3 text-xs font-medium text-white hover:bg-secondary"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
    // <div>
    //   <h1>{product.name}</h1>
    //   <p>Post ID: {product.id}</p>
    //   <Image
    //       src={product.image}
    //        width={500}
    //        height={500}
    //       alt="Picture of the author"
    //        loading="lazy"
    //      />
    //   <p>{product.description}</p>
    // </div>
  );
}
