/* eslint-disable no-unused-vars */

import swal from 'sweetalert';

/* eslint-disable no-undef */
const AddProduct = () => {
 const handleAdd = e => {
  e.preventDefault();

  const form = e.target;
  const image = form.image.value;
  const name = form.name.value;
  const brand = form.brand.value;
  const price = form.price.value;
  const type = form.type.value;
  const description = form.description.value;
  const rating = form.rating.value;
  const newProduct = { image, name, brand, price, type, description, rating };

  fetch('https://assignment-10-server-side-jade.vercel.app/products', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(newProduct),
  })
   .then(res => res.json())
   .then(data => {
    if (data.insertedId) {
     swal('Good job!', 'Product Added successfully!', 'success');
    }
   });

  form.reset();
 };

 return (
  <div className="bg-[#F4F3F0] p-24">
   <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
   <form onSubmit={handleAdd}>
    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Image</span>
      </label>
      <label className="input-group">
       <input type="text" name="image" placeholder="Image url" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Name</span>
      </label>
      <label className="input-group">
       <input type="text" name="name" placeholder="Model Name" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Brand name</span>
      </label>
      <label className="input-group">
       <input type="text" name="brand" placeholder="Audi / Bmw / Toyota / Nissan / Mercedes / Honda" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Type</span>
      </label>
      <label className="input-group">
       <input type="text" name="type" placeholder="Car / Motorcycle" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Price</span>
      </label>
      <label className="input-group">
       <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Short description</span>
      </label>
      <label className="input-group">
       <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="mb-8">
     <div className="form-control w-full">
      <label className="label">
       <span className="label-text">Rating</span>
      </label>
      <label className="input-group">
       <input type="text" name="rating" placeholder="rating / 5" className="input input-bordered w-full" />
      </label>
     </div>
    </div>
    <input type="submit" value="Add Product" className="btn btn-block btn-neutral" />
   </form>
  </div>
 );
};

export default AddProduct;
