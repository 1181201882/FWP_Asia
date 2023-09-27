import React from "react";
import Image from "next/image";
import Header from "../Header/page";
import Footer from "../Footer/page";
import Chatbot from "../Chatbot/page";
const About = () => {
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
                    About
                    <br />
                    <span className="text-3xl font-medium">
                      Finex & Co provides a wide range of tailor-made
                      <br></br>
                      wealth succession products to meet our clients needs.
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <h2 className="mb-12 text-3xl font-bold text-neutral-900">
              Our Team
              <u className="text-primary"></u>
            </h2>

            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-red-600 shadow-[0_2px_15px_-3px_rgba(255,255,255,1),0_10px_20px_-2px_rgba(255,255,255,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Image
                      src="/team3.jpg"
                      width="300"
                      height="300"
                      alt=""
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute text-red-600 left-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold text-neutral-100">
                      John Ng
                    </h5>
                    <p className="mb-4 text-neutral-100">Sales Executive</p>
                    <ul className="mx-auto flex list-inside justify-center">
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                          />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-red-600 shadow-[0_2px_15px_-3px_rgba(255,255,255,1),0_10px_20px_-2px_rgba(255,255,255,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Image
                      src="/team2.jpg"
                      width="300"
                      height="300"
                      alt=""
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute text-red-600 left-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold text-neutral-100">
                      Michael Lee
                    </h5>
                    <p className="mb-4 text-neutral-100">Marketing Expert</p>
                    <ul className="mx-auto flex list-inside justify-center">
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-neutral-100"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                          />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="block rounded-lg bg-red-600 shadow-[0_2px_15px_-3px_rgba(255,255,255,1),0_10px_20px_-2px_rgba(255,255,255,0.04)]">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Image
                      src="/team1.jpg"
                      width="300"
                      height="300"
                      alt=""
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute text-red-600 left-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-4 text-lg font-bold text-neutral-100">
                      Jack Lim
                    </h5>
                    <p className="mb-4 text-neutral-100">Product Manager</p>
                    <ul className="mx-auto flex list-inside justify-center">
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
                          />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5 text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </a>
                      <a href="#!" className="px-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 text-primary text-neutral-100"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32 text-center md:text-left">
            <h2 className="mb-12 text-center text-3xl font-bold text-neutral-900">
              Our Values
            </h2>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="/value1.jpg"
                    className="w-full"
                    width="600"
                    height="300"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  Customer-Centric
                </h3>
                {/* <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                    />
                  </svg>
                  Travels
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>13.01.2022</u> by
                    <a href="#!">Anna Maria Doe</a>
                  </small>
                </p> */}
                <p className="text-neutral-500">
                  With the end users in mind in the platform we design and offer
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:order-2 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="/value3.jpg"
                    className="w-full"
                    width="600"
                    height="300"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  Shareholder-Focused
                </h3>
                {/* <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                  Art
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>12.01.2022</u> by
                    <a href="#!">Halley Frank</a>
                  </small>
                </p> */}
                <p className="text-neutral-500">
                  With efficient use of financial resources in the sustainable
                  return we deliver.
                </p>
              </div>
            </div>

            <div className="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
              <div className="mb-6 md:mb-0">
                <div
                  className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <Image
                    src="/value2.jpg"
                    className="w-full"
                    width="600"
                    height="300"
                    alt="Louvre"
                  />
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                  Sustainable
                </h3>
                {/* <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600 md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  Business
                </div>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <small>
                    Published <u>10.01.2022</u> by
                    <a href="#!">Joe Svan</a>
                  </small>
                </p> */}
                <p className="text-neutral-500">
                  With the environment, society and good governance in mind when
                  we manage our business
                </p>
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

export default About;
