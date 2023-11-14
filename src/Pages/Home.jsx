import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
            <div className="grid grid-cols-2 gap-10">
              {allJobs.map((alljob) => (
                <div key={alljob._id}>
                  <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{alljob.jobTitle}</h2>
                      <p>{alljob.postingDate}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">view Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {onSiteJobs.map((onSiteJob) => (
                <div key={onSiteJob._id}>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{onSiteJob.jobTitle}</h2>
                      <p>{onSiteJob.postingDate}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">view Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
          <div>
              { remoteJobs.map(( remoteJob) => (
                <div key={remoteJob._id}>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{remoteJob.jobTitle}</h2>
                      <p>{remoteJob.postingDate}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">view Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </TabPanel>
          <TabPanel>
          <div>
              { hybridJobs.map(( hybridJob) => (
                <div key={hybridJob._id}>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{hybridJob.jobTitle}</h2>
                      <p>{hybridJob.postingDate}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">view Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </TabPanel>
          <TabPanel>
          <div>
              { partTimeJobs.map(( partTimeJob) => (
                <div key={partTimeJob._id}>
                  <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{partTimeJob.jobTitle}</h2>
                      <p>{partTimeJob.postingDate}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">view Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          </TabPanel>
        </Tabs>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Home;
