import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductSummary from "@components/ProductSummary";
import Layout from "@components/Layout";

const Product = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<TProduct>(null);

  useEffect(() => {
    if (!query.id) {
      return;
    }

    window
      .fetch(`/api/avo/${query.id}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, [query.id]);
  return <Layout>{product && <ProductSummary product={product} />}</Layout>;
};

export default Product;
