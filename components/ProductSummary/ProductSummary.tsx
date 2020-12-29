import React from "react";
import { Item, Label } from "semantic-ui-react";
import AddToCart from "./AddToCart";
import ProductAttributes from "./ProductAttributes";

interface Props {
  product: TProduct;
}

const ProductSummary = (props: Props) => {
  const { product } = props;
  return (
    <>
      <Item.Group as="section">
        <Item style={{ alignItems: "center" }}>
          <Item.Image size="medium">
            <img src={product.image} />
          </Item.Image>
          <Item.Content>
            <Item.Header as="h1">{product.name}</Item.Header>
            <Item.Description>
              <p>{product.price}</p>
              <Label>{`SKU: ${product.sku}`}</Label>
            </Item.Description>
            <Item.Extra>
              <AddToCart product={product} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
      <ProductAttributes attributes={product.attributes} />
    </>
  );
};

export default ProductSummary;
