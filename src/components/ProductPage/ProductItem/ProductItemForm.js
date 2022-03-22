import { useRef, useState } from "react";
import Input from "../../UI/Input";

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="數量"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="add-btn">
        <i className="fa-solid fa-cart-shopping"></i>
        放入購物車
      </button>
      <div className="collect-btn">
        <i class="fa-solid fa-heart"></i>收藏商品
      </div>
      <ul>
        <li>付款後，從備貨到寄出商品為 5 個工作天。（不包含假日）</li>
        <li>設計館提供統一發票或免用統一發票收據</li>
      </ul>
    </form>
  );
};

export default ProductItemForm;
