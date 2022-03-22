import { useContext } from "react";
import ProductItemForm from "./ProductItemForm";
import CartContext from "../../../store/cart-context";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className="product-main">
      <div className="item-title">{props.name}</div>
      <div className="item-review">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        {props.description}
        <span>(2)</span>
      </div>
      <div className="item-price">{price}</div>
      <dl className="tag">
        <dt>免運</dt>
        <dd>從台灣寄出</dd>
      </dl>
      <a className="event" href="#">
        <i className="fa-solid fa-hand-holding-heart"></i>享跨館結帳 滿額免運
      </a>
      <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
  );
};

export default ProductItem;
