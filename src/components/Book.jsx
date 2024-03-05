import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { title, image, price, subtitle, isbn13 } = book;
  // console.log(isbn13);
  return (
    <Link to={`../books/${isbn13}`}>
      <div className="overflow-hidden relative rounded transition duration-200 transform hover:-translate-y-2 shadow-lg hover:shadow-lg">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={image}
          alt="book-cover"
        />
        <div className="px-6  py-4 bg-black bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0   transition-opacity duration-200 text-gray-300 flex flex-col">
          <p className="text-xl font-semibold">{title}</p>
          <p className="mt-8">{subtitle.substring(0, 40)}...</p>
          <p className="mt-auto">Price: {price}</p>
          
        </div>
      </div>
    </Link>
  );
};

export default Book;
