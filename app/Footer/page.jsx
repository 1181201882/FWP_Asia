import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-white md:p-8 lg:p-10">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              src="/FWP_Asia.png" // Replace with the path to your new image
              alt="New Image Alt Text"
              width={64} // Set the width of the new image
              height={64} // Set the height of the new image
            />
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            37-10, The Boulevard, Midvalley City, Lingkaran Syed Putra,59200
            Kuala Lumpur.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Will Redemption
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Contact Us
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023-2024{" "}
            <a href="#" className="hover:underline">
              FWP Asia™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
