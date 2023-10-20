import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const HomeCard = ({ data }) => {
 const { brand_name, brand_image } = data;

 return (
  <div>
   <Link to={`/brandPage/${brand_name}`}>
    <div className="card  bg-base-100 shadow-xl">
     <figure className="px-10 pt-10">
      <img src={brand_image} alt="Shoes" className="rounded-xl" />
     </figure>
     <div className="card-body items-center text-center">
      <h2 className="card-title">{brand_name}</h2>
     </div>
    </div>
   </Link>
  </div>
 );
};

export default HomeCard;
