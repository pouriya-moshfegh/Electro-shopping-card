import React from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import Collection from "./Collection/Collection";
import Products from "./Products/Products";

export default function Mainpage() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Collection></Collection>
      <Products></Products>
    </div>
  );
}
