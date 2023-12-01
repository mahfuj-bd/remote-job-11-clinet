import { Link, useLoaderData } from "react-router-dom";

const AllJObs = () => {
    const allJobs = useLoaderData();
  console.log(allJobs);
    return (
        <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table bg-green-100 text-main-blue-50">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox text-main-blue-50"
                      />
                    </label>
                  </th>
                  <th className="text-main-blue-50">Name who posted the job</th>
                  <th className="text-main-blue-50">Job Title</th>
                  <th className="text-main-blue-50">Job Posting Date</th>
                  <th className="text-main-blue-50">Application Deadline</th>
                  <th className="text-main-blue-50">Salary range</th>
                  <th className="text-main-blue-50">Details Button</th>                
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {allJobs.map((job) => (
                  <tr key={job?._id}>
                    
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={job?.jobBanner
                              }
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                              
                        <div>
                          <div className="font-bold text-main-blue-50">
                            
                          </div>
                          <div className="text-sm opacity-70">
                           
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{job?.postedBy}</td>
                    <td>{job?.jobTitle}</td>
                    <td>{job?.postingDate}</td>
                    <td>{job?.applicationDeadline}</td>
                    <td>{job?.salaryRange}</td>
                    <td><button className="btn"><Link to={`/jobdetails/${job._id}`}>Details</Link></button></td>                                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
         
        </div>
      </div>

    );
};

export default AllJObs;