import React from "react";
import "./Gallery.css";
import GoodsCard from "../GoodsCard/goodsCard";

const Gallery = () => {
  const products = [
    {
      id: 1,
      name: "Apple",
      image: "",
      price: "$1000 each",
    },
    {
      id: 2,
      name: "Cherry",
      image: "",
      price: "$2.50 per kg",
    },
    {
      id: 3,
      name: "Grape",
      image: "",
      price: "$2.99 per kg",
    },
    {
      id: 4,
      name: "Peach",
      image: "",
      price: "$4.00 per kg",
    },
    {
      id: 5,
      name: "Pear",
      image: "",
      price: "$3.99 per kg",
    },
    {
      id: 6,
      name: "Potato",
      image: "",
      price: "$1.59 per kg",
    },
  ];

  return (
    <div className="gallery">
      {products.map((product) => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Gallery;
