import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${context.params.bid}`
  );

  const data = await res.json();

  return {
    props: {
      book: data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books`);

  const data = await res.json();

  return {
    paths: data.map((book) => ({ params: { bid: String(book.id) } })),

    fallback: false,
  };
}

const BookDetail = ({ book }) => {
  return (
    <>
      <h1>{book.title}</h1>

      <Link href="/libros">Lista de libros</Link>
    </>
  );
};

export default BookDetail;
