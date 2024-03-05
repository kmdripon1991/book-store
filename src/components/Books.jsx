import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";

const Books = () => {
  const { books } = useLoaderData();

  const navigation = useNavigation()
  if(navigation.state === 'loading'){
    return <LoadingSpinner/>
  }
  return (
    <div className="my-container">
      <div className="grid mb-8 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
