import React from "react";
import { Card, Image } from "semantic-ui-react";
import ProductListItem from "./ProductListItem";

interface Props {
  items: TProduct[];
}

const ProductList = (props: Props) => {
  const { items } = props;
  return (
    <Card.Group stackable itemsPerRow={4}>
      {items.map((item) => {
        return <ProductListItem key={item.id} item={item} />;
      })}
    </Card.Group>
  );
};

export default ProductList;
