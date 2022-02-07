import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import { connect } from "react-redux";
import { Navigate,Link } from "react-router-dom";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import Action from "../store/cart/cartAction"

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = (props) => {
  const {item} = props;
  const [ productDetails,setProductDetails ] = useState();
  console.log(item);

  const addToCartHandler = (item)=>{
   const cartObject = {
    userID :JSON.parse(localStorage.getItem("user")).userID,
    productID: item.productID,
    quantity: 1
   }
   props.insertCartItems(cartObject);
  }

  return (
    <>
    <Container >
      <Circle />
      <Image src={item.imageURL} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={()=>addToCartHandler(item)}/>
        </Icon>
        <Icon>
         <Link to={"product/"+item.productID}><SearchOutlined /></Link> 
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info> 
    </Container>
    </>
  );
};
const mapStateToProps = (state)=>({

})

const mapDispatchToProps = (dispatch)=>({
  insertCartItems: bindActionCreators(Action.insertCartItems,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Product);
