const Home = () => {
 return (
  <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/hXFzgr4/banner.jpg)' }}>
   <div className="hero-overlay bg-opacity-60"></div>
   <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
     <h1 className="mb-5 text-5xl font-bold">Welcome to AutoMotive</h1>

     <button className="btn btn-primary">Get Started</button>
    </div>
   </div>
  </div>
 );
};

export default Home;
