import Link from "next/link";
import { useState } from "react";

const BookCreate = () => {
  const [bookTitle, setBookTitle] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: bookTitle,
        }),
      }
    );

    if (res.ok) {
      //success
    } else {
      //failure
    }
  }

  return (
    <>
      <h1>Crear libro</h1>
      <p>{bookTitle}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setBookTitle(e.target.value)}
          type="text"
          value={bookTitle}
        />
        <button type="submit">Enviar</button>
      </form>
      <br />
      <Link href="/libros">Book List</Link>
    </>
  );
};

export default BookCreate;
