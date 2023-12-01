import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const allJobs = useLoaderData();
    
    const allMyJobs = allJobs.filter((job) => job.postedBy === user?.displayName);

    const [myJobs, setMyJobs] = useState(allMyJobs);
    console.log(myJobs);
    

    const handleDelete = _id => {
        console.log("mama will be deleted " , _id);
         Swal.fire({
           title: "Are you sure?",
           text: "Remove from the cart !!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!",
         }).then((result) => {
           if (result.isConfirmed) {
             fetch(
               `http://localhost:5000/jobs/${_id}`,
               {
                 method: "DELETE",
               }
             )
               .then((response) => response.json())
               .then((data) => {
                 console.log(data);
                 if (data.deletedCount > 0) {
                   Swal.fire(
                     "Good job!",
                     "Product has deleted from  the database!",
                     "success"
                   );
                      const remaining = myJobs.filter(
                        (item) => item._id !== _id
                      );
                      setMyJobs(remaining);
                 }
               });
           }
         });
  }

  return (
    <div className="mx-auto max-w-screen-2xl ">
      {myJobs.map((job) => (
        <div key={job._id} className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={job.jobBanner} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{job.jobTitle}</h2>
            <p>{job.short_description}</p>
            <p>{job.postedBy}</p>
            <p>{job.category}</p>
            <p>{job.salaryRange}</p>
            <p>{job.postingDate}</p>
            <p>{job.applicationDeadline}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500 border-none text-white">
                          <Link to={ `/updateJob/${job._id}`}>Update</Link>
              </button>
              <button
                onClick={() => handleDelete(job._id)}
                className="btn btn-primary bg-red-500 border-none text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyJobs;
