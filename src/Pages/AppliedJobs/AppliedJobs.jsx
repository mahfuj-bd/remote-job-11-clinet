import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Appliedjobs = () => {
    const loadedappliedJobs = useLoaderData()
    
    const [appliedJobs, setSearchCard] = useState(loadedappliedJobs);
    console.log(appliedJobs);

    const handleSerachInput = () => {
     
      const serchValue = document
        .getElementById("categoryName")
        .value.toLowerCase();
    
      const allCategorydata = appliedJobs.filter((job) =>
        job?.jobDetail?.category.toLowerCase().includes(serchValue)
      );
      console.log(serchValue, allCategorydata);

      

      if (allCategorydata.length > 0) {
        setSearchCard(allCategorydata);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `No category found. Showing All categories!`,
        });
          setSearchCard(loadedappliedJobs);
          document.getElementById("categoryName").value = 'All Jobs';
      }
      
    };
    return (
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-center text-6xl font-bold pb-20">
          {" "}
          The Jobs You have applied
        </h1>
        {/* filter section  */}
        <select
          className="select select-primary w-full max-w-xs"
          id='categoryName'
          onChange={handleSerachInput}
        >
          <option disabled selected>
            All Jobs
          </option>
          <option>On-Site</option>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Part Time</option>
        </select>

        {/* cards section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {appliedJobs.map((appliedJob) => (
            <div
              key={appliedJob._id}
              className="card w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">
                  {appliedJob?.jobDetail?.jobBanner}
                </h2>
                <h2 className="card-title">
                  {appliedJob?.jobDetail?.jobTitle}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Job category{appliedJob?.jobDetail?.category}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Number of applicant :
                  {appliedJob?.jobDetail?.applicationsNumber}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Job Posted By : {appliedJob?.jobDetail?.postedBy}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Salary Range : {appliedJob?.jobDetail?.salaryRange}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Job posted date{appliedJob?.jobDetail?.postingDate}
                </h2>
                <h2 className="card-title">
                  {" "}
                  Application DeadLine :
                  {appliedJob?.jobDetail?.applicationDeadline}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Appliedjobs;