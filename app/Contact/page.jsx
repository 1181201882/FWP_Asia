import Image from "next/image";
import React from "react";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Chatbot from "../Chatbot/page";

const Contact = () => {
  return (
    <div>
      <main>
        <Header />
        <section className="mb-20">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            style={{
              backgroundPosition: "50%",
              backgroundImage: "url('/hero2.jpg')",
              height: "500px",
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                  <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                    Contact <br />
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
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <div className="py-12 md:px-12">
              <div className="container mx-auto xl:px-32">
                <div className="grid items-center lg:grid-cols-2">
                  <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                    <div className="relative z-[1] block rounded-lg bg-[hsla(0,100%,40%,1)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 lg:-mr-14">
                      <h2 className="mb-12 text-3xl font-bold text-neutral-100">
                        Contact us
                      </h2>
                      <form>
                        <div className="relative mb-6" data-te-input>
                          <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput90"
                            placeholder="Name"
                          />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                            htmlFor="exampleInput90"
                          >
                            Name
                          </label>
                        </div>
                        <div
                          className="relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput91"
                            placeholder="Email address"
                          />
                          <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                            htmlFor="exampleInput91"
                          >
                            Email address
                          </label>
                        </div>
                        <div
                          className="relative mb-6"
                          data-te-input-wrapper-init
                        >
                          <textarea
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Your message"
                          ></textarea>
                          <label
                            htmlFor="exampleFormControlTextarea1"
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-100 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                          >
                            Message
                          </label>
                        </div>

                        <button
                          type="button"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          className="inline-block w-full rounded bg-neutral-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-red-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-900 hover:text-white hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="md:mb-12 lg:mb-0">
                    <div className="relative h-[700px] rounded-lg shadow-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9071931252083!2d101.67492757521254!3d3.11924765333524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc498e8f153073%3A0x5d67a67f3942c534!2sSt.%20Giles%20Boulevard%20Hotel!5e0!3m2!1sen!2smy!4v1695605780588!5m2!1sen!2smy"
                        className="absolute left-0 top-0 h-full w-full rounded-lg"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
        <Chatbot />
      </main>
    </div>
  );
};

export default Contact;
