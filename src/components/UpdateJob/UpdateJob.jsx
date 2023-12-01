import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const UpdateJob = () => {
  const job = useLoaderData()
    const { user} = useContext(AuthContext)

     const handleUpdateBtn = event => {
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
       const updatedJob = {
         jobBanner,
         jobTitle,
         category,
         salaryRange,
         short_description,
         postingDate,
         applicationDeadline,
         postedBy,
       };
       console.log(updatedJob);
       fetch(`https://remote-job-11-server.vercel.app/jobs/${job._id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(updatedJob),
       })
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           if (data.modifiedCount > 0) {
             Swal.fire(
               "Good job!",
               "Job has Updated in the database!",
               "success"
             );
           }
         });
     };
    return (
      <div className="modal-box w-11/12 max-w-5xl">
        <div>
          <form onSubmit={handleUpdateBtn} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium text-black">
                  Image URL
                </span>
              </label>
              <input
                type="text"
                name="image_url"
                className="input input-bordered input-success w-full "
                defaultValue={job.jobBanner}
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
                defaultValue={job.jobTitle}
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
            <select name="category" className="select select-success w-full ">
              <option disabled selected>
                {job.category}
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
                defaultValue={job.salaryRange}
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
                defaultValue={job.short_description}
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
                defaultValue={job.postingDate}
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
                defaultValue={job.applicationDeadline}
                name="applicationDeadline"
                className="input input-bordered input-success w-full "
                required
              />
            </div>
            <br />

            <input
              type="submit"
              value="Update JOB"
              className="uppercase btn btn-success w-full text-xl tracking-widest font-bold"
            />
          </form>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn  btn-success border-2 border-blue-600 text-blue-700 bg-blue-400">
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
};

export default UpdateJob;
