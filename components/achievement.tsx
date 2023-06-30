"use client";
export default function Achievement() {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-white">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm lg:text-lg font-medium text-gray-500">
                Total Sales
              </dt>
              <dd className="text-4xl lg:text-5xl font-extrabold text-nature ">
                $7.9m
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm lg:text-lg font-medium text-gray-500">
                Products Strong
              </dt>
              <dd className="text-4xl lg:text-5xl font-extrabold text-nature">
                100,000
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm lg:text-lg font-medium text-gray-500">
                Global Reach
              </dt>
              <dd className="text-4xl lg:text-5xl font-extrabold text-nature">
                100+
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-sm lg:text-lg font-medium text-gray-500">
                Fastest Delivery
              </dt>
              <dd className="text-4xl lg:text-5xl font-extrabold text-nature">
                24/7
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
