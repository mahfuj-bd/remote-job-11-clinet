import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import About from "./About/About";

const Home = () => {
  const allJobs = useLoaderData();
  console.log(allJobs);
  const onSiteJobs = allJobs.filter((jobs) => jobs.category === "on-site");
  const remoteJobs = allJobs.filter((jobs) => jobs.category === "remote");
  const hybridJobs = allJobs.filter((jobs) => jobs.category === "hybrid");
  const partTimeJobs = allJobs.filter((jobs) => jobs.category === "part-time");
  console.log(onSiteJobs, remoteJobs, hybridJobs, partTimeJobs);
  return (
    <div>
      <Banner></Banner>
      <div>
        <Tabs>
          <TabList>
          <Tab>All Category Jobs</Tab>
            <Tab>On Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part Time</Tab>
          </TabList>

          <TabPanel>
            <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid-col-1 ">
              {allJobs.map((alljob) => (
                <div key={alljob._id}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <figure><img src={alljob.jobBanner} alt="Shoes" /></figure>
                      <h2 className="card-title">{alljob.jobTitle}</h2>
                      <p>{alljob.postingDate}</p>
                      <p>{alljob.postedBy}</p>
                      <p>{alljob.applicationDeadline}</p>
                      <p>{alljob.salaryRange}</p>
                      <p>{alljob.applicationsNumber}</p>
                      <p>{alljob.applicationsNumber}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/jobdetails/${alljob._id}`}>view Details</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="container mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid-col-1 ">
              {onSiteJobs.map((onSiteJob) => (
                <div key={onSiteJob._id}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <figure><img src={onSiteJob.jobBanner} alt="Shoes" /></figure>
                      <h2 className="card-title">{onSiteJob.jobTitle}</h2>
                      <p>Posting Date: {onSiteJob.postingDate}</p>
                      <p>{onSiteJob.postedBy}</p>
                      <p>{onSiteJob.applicationDeadline}</p>
                      <p>{onSiteJob.salaryRange}</p>
                      <p>{onSiteJob.applicationsNumber}</p>
                      <p>{onSiteJob.applicationsNumber}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/jobdetails/${onSiteJob._id}`}>view Details</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </TabPanel>
          <TabPanel>
          <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid-col-1">
              { remoteJobs.map(( remoteJob) => (
                <div key={remoteJob._id}>
                  <div className="card bg-base-100 shadow-xl">
                  <figure><img src={remoteJob.jobBanner} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{remoteJob.jobTitle}</h2>
                      <p>{remoteJob.postingDate}</p>
                      <p>{remoteJob.postedBy}</p>
                      <p>{remoteJob.applicationDeadline}</p>
                      <p>{remoteJob.salaryRange}</p>
                      <p>{remoteJob.applicationsNumber}</p>
                      <p>{remoteJob.applicationsNumber}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/jobdetails/${remoteJob._id}`}>view Details</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
          </TabPanel>
          <TabPanel>
          <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid-col-1">
              { hybridJobs.map(( hybridJob) => (
                <div key={hybridJob._id}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <figure><img src={hybridJob.jobBanner} alt="Shoes" /></figure>
                      <h2 className="card-title">{hybridJob.jobTitle}</h2>
                      <p>{hybridJob.postingDate}</p>
                      <p>{hybridJob.postedBy}</p>
                      <p>{hybridJob.applicationDeadline}</p>
                      <p>{hybridJob.salaryRange}</p>
                      <p>{hybridJob.applicationsNumber}</p>
                      <p>{hybridJob.applicationsNumber}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/jobdetails/${hybridJob._id}`}>view Details</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
          </TabPanel>
          <TabPanel>
          <div  className="container mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-10 grid-col-1">
              { partTimeJobs.map(( partTimeJob) => (
                <div key={partTimeJob._id}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                    <figure><img src={partTimeJob.jobBanner} alt="Shoes" /></figure>
                      <h2 className="card-title">{partTimeJob.jobTitle}</h2>
                      <p>{partTimeJob.postingDate}</p>
                      <p>{partTimeJob.postedBy}</p>
                      <p>{partTimeJob.applicationDeadline}</p>
                      <p>{partTimeJob.salaryRange}</p>
                      <p>{partTimeJob.applicationsNumber}</p>
                      <p>{partTimeJob.applicationsNumber}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/jobdetails/${partTimeJob._id}`}>view Details</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </div>
          </TabPanel>
        </Tabs>
      </div>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
