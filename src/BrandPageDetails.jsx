import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const BrandPageDetails = ({ data }) => {
 const { image, name, brand, price, type, rating, _id } = data;
 return (
  <div className="card  bg-base-100 shadow-xl">
   <figure className="h-64">
    <img src={image} alt="Shoes" />
   </figure>
   <div className="card-body">
    <p className="card-title">Model : {name}</p>
    <h2 className="">Brand : {brand}</h2>
    <p className="">Price : {price}</p>
    <p className="">Type : {type}</p>
    <p className="">Ratings : {rating}</p>

    <div className="card-actions justify-end">
     <Link to={`/detailsPage/${_id}`}>
      <button className="btn btn-neutral">Details</button>
     </Link>
     <Link to={`/update/${_id}`}>
      <button className="btn btn-accent">Update</button>
     </Link>
    </div>
   </div>
  </div>
 );
};

export default BrandPageDetails;
