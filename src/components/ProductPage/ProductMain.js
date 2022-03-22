import ProductItem from "./ProductItem/ProductItem";

const productInfo = [
  {
    id: "m1",
    name: "Bear Queen 熊后 | 牛奶莓莓 香蔥蘇打牛軋餅 12入/盒",
    description: "5.0",
    price: 420,
  },
];

const ProductMain = () => {
  const ProductDetails = productInfo.map((p) => (
    <ProductItem
      key={p.id}
      id={p.id}
      name={p.name}
      description={p.description}
      price={p.price}
    />
  ));

  return <section>{ProductDetails}</section>;
};

export default ProductMain;
