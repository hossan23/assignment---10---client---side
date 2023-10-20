import { useLoaderData, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Update = () => {
 const singleData = useLoaderData();
 console.log(singleData);
 const { _id, image, name, brand, price, type, description, rating } = singleData;

 const navigate = useNavigate();

 const handleUpdate = e => {
  e.preventDefault(e);
  const form = e.target;
  const image = form.image.value;
  const name = form.name.value;
  const brand = form.brand.value;
  const price = form.price.value;
  const type = form.type.value;
  const description = form.description.value;
  const rating = form.rating.value;
  const updatedProduct = { image, name, brand, price, type, description, rating };
  console.log(updatedProduct);

  form.reset();
  fetch(`http://localhost:5000/products/${_id}`, {
   method: 'PUT',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(updatedProduct),
  })
   .then(res => res.json())
   .then(data => {
    if (data.modifiedCount > 0) {
     swal('Good job!', 'Product Updated successfully!', 'success');
    }
    navigate('/');
   });
 };
 return (
  <div className="bg-[#F4F3F0] p-24">
   <h2 className="text-3xl font-extrabold text-center">Update a Product</h2>
   <form onSubmit={handleUpdate}>
    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Image</span>
      </label>
      <label className="input-group">
       <input type="text" name="image" defaultValue={image} placeholder="Image url" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Name</span>
      </label>
      <label className="input-group">
       <input type="text" name="name" defaultValue={name} placeholder="Model Name" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Brand name</span>
      </label>
      <label className="input-group">
       <input type="text" name="brand" defaultValue={brand} placeholder="Audi / Bmw / Toyota / Nissan / Mercedes / Honda" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Type</span>
      </label>
      <label className="input-group">
       <input type="text" name="type" defaultValue={type} placeholder="Car / Motorcycle" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="md:flex mb-8">
     <div className="form-control md:w-1/2">
      <label className="label">
       <span className="label-text">Price</span>
      </label>
      <label className="input-group">
       <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
      </label>
     </div>
     <div className="form-control md:w-1/2 ml-4">
      <label className="label">
       <span className="label-text">Short description</span>
      </label>
      <label className="input-group">
       <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
      </label>
     </div>
    </div>

    <div className="mb-8">
     <div className="form-control w-full">
      <label className="label">
       <span className="label-text">Rating</span>
      </label>
      <label className="input-group">
       <input type="text" name="rating" defaultValue={rating} placeholder="rating / 5" className="input input-bordered w-full" />
      </label>
     </div>
    </div>
    <input type="submit" value="Update Product" className="btn btn-block btn-neutral" />
   </form>
  </div>
 );
};

export default Update;
