import { useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard';

const Home = () => {
 const allData = useLoaderData();
 const[]

 return (
  <div>
   <div className="hero">
    <img src="https://img.freepik.com/free-vector/car-rental-service-sale-banner-template_23-2150461697.jpg?w=1380&t=st=1697812138~exp=1697812738~hmac=b3dd184edf39033bdc50d1c01275b5d688c8be00010fecade6cc155e7c66aefe" className="w-full" />
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mt-8">
    {allData.map(data => (
     <HomeCard key={data.id} data={data}></HomeCard>
    ))}
   </div>
   <div className="mt-2 md:mt-10">
    {/* extra section -1 */}
    <h1 className="text-2xl text-center mb-4 font-semibold">Live free with </h1>
    <div className="flex flex-col w-full lg:flex-row ">
     <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center shadow-xl">
      <img src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     </div>
     <div className="divider lg:divider-horizontal">OR</div>
     <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center shadow-xl">
      <img src="https://images.pexels.com/photos/2948295/pexels-photo-2948295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     </div>
    </div>
   </div>
   <div className="mt-2 md:mt-10">
    {/* extra section -2 */}
    <h1 className="text-2xl text-center mb-4 font-semibold">Gallery </h1>
    <div className="carousel w-full">
     <div id="slide1" className="carousel-item relative w-full">
      <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
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
      <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
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
      <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
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
      <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full" />
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
   </div>
  </div>
 );
};

export default Home;
