/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const Cart = () => {
 const loader = useLoaderData();
 const { name, price, _id, image } = loader;

 const [updateData, setUpdateData] = useState(loader);
 const handleDelete = _id => {
  console.log(_id);

  fetch(`https://assignment-10-server-side-lczfi2od6-imamhossans-projects.vercel.app/myCart/${_id}`, {
   method: 'DELETE',
  })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    const filterData = updateData.filter(item => item._id !== _id);
    setUpdateData(filterData);
    if (data.deletedCount > 0) {
     swal('Deleted!', 'Product Deleted from Cart!', 'success');
    }
   });
 };
 console.log(updateData);

 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
   {updateData.length > 0 ? (
    updateData.map(data => (
     <div key={data._id}>
      <div className="card h-60 bg-base-100 shadow-xl image-full">
       <figure>
        <img src={data.image} alt="Shoes" />
       </figure>
       <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <h2 className="card-title">{data.price}</h2>
        <div className="card-actions justify-end">
         <button onClick={() => handleDelete(data._id)} className="btn btn-primary">
          Delete
         </button>
        </div>
       </div>
      </div>
     </div>
    ))
   ) : (
    <h1 className="text-3xl font-semibold text-center">Please Add Product to see Cart Items</h1>
   )}
  </div>
 );
};

export default Cart;
