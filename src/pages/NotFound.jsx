import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();
  return (
    <div className="container py6">
      <img
        className="img-fluid rounded"
        src="https://i.gifer.com/7VE.gif"
        alt=""
      />
      <p className="text-center my-4">
        404 --- Üzgünüz, aradığınız burada yok.
      </p>
      <div className="d-flex justify-content-center">
        <p>
          <Link className="bg-primary text-white p-2 rounded" to={"/"}>
            Ana sayfaya
          </Link>{" "}
          dönebilir ya da burada kafa dinleyebilirsiniz.
        </p>
      </div>

      {state && (
        <p className="fs-3 text-center my-5">
          Hata kodunuz <span className="badge bg-warning mx-4">{state}</span>{" "}
        </p>
      )}
    </div>
  );
};

export default NotFound;
