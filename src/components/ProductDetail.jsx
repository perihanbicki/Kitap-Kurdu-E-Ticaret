import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const [book, setBook] = useState(null);

  //useNavigate kurulumu
  const navigate = useNavigate();
  //1-urldeki parametreyi alıcaz bize şu an kitabın idsini verecek id dediğimiz için rout'da
  const { id } = useParams();

  //2-id'sine göre kitabın bilgilerini apiden alıcaz.

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => {
        //elimizde olmayan (mesela idsi 33 olan) bir ürün urlye yazılıp aratılırsa, kullanıcıyı not found sayfasına atacağız
        navigate("/undefined", { state: err.response.status });
      });
  }, []);
  return (
    <div>
      {!book && <p>Yükleniyor..</p>}

      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              className="rounded img-fluid "
              style={{ maxHeight: `400px` }}
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justif-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4">
              <BookInfo title={"Yazar"} value={book.author} />
              <BookInfo title={"Açıklama"} value={book.description} />
              <BookInfo title={"Yıl"} value={book.year} />
              <BookInfo title={"Sayfa Sayısı"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

//bu sayfada oluşturduğumuz 2. component

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
