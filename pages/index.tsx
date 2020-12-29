import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from "@components/Layout";
import ProductList from "@components/ProductList";

export const getStaticProps = async () => {
  const response = await fetch("https://avo-store-one.vercel.app/api/avo");
  const { data } = await response.json();

  return {
    props: {
      productList: data,
    },
  };
};

interface Props {
  productList: TProduct[];
}

const Home = (props: Props) => {
  const { productList } = props;

  return (
    <Layout>
      <div>
        <h1>Hola AvoStore!</h1>
        {productList && <ProductList items={productList} />}
      </div>
    </Layout>
  );
};

export default Home;
