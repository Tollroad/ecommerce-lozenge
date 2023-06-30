import Head from "next/head";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Lozenge.com - mistify your senses</title>
          <meta name="description" content="Generated by create next app" />
          <meta
            name="keywords"
            content="nextjs, huntingcoder blog, hunting coder"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bonheur+Royale&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div>
          <img src="/home1.jpg" alt="" className="h-fit w-full" />
        </div>
        <section class="text-orange-600 body-font">
          <div class="container px-5 pt-5 pb-5 mx-auto">
            <div class="flex flex-wrap w-full mb-5 flex-col items-center text-center">
              <h1 class="md:text-7xl text-5xl font-medium title-font text-orange-900 royal">
                Lozenge <br></br>Mystify Your Senses
              </h1>
              <p class="lg:w-1/2 w-full leading-relaxed royal text-orange-500 text-2xl">
                The best place to buy cakes and pastries in town. We have a wide
                range of cakes and pastries to choose from. We also have a wide
                range of beverages to choose from. We also have a wide range of
                cakes and pastries to choose
              </p>
            </div>
            <div class="flex flex-wrap -m-4 royal">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-orange-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-5xl text-orange-900 font-medium title-font mb-2">
                    product 1
                  </h2>
                  <p class="leading-relaxed text-2xl">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-orange-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-5xl text-orange-900 font-medium title-font mb-2">
                    product 1
                  </h2>
                  <p class="leading-relaxed text-2xl">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-orange-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-5xl text-orange-900 font-medium title-font mb-2">
                    product 1
                  </h2>
                  <p class="leading-relaxed text-2xl">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-orange-200 p-6 rounded-lg">
                  <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-6 h-6"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-5xl text-orange-900 font-medium title-font mb-2">
                    product 1
                  </h2>
                  <p class="leading-relaxed text-2xl">
                    Fingerstache flexitarian street art 8-bit waist co, subway
                    tile poke farm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}