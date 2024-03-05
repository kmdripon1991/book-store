import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const bookData = useLoaderData();

  const [fold, setFold] = useState(true);

  const { title, authors, publisher, year, rating, desc, image, price } =
    bookData;
  console.log(bookData);
  return (
    <div className="my-container ">
      <div className="flex flex-col lg:flex-row max-w-screen-lg overflow-hidden p-5 w-4/5 h-auto border rounded-md items-center justify-center gap-2 mx-auto">
        <div className="lg:w-1/2 h-full">
          <img className="object-cover w-full lg:h-full" src={image} alt="" />
        </div>
        <div className="flex-col lg:w-1/2">
          <p>
            <span className="badge">BRAND NEW</span>
          </p>
          <p className="my-3 font-extrabold text-4xl text-black">{title}</p>
          <p>Authors: {authors}</p>
          <p>Publisher: {publisher}</p>
          <p>Year: {year}</p>
          <p>Rating: {rating}</p>
          {fold ? (
            <p className="my-5 text-gray-500">
              {desc.substring(0, 100)}...{" "}
              <span
                onClick={() => setFold(!fold)}
                className="cursor-pointer text-blue-600"
              >
                see more
              </span>
            </p>
          ) : (
            <p className="my-5 text-gray-500">
              {desc}...
              <span
                onClick={() => setFold(!fold)}
                className="cursor-pointer text-blue-600"
              >
                see less
              </span>{" "}
            </p>
          )}
          <div className="inline-flex gap-3">
            <div>
              <a href="/" target="_blank" className="btn-primary">
                Buy Now
              </a>
            </div>
            <p className="font-bold text-xl text-gray-400">Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
