const PromoOffer = () => {
    return (
      <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
          
          {/* 🖥️ صورة المنتج */}
          <div className="lg:col-span-5 lg:mt-0 flex justify-center">
            <a href="#">
              <img
                className="mb-4 h-56 w-56 sm:h-96 sm:w-96 md:h-full md:w-full dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                alt="iMac"
              />
              <img
                className="mb-4 hidden dark:block md:h-full"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                alt="iMac"
              />
            </a>
          </div>
  
          {/* 🛒 تفاصيل العرض */}
          <div className="me-auto place-self-center lg:col-span-7">
            <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Save <span className="text-blue-600">$500</span> today on your purchase <br />
              of a new <span className="text-blue-600">iMac computer</span>.
            </h1>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation.
              Pre-order now to secure your discount.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Pre-order now
            </a>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default PromoOffer;
  