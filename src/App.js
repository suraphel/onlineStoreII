import "./App.css";
import React, { useState, Component } from "react";
import Buttonz from "./style/Buttonz";
import Nav from "./style/Nav";
import Cart from "./Component/Cart/Cart";
import AddProduct from "./Component/AddProduct";

import { useSelector } from "react-redux";

function App(props) {
  const show = useSelector((state) => state.showMyCartSlice.showCart);
  // const [items, isLoaded] = useState([]);
  return (
    <>
      {show && <Cart />}
      <Buttonz />
      <Nav />
      <AddProduct />
    </>
  );
}
export default App;

// class App extends Component {
//   const show = useSelector((state) => state.showMyCartSlice.showCart);
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     };
//   }
//   render() {
//     var { isLoaded, items } = this.state; // accessing the above variables.
//     if (!isLoaded) {
//       return (
//         <div>
//           <Buttonz />
//           <Nav />
//         </div>
//       );
//     } else return <div className="App" />;
//   }
// }
