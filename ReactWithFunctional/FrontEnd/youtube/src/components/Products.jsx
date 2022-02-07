import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import InfiniteScroll from "react-infinite-scroll-component";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = (props) => {
  const [productList, setProductList] = useState([]);
  const { getProducts } = props;
  let products = [];

  const fetchMoreData = (pro) => {

  };

  useEffect(async () => {
    const list = await getProducts("product");
        setProductList(list);
  }, []);
  console.log(productList);
  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4></h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Container>
        {console.log(productList)}
        {productList.length > 0 ? (
          <>
            {productList?.map((item) => (
              <Product item={item}  />
            ))}
          </>
        ) : (
          <></>
        )}
      </Container>
    </InfiniteScroll>
  );
};

export default Products;
