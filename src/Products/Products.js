import React, { Component } from "react";
import PBox from "../ProductBox/PBox";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";

export default class Products extends Component {
  constructor() {
    super();
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.state = {
      cart: [],
      wishList: [],
      product: [
        {
          id: 1,
          name: "Camera-1",
          category: "camera",
          price: 867,
          img: "./image/items/camera-1.png",
        },
        {
          id: 2,
          name: "Camera-2",
          category: "camera",
          price: 827,
          img: "./image/items/camera-2.png",
        },
        {
          id: 3,
          name: "Camera-3",
          category: "camera",
          price: 842,
          img: "./image/items/camera-3.png",
        },
        {
          id: 4,
          name: "Camera-4",
          category: "camera",
          price: 789,
          img: "./image/items/camera-4.png",
        },
        {
          id: 5,
          name: "headphone-1",
          category: "headphone",
          price: 773,
          img: "./image/items/headphone-1.png",
        },
        {
          id: 6,
          name: "headphone-2",
          category: "headphone",
          price: 723,
          img: "./image/items/headphone-2.png",
        },
        {
          id: 7,
          name: "headphone-3",
          category: "headphone",
          price: 791,
          img: "./image/items/headphone-3.png",
        },
        {
          id: 8,
          name: "headphone-4",
          category: "headphone",
          price: 675,
          img: "./image/items/headphone-4.png",
        },
        {
          id: 9,
          name: "laptop-1",
          category: "laptop",
          price: 675,
          img: "./image/items/laptop-1.png",
        },
        {
          id: 10,
          name: "laptop-2",
          category: "laptop",
          price: 925,
          img: "./image/items/laptop-2.png",
        },
        {
          id: 11,
          name: "laptop-3",
          category: "laptop",
          price: 815,
          img: "./image/items/laptop-3.png",
        },
        {
          id: 12,
          name: "laptop-4",
          category: "laptop",
          price: 975,
          img: "./image/items/laptop-4.png",
        },
      ],
    };
  }
  // add to cart
  onClickAdd(productId) {
    let clickedItem = this.state.product.find((item) => item.id === productId);
    this.setState((prevState) => {
      return { cart: [...prevState.cart, clickedItem] };
    });
  }
  // wishlist
  onClickLike(productId) {
    let clickedItem = this.state.product.find((item) => item.id === productId);

    !this.state.wishList.find(item => item.id === productId) &&
      this.setState(prevState => {
        return { wishList: [...prevState.wishList, clickedItem] };
      });
  }

  render() {
    return (
      <>
        <Modal/>
        <Slider title="New Products">
        {this.state.product.map((item) => {
          return (
            <PBox
              key={item.id}
              {...item}
              onClickAdd={this.onClickAdd}
              onClickLike={this.onClickLike}
            ></PBox>
          );
        })}
      </Slider>
      </>
   
    );
  }
}
