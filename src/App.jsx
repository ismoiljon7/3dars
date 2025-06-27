import React, { useState } from "react";
import Image1 from "./assets/1984.jpg";
import Image2 from "./assets/great-gatsby.jpg";
import Image3 from "./assets/mockingbird.jpg";
import Image4 from "./assets/harry-potter.jpg";
import Image5 from "./assets/pride-and-prejudice.jpg";
import Image6 from "./assets/image6.jpg";
import Image7 from "./assets/image7.jpg";
import Image8 from "./assets/image8.jpg";
import Image9 from "./assets/image9.jpg";
import Image10 from "./assets/image10.jpg";
import Image11 from "./assets/image11.jpg";
import Image12 from "./assets/image12.jpg";
import Image13 from "./assets/image13.jpg";
import Image14 from "./assets/image14.jpg";
import Image15 from "./assets/image15.jpg";

const App = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      image: Image3,
      count: 0,
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      image: Image1,
      count: 0,
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: Image2,
      count: 0,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      image: Image5,
      count: 0,
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer",
      author: "J.K. Rowling",
      year: 1997,
      image: Image4,
      count: 0,
    },
    {
      id: 6,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: Image6,
      count: 0,
    },
    {
      id: 7,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      image: Image7,
      count: 0,
    },
    {
      id: 8,
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      year: 1605,
      image: Image8,
      count: 0,
    },
    {
      id: 9,
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      year: 1947,
      image: Image9,
      count: 0,
    },
    {
      id: 10,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      image: Image10,
      count: 0,
    },
    {
      id: 11,
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      image: Image11,
      count: 0,
    },
    {
      id: 12,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      image: Image12,
      count: 0,
    },
    {
      id: 13,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      image: Image13,
      count: 0,
    },
    {
      id: 14,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      image: Image14,
      count: 0,
    },
    {
      id: 15,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: Image15,
      count: 0,
    },
  ]);

  const handleAdd = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, count: book.count + 1 } : book
      )
    );
  };

  const handleRemove = (id) => {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? { ...book, count: book.count > 1 ? book.count - 1 : 0 }
          : book
      )
    );
  };

  return (
    <ul className="grid grid-cols-3 gap-10 p-10 items-center justify-around">
      {books.map((book) => (
        <li key={book.id}>
          <div className="max-w-[350px] bg-green-500 p-4 rounded-lg shadow-md">
            <h1 className="text-[25px] font-bold mb-2">{book.title}</h1>
            <p className="text-white mb-1">by {book.author}</p>
            <p className="text-white mb-2">({book.year})</p>
            <img
              className="w-[300px] h-[400px] object-cover mb-4"
              src={book.image}
              alt={book.title}
            />

            {book.count === 0 ? (
              <button
                onClick={() => handleAdd(book.id)}
                className="bg-[#C73B0F] text-white px-4 py-2 rounded hover:bg-[#a3320c]"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleRemove(book.id)}
                  className="bg-[#C73B0F] text-white w-8 h-8 rounded-full"
                >
                  -
                </button>
                <span className="text-white text-lg font-bold">
                  {book.count}
                </span>
                <button
                  onClick={() => handleAdd(book.id)}
                  className="bg-[#4c352e] text-white w-8 h-8 rounded-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default App;
