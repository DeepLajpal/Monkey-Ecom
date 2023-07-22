import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styled from "styled-components";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <Wrapper>
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => setIncrease()}>
            <FaMinus />
          </button>
          <div className="amount-style">{amount}</div>
          <button onClick={() => setDecrease()}>
            <FaPlus />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default CartAmountToggle;
