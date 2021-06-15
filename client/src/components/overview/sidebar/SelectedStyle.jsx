import React, { useEffect, useState } from "react";
import style from "../MainOverview.module.css";
import Checkout from "./Checkout.jsx";
import { GiCheckMark } from "react-icons/gi";

const SelectedStyle = ({
  product,
  handleSelect,
  handleDisplays,
  handleId,
  handleSales,
  handleThumbChange,
  handleSelectedStyle
}) => {
  const [selected, setSelected] = useState("");

  const [ids, setIds] = useState([]);
  const [currentStyles, setCurrentStyles] = useState('')

  let array = product.map((item) => item.name);

  const handleSelected = (e, item) => {
    handleId(item.style_id);
    setIds((ids) => [item.style_id]);
    if (!ids.includes(item.style_id)) {
      handleDisplays(item.photos);

    }

    setCurrentStyles(Object.values(item.skus))
    handleSales(item);
    handleThumbChange(e);
    setSelected(item.name);
    handleSelect(e);
  };



  return (
    <div>
      <h1 className={style.style}>Styles: {!selected ? array[0] : selected}</h1>

      <div className={style.styleDiv}>
        {product &&
          product.map((item) => (
            <div
              className={style.selected}
              style={{ backgroundColor: ids[0] !== item.style_id ? "#808080" : "#D96C06" }}
              key={item.style_id}
              onClick={(e) => {
                handleSelected(e, item);
                handleSelectedStyle(item)
              }}
            >{ids[0] === item.style_id &&
            <div className={style.checkMark}>
              <GiCheckMark></GiCheckMark>
            </div>
            }
              {item.name}
            </div>
          ))}
      </div>
      <div>
        <Checkout product={product} currentStyles={currentStyles}/>
      </div>
    </div>
  );
};

export default SelectedStyle;
