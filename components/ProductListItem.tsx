import React from "react";
import { Card } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  item: TProduct;
}

const ProductListItem = (props: Props) => {
  const { item } = props;
  const { id, image, price, name } = item;
  return (
    <Link href={`/product/${id}`} passHref>
      <Card
        as="a"
        header={name}
        image={<Image src={image} width={333} height={333} alt={item.name} />}
        meta={<Card.Meta style={{ color: "dimgray" }}>{price}</Card.Meta>}
      />
    </Link>
  );
};

export default ProductListItem;
