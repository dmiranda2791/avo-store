import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductSummary from "@components/ProductSummary";
import Layout from "@components/Layout";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const response = await fetch("https://avo-store-one.vercel.app/api/avo");
  const { data } = await response.json();

  const paths = data.map(({ id }: TProduct) => ({
    params: { id },
  }));

  return {
    paths,
    // 404 for everything else
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const response = await fetch(
    `https://avo-store-one.vercel.app//api/avo/${id}`
  );
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

interface Props {
  product: TProduct;
}

const Product = ({ product }: Props) => {
  return <Layout>{product && <ProductSummary product={product} />}</Layout>;
};

export default Product;
