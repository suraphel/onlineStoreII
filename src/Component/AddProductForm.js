import { useRef } from "react";

function AddProductForm(props) {
  const title = useRef();
  const price = useRef();
  const avatarUrl = useRef();
  const avatarSrc = useRef();
  const imageUrl = useRef();
  const sample = useRef();
  const description = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const productObject = {
      title: title.current.value,
      price: price.current.value,
      avatarUrl: avatarUrl.current.value,
      avatarSrc: avatarSrc.current.value,
      imageUrl: imageUrl.current.value,
      sample: sample.current.value,
      description: description.current.value,
    };
    props.onAddProductForm(productObject);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" placeholder="Title" ref={title} />
        <label>Price</label>
        <input type="price" placeholder="Price" ref={price} required />
        <label>AvatarUrl</label>
        <input type="url" placeholder="AvatarUrl" ref={avatarUrl} />
        <label>avatarSrc</label>
        <input type="url" placehoder="avatarSrc" ref={avatarSrc} />
        <label>ImageUrl</label>
        <input type="url" placeholder="ImageUrl" ref={imageUrl} />
        <label>Sample</label>
        <input type="text" placeholder="Sample" ref={sample} required />
        <label>Description</label>
        <textarea
          type="text"
          rows="5"
          placeholder="Description"
          ref={description}
        ></textarea>
        <button>Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
