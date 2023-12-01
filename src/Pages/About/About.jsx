
const About = () => {
    return (
        <div className="container mx-auto">
            <div>
          <h3 className="text-3xl font-bold text-center py-20">About Us</h3>
        </div>
            <div className="lg:flex flex-wrap">
            <div className="flex-1">
                <img className="" src="https://i.ibb.co/HTMGWTg/about.jpg" alt="" />
            </div>
            <div className="flex-1">
                <p className="my-10">Explore New Life</p>
                <h1 className="my-5 text-3xl">We Are A Team Of Experts In This Field</h1>
                <p className="leading-8">A remote job refers to a position in which an individual can work from a location other than the traditional office environment. Remote work has become increasingly popular due to technological advancements that allow for effective communication and collaboration over the internet. Here are some key aspects of remote jobs.</p>
                <button className="btn btn-primary my-10">Getstarted</button>
            </div>
            </div>
        </div>
    );
};

export default About;