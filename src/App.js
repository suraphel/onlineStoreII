import "./App.css";
import Buttonz from "./style/Buttonz";
import Nav from "./style/Nav";
import Cart from "./Component/Cart/Cart";
import AddProduct from "./Component/AddProduct";

import { useSelector } from "react-redux";

function App(props) {
  // const [items, isLoaded] = useState([]);
  const show = useSelector((state) => state.showMyCartSlice.showCart);
  return (
    <>
      {/* show the Cart conditionally */}
      {show && <Cart />}
      <Buttonz />
      <AddProduct />
      <Cart />
      <Nav />
    </>
  );
}
export default App;

/* From Class based to Function based  */
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
