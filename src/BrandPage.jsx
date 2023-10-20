import { Link, useLoaderData, useParams } from 'react-router-dom';
import BrandPageDetails from './BrandPageDetails';

const BrandPage = () => {
 const allData = useLoaderData();
 const { brand_name } = useParams();

 const carDetails = allData.filter(data => data.brand.toLowerCase() === brand_name.toLowerCase());

 return (
  <div>
   <div className="carousel w-full">
    <div id="slide1" className="carousel-item relative w-full">
     <img src="https://img.freepik.com/free-vector/gradient-car-dealer-sale-banner_23-2149951351.jpg?w=1380&t=st=1697811822~exp=1697812422~hmac=e8c180ac7f1c9ae7f11e25d872a1abd3e8f6d692e8f1a995da2f5abac7434ac2" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
     <img src="https://img.freepik.com/free-vector/car-rental-service-sale-banner-template_23-2150503858.jpg?w=1380&t=st=1697811819~exp=1697812419~hmac=6ce3f88875ab1350331c36a474ba98a5b676f0dcf6deadac5e42adfa6756e187" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide3" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
     <img src="https://img.freepik.com/free-vector/gradient-car-dealer-facebook-template_23-2149951331.jpg?w=1380&t=st=1697811826~exp=1697812426~hmac=6d49f54485af1e0aca7df27bf52dc360749c53e82fefb813e097ee507c4afe6c" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide4" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
     <img src="https://img.freepik.com/free-vector/car-dealer-business-horizontal-sale-banner-template_23-2149962083.jpg?w=1380&t=st=1697812663~exp=1697813263~hmac=5e200f2e210b4e7c9d3e25de5e5aed5e9e4d0dbabd35cfb063705a1fc7132e63" className="w-full" />
     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">
       ❮
      </a>
      <a href="#slide1" className="btn btn-circle">
       ❯
      </a>
     </div>
    </div>
   </div>
   {/* advertisement end */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {carDetails.length > 0 ? (
     carDetails.map(data => <BrandPageDetails key={data._id} data={data}></BrandPageDetails>)
    ) : (
     <h1 className="text-3xl font-semibold text-center capitalize my-4">
      no product available right now You Can Add Product From This Link
      <span className="text-green-600">
       <Link to="/addProduct" className="underline">
        Add Product
       </Link>
      </span>
     </h1>
    )}
   </div>
  </div>
 );
};

export default BrandPage;
