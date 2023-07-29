import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/cartContext";
import { NavLink } from "react-router-dom";

const CartItems = ({ id, name, color, image, amount, price, maxStock }) => {
  const { removeItem, amtIncrease, amtDecrease } = useCartContext();

  //  console.log("productCartItems:" + id, name, color, image, amount, price, maxStock)

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <NavLink to={`/singleproduct/${id}`}>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </NavLink>
        </div>
        <div>
          <NavLink to={`/singleproduct/${id}`}>
            <p>{name}</p>
          </NavLink>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={() => amtDecrease(id)}
        setIncrease={() => amtIncrease(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItems;
