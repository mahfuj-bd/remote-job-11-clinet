import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const JobDetails = () => {
    const jobDetail = useLoaderData();
    const {user} = useContext(AuthContext);

    console.log(jobDetail);
    const handleFormSubmit = (e) =>{
        e.preventDefualt()


    }
    return (
        <div>
            <div key={jobDetail._id}>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{jobDetail.jobTitle}</h2>
                      <p>{jobDetail.postingDate}</p>
                      <div className="card-actions justify-end">
                      <button
                    className="btn tracking-widest btn-success font-semibold"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    Apply Now
                  </button>
                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                      <div>
                        <form onSubmit={handleFormSubmit} className="">                         
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Name
                              </span>
                            </label>
                            <input
                              type="text"                            
                              defaultValue={user.displayName
                              }
                              name="name"
                              className="input input-bordered input-info w-full cursor-none"
                              readOnly
                            />
                          </div>
                          <br />

                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Email
                              </span>
                            </label>
                            <input
                              type="email"                       
                              defaultValue={user?.email}
                              name="email"
                              className="input input-bordered input-info w-full cursor-none"
                              readOnly
                            />
                          </div>
                          <br />
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text text-xl font-medium text-black">
                                Resume Link
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Resume Link"                           
                              name="resumeLink"
                              className="input input-bordered input-info w-full cursor-none"
                            />
                          </div>
                          <br />                                                         
                          <input
                            type="submit"
                            value="SUBMIT"
                            className="btn btn-success border-2 border-blue-600 text-blue-700 bg-blue-400 w-full text-xl tracking-widest font-bold"
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
                  </dialog>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default JobDetails;