import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-red-600 py-24 my-12">
      <figure className="max-w-screen-md mx-auto text-center mb-10">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-fbecd7"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-fbecd7">
            Finally a legacy advisory company which can provide us a practical
            and long-term solution in managing our business shares and business
            succession planning.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <Image
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            width="300"
            height="300"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-900">
            <cite className="pr-3 font-medium text-gray-900">
              Mr & Mrs Chin
            </cite>
            <cite className="pl-3 text-sm text-gray-900">Business Partner</cite>
          </div>
        </figcaption>
      </figure>
      <figure className="max-w-screen-md mx-auto text-center mb-10">
        <svg
          className="w-10 h-10 mx-auto mb-3 text-fbecd7"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-fbecd7">
            Emmeline is a highly skilled legal advisor. She gave professional
            advice and helped single parent like me to plan ahead for my minor
            child.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <Image
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            width="300"
            height="300"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-900">
            <cite className="pr-3 font-medium text-gray-900">
              Ms.Alicia Lim
            </cite>
            <cite className="pl-3 text-sm text-gray-900">Single Mother</cite>
          </div>
        </figcaption>
      </figure>
      <figure className="max-w-screen-md mx-auto text-center mb-10">
        <svg
          className="w-10 h-10 mx-auto mb-3  text-fbecd7"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium text-fbecd7">
            Had my post-retirement planning with the team and I am satisfied
            with their professionalism and great service.
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <Image
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            width="300"
            height="300"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-900 text-fbecd7">
            <cite className="pr-3 font-medium text-gray-900">Micheal Lee</cite>
            <cite className="pl-3 text-sm text-gray-900">
              Retired Police Officer
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Testimonials;
