import Layout from "@components/Layout";
import ProductList from "@components/ProductList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      .then(({ data }) => setProductList(data));
  }, []);

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
