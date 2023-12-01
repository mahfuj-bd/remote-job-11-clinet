const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
            <img
          src="https://i.ibb.co/kcN5K0n/mega-creator-17-2x.png"
          className="w-full"
        />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold ">Find worlds best remote job!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
