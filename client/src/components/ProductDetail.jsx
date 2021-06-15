import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import MainOverview from "./overview/MainOverview.jsx";
import QuestionList from "./QA/QuestionList.jsx";
import Reviews from "./reviews/Reviews.jsx";
import styles from ".././style.css";
import ClickTracking from ".././ClickTracking.jsx";

const ProductDetail = () => {
  const [prod, setProd] = useState(null);
  const [meta, setMeta] = useState(null);
  const { product_id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3246/api/products/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProd(data))
      .catch((err) => console.log("err", err));

    fetch(`http://localhost:3246/api/reviews/meta/${product_id}?format=json`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMeta(data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div>
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <MainOverview prod={prod} />
        </div>
        <div>
          <ClickTracking module={'Questions &'}>
            <QuestionList
              id={product_id}
              productName={prod === null ? null : prod.name}
            />
          </ClickTracking>
        </div>
        <div>
          <Reviews
            id={product_id}
            meta={meta}
            name={prod === null ? null : prod.name}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
