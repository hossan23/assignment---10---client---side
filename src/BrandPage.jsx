import { Link, useLoaderData, useParams } from 'react-router-dom';
import BrandPageDetails from './BrandPageDetails';

const BrandPage = () => {
 const allData = useLoaderData();
 const { brand_name } = useParams();

 const carDetails = allData.filter(data => data.brand.toLowerCase() === brand_name.toLowerCase());

 return (
  <div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {carDetails.length > 0 ? (
     carDetails.map(data => <BrandPageDetails key={data._id} data={data}></BrandPageDetails>)
    ) : (
     <h1 className="text-3xl font-semibold text-center">
      You Can Add Product From This Link
      <Link to="/addProduct" className="underline">
       Add Product
      </Link>
     </h1>
    )}
   </div>
  </div>
 );
};

export default BrandPage;
