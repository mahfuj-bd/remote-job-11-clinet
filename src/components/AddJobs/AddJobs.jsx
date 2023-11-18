
import Swal from "sweetalert2";

import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddJobs = () => {
    const {user} = useContext(AuthContext)
    const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const jobBanner = form.image_url.value;
    const jobTitle = form.name.value;
    const postedBy = form.username.value;
    const category = form.category.value;
    const salaryRange = form.price.value;
    const short_description = form.short_description.value;
    const postingDate = form.postingDate.value;
    const applicationDeadline = form.applicationDeadline.value;
    const newJob = {
      jobBanner,
      jobTitle,
      category,
      salaryRange,
      short_description,
        postingDate,
      applicationDeadline,
      postedBy,
    };
    console.log(newJob);
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire(
            "Good job!",
            "Product has added in the database!",
            "success"
          );
          form.reset();
        }
      });
  };
    return (
      <div>
        <h1 className="text-center text-3xl font-bold"></h1>
        {/* main */}
        <div className="max-w-screen-2xl mx-auto ">
          <div
            className="hero min-h-screen bg-green-50 rounded-xl"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <div className="flex items-center  gap-20 justify-center flex-col lg:flex-row-reverse md:px-10">
              <div className="text-center lg:text-left ">
                {/* hero sectiton */}
                <div
                  className="hero h-[70vh] rounded-xl"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/KK9zPjS/eric-prouzet-B3-UFXwc-Vbc4-unsplash.jpg)",
                  }}
                >
                  <div className="hero-overlay rounded-xl bg-opacity-40"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="">
                      <h1 className="mb-5 text-5xl text-white font-bold">
                        Need to Add New Exciting Job!!!
                      </h1>
                      <p className="mb-5 text-xl font-semibold tracking-widest">
                        Just fill the form and add the job .You have add the
                        Image_Url and Job title ,the brand name ,the type of the
                        job ,the price of the JobDetails , the rating of the job , and
                                            a short description of the job .Just click the ADD job
                                            
                        button and add the job.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* form section */}
              <div
                className=" flex-shrink-0 w-1/3  "
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="3000"
              >
                <form onSubmit={handleFormSubmit} className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Image URL
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Image url"
                      name="image_url"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Job title
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Job title"
                      name="name"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        User Name
                      </span>
                    </label>
                    <input
                      type="text"  
                      value={user?.displayName}                  
                      name="username"
                      className="input input-bordered input-success w-full "
                      readOnly
                    />
                  </div>
                  <br />
                  <select
                    name="category"
                    className="select select-success w-full "
                  >
                    <option disabled selected>
                      Job Category
                    </option>
                    <option>on-site</option>
                    <option>remote</option>
                    <option>hybrid</option>
                    <option>part-time</option>
                  </select>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Price
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Short description
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Short description"
                      name="short_description"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Posting Date
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder="postingDate"
                      name="postingDate"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-xl font-medium text-black">
                        Deadline
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder="postingDate"
                      name="applicationDeadline"
                      className="input input-bordered input-success w-full "
                      required
                    />
                  </div>
                  <br />

                  <input
                    type="submit"
                    value="ADD JOB"
                    className="btn btn-success w-full text-xl tracking-widest font-bold"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddJobs;
