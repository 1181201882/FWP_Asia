import React from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Chatbot from "../Chatbot/page";

const WillRedemption = () => {
  return (
    <div>
      <main>
        <Header />
        <section className="mb-20">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{
              backgroundPosition: "50%",
              backgroundImage: "url('/deal.jpg')",
              height: "500px",
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                  <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    Will Redemption
                    <br />
                    <span className="text-3xl font-medium">
                      We know how important estate planning is to you and your
                      loved one.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-600">
            REDEEM COMPLIMENTARY<br></br>WILL WRTING EP388
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Please fill in the below details:
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contact No
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Your phone"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your Location
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-red-600 sm:w-fit hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
};

export default WillRedemption;
