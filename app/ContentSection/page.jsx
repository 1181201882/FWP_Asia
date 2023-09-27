import React from "react";
import Image from "next/image";

const ContentSection = () => {
  return (
    <div>
      <section className="bg-red-600 min-w-screen">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-fbecd7">
              What is a Will?
            </h2>
            <p className="mb-4 text-white">
              A Will is a legal document that lets you, the Will maker,
              designate certain individuals or charities as the beneficiaries to
              receive your assets and possessions when you pass away.
            </p>
            <p className="text-white">
              It serves as a clear and documented expression of your wishes,
              ensuring that your estate is managed and distributed according to
              your preferences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="image-container">
              <Image
                className="w-full rounded-lg"
                src="/Content_1.jpg"
                width={500} // Set the width of the image
                height={300} // Set the height of the image
                alt="office content 1"
              />
            </div>
            <div className="image-container mt-4 lg:mt-10">
              <Image
                className="w-full rounded-lg"
                src="/Content_2.jpg"
                width={500} // Set the width of the image
                height={300} // Set the height of the image
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentSection;
