import AddProductForm from "./AddProductForm";

function AddProduct() {
  //   const [add, setAdd] = useState([]);

  async function AddProductHandler(productObject) {
    const response = await fetch(
      "https://firetest-a4733-default-rtdb.europe-west1.firebasedatabase.app/product.json",
      {
        method: "POST",
        body: JSON.stringify(productObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <AddProductForm onAddProductForm={AddProductHandler} />
    </div>
  );
}

export default AddProduct;
