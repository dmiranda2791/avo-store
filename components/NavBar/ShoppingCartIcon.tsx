import { Basket } from "@components/SVGIcons";
import React from "react";

interface Props {
  cartCount: number;
  name: string;
}

const ShoppingCartIcon = ({ cartCount, name }: Props) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`;
    }

    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      );
    }

    return `(${cartCount})`;
  };

  return (
    <div className="container">
      <Basket />
      <div className="text">
        {` ${name}`}
        {showCartCount()}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  );
};

export default ShoppingCartIcon;
