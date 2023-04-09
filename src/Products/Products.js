import React, { Component } from "react";
import PBox from "../ProductBox/PBox";
import Modal from "../Modal/Modal";
import Slider from "../Slider/Slider";
import ShopBtn from "../shopBtn/ShopBtn";

export default class Products extends Component {
  constructor() {
    super();
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.onClickRemove = this.onClickRemove.bind(this);
    this.flexDisplay = this.flexDisplay.bind(this);
    this.hiddenDisplay = this.hiddenDisplay.bind(this);
    this.countTotalPrice = this.countTotalPrice.bind(this);
    this.state = {
      modalMode: "hidden",
      cart: [],
      wishList: [],
      totalPrice: 0,
      product: [
        {
          id: 1,
          name: "Camera-1",
          category: "camera",
          price: 867,
          img: "./image/items/camera-1.png",
          quantity: 1,
        },
        {
          id: 2,
          name: "Camera-2",
          category: "camera",
          price: 827,
          img: "./image/items/camera-2.png",
          quantity: 1,
        },
        {
          id: 3,
          name: "Camera-3",
          category: "camera",
          price: 842,
          img: "./image/items/camera-3.png",
          quantity: 1,
        },
        {
          id: 4,
          name: "Camera-4",
          category: "camera",
          price: 789,
          img: "./image/items/camera-4.png",
          quantity: 1,
        },
        {
          id: 5,
          name: "headphone-1",
          category: "headphone",
          price: 773,
          img: "./image/items/headphone-1.png",
          quantity: 1,
        },
        {
          id: 6,
          name: "headphone-2",
          category: "headphone",
          price: 723,
          img: "./image/items/headphone-2.png",
          quantity: 1,
        },
        {
          id: 7,
          name: "headphone-3",
          category: "headphone",
          price: 791,
          img: "./image/items/headphone-3.png",
          quantity: 1,
        },
        {
          id: 8,
          name: "headphone-4",
          category: "headphone",
          price: 675,
          img: "./image/items/headphone-4.png",
          quantity: 1,
        },
        {
          id: 9,
          name: "laptop-1",
          category: "laptop",
          price: 675,
          img: "./image/items/laptop-1.png",
          quantity: 1,
        },
        {
          id: 10,
          name: "laptop-2",
          category: "laptop",
          price: 925,
          img: "./image/items/laptop-2.png",
          quantity: 1,
        },
        {
          id: 11,
          name: "laptop-3",
          category: "laptop",
          price: 815,
          img: "./image/items/laptop-3.png",
          quantity: 1,
        },
        {
          id: 12,
          name: "laptop-4",
          category: "laptop",
          price: 975,
          img: "./image/items/laptop-4.png",
          quantity: 1,
        },
      ],
    };
  }
  // =================================
  // Add items to cart
  onClickAdd(productId) {
    let clickedItem = this.state.product.find((item) => item.id === productId);
    let itemInCart = this.state.cart.find((item) => item.id === productId);

    if (!itemInCart) {
      this.setState((prevState) => {
        return { cart: [...prevState.cart, clickedItem] };
      });
    } else {
    }
  }
  // =================================
  // count totalprice
  countTotalPrice(){
    let finalPrice;
    if (this.state.cart.length) {
      finalPrice = this.state.cart.reduce((acc, obj) => {
        return acc + obj.price;
      }, 0);
    }
    this.setState({ totalPrice: finalPrice });
  }

  // wishlist
  onClickLike(productId) {
    let clickedItem = this.state.product.find((item) => item.id === productId);

    !this.state.wishList.find((item) => item.id === productId) &&
      this.setState((prevState) => {
        return { wishList: [...prevState.wishList, clickedItem] };
      });
  }
  // =================================

  // remove item from cart
  onClickRemove(productId) {
    let removedItems = this.state.cart.filter((item) => item.id !== productId);
    this.setState({ cart: removedItems });
  }
  // =================================

  // open Modal
  flexDisplay() {
    this.setState({ modalMode: "flex" });
  }
  // close modal
  hiddenDisplay() {
    this.setState({ modalMode: "hidden" });
  }

  render() {
    return (
      <>
        {/* =============================== */}

        <ShopBtn
          display="sticky"
          modalOpen={this.flexDisplay}
          cart={this.state.cart}
        />
        {/* =============================== */}

        <Modal
          title="Your shopping cart"
          display={this.state.modalMode}
          inCart={this.state.cart}
          {...this.state.cart}
          totalPrice={this.state.totalPrice}
          closeModal={this.hiddenDisplay}
          onClickRm={this.onClickRemove}
          countTotalPrice={this.countTotalPrice}
        />
        {/* =============================== */}

        {/* slider */}
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
          {/* =============================== */}

          {/* total price count */}
    
          <span> {this.state.totalPrice || 0}</span>
        </Slider>
        {/* =============================== */}
      </>
    );
  }
}
