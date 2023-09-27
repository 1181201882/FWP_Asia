import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              3 Easy Steps:
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <Image
                  src="/icon_1.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit="cover"
                  style={{ width: "100%", height: "auto" }} // optional
                  alt="steps_picture"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                PURCHASE THROUGH OUR ESTATE PLANNERS
              </h3>
              <p className="text-gray-500">
                Our estate planners will register you as our customer and
                checkout using their unique IDs.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <Image
                  src="/icon_2.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit="cover"
                  style={{ width: "100%", height: "auto" }} // optional
                  alt="steps_picture"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                SUBMIT YOUR DETAILS
              </h3>
              <p className="text-gray-500 ">
                <br></br>
                Provide your details and submit through our Infinite system.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
                <Image
                  src="/icon_3.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  objectFit="cover"
                  style={{ width: "100%", height: "auto" }} // optional
                  alt="steps_picture"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                CONFIRM AND SIGN <br></br>
              </h3>
              <p className="text-gray-500">
                <br></br>
                Confirm all the details in your Will are correct, we will print
                it out and send to you. Sign your will in front of 2 witnesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
