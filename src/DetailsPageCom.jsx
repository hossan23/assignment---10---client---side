/* eslint-disable react/prop-types */
import swal from 'sweetalert';

const DetailsPageCom = ({ detail }) => {
 const { description, image, name, price } = detail;

 const item = { name, price, image };
 const handleClick = e => {
  e.preventDefault();

  fetch('https://assignment-10-server-side-jade.vercel.app/myCart', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(item),
  })
   .then(res => res.json())
   .then(data => {
    if (data.insertedId) {
     swal('Good job!', 'Product Added to cart successfully!', 'success');
    }
   });
 };
 return (
  <div>
   <div className="card card-side bg-base-100 shadow-xl">
    <figure>
     <img src={image} alt="Movie" />
    </figure>
    <div className="card-body">
     <h2 className="card-title">{description}</h2>

     <div className="card-actions justify-end">
      <button onClick={handleClick} className="btn btn-primary">
       Add to Cart
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DetailsPageCom;
