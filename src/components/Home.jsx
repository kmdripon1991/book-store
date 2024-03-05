import Lottie from "lottie-react";
import React from "react";
import animationfile from "../../public/animationfile.json";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center my-container justify-between">
      {/* Quote section */}
      <div className="max-w-lg">
        <p>
          <span className="badge">On sale!</span>
        </p>
        <h1 className="text-4xl font-bold my-4 tracking-wide">
          Discover countless <br /> lives in{" "}
          <span className="text-blue-400">each page turned</span>
        </h1>
        <p className="mb-6 text-gray-600 text-xl">
          Books are a uniquely portable magic. Books serve to show a man that
          those original thoughts of his aren’t very new after all. The man who
          does not read good books is no better than the man who can’t.
        </p>

        {/* button section */}
        <div className="flex flex-col items-center gap-3 md:flex-row">
          <Link to="/books" className="btn-primary">
            <div className="inline-flex items-center justify-center gap-2 text-center ">
              <p>Visit store</p>
              <span>
                <ShoppingCartIcon className="h-6 w-6" />
              </span>
            </div>
          </Link>
          <Link to="/about" className="btn-secondary">
            <div className="text-center">
              <p className="text-gray-900">Learn more</p>
            </div>
          </Link>
        </div>
      </div>

      {/* animation section */}
      <div className="w-1/2">
        <Lottie className="h-96" animationData={animationfile}></Lottie>
      </div>
    </div>
  );
};

export default Home;
