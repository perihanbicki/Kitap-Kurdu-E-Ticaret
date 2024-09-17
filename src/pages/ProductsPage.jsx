import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  //urldeki arama parametrelerine erişme
  const order = searchParams.get("sırala");
  const query = searchParams.get("aramaTerimi");

  console.log(order, query);

  //api isteği atarken gönderilecek olan parametreleri belirle
  const options = {
    params: {
      _sort: order === "Z-A" ? "-title" : "title",
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className="mx-5 mt-4 h-100">
      <h3>{books?.length} kitap bulundu</h3>

      <FilterArea />

      <div className="card-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
