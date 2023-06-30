import Link from "next/link";
import React from "react";

const Cakes = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 pb-10 pt-5 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={'/products/details-product'}><a class="block  shadow-md shadow-gray-400 relative h-fit rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                />
              </a></Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1 royal">
                  Gluten free - 1/2 pound
                </h3>
                <h2 class="text-gray-900 title-font royal text-5xl font-medium">
                  Black forest Cake
                </h2>
                <p class="mt-1 royal text-4xl">₹650</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full royal">
              <Link href={'/products/details-product'}><a class="block  shadow-md shadow-gray-400 relative h-fit rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                />
              </a></Link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Gluten free - 1/2 pound
                </h3>
                <h2 class="text-gray-900 title-font text-5xl font-medium">
                  Black forest Cake
                </h2>
                <p class="mt-1 text-4xl">₹650</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={'/products/details-product'}><a class="block  shadow-md shadow-gray-400 relative h-fit rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                />
              </a></Link>
              <div class="mt-4 royal">
                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Gluten free - 1/2 pound
                </h3>
                <h2 class="text-gray-900 title-font text-5xl font-medium">
                  Black forest Cake
                </h2>
                <p class="mt-1 text-4xl">₹650</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={'/products/details-product'}><a class="block  shadow-md shadow-gray-400 relative h-fit rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                />
              </a></Link>
              <div class="mt-4 royal">
                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Gluten free - 1/2 pound
                </h3>
                <h2 class="text-gray-900 title-font text-5xl font-medium">
                  Black forest Cake
                </h2>
                <p class="mt-1 text-4xl">₹650</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link href={'/products/details-product'}><a class="block  shadow-md shadow-gray-400 relative h-fit rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src="https://www.fnp.com/images/pr/l/v20221130174853/butterscotch-cake-half-kg_1.jpg"
                />
              </a></Link>
              <div class="mt-4 royal">
                <h3 class="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Gluten free - 1/2 pound
                </h3>
                <h2 class="text-gray-900 title-font text-5xl font-medium">
                  Black forest Cake
                </h2>
                <p class="mt-1 text-4xl">₹650</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cakes;
