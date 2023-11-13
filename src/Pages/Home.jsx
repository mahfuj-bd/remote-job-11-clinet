import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div>
        <Tabs>
          <TabList>
            <Tab>-On Site Job</Tab>
            <Tab>-Remote Job</Tab>
            <Tab>-Hybrid</Tab>
            <Tab>-Part Time</Tab>
          </TabList>

          <TabPanel>
            <div>
            <h2>Any content 1</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </Tabs>
      </div>
      <Contact></Contact>
    </div>
    
  );
  
};

export default Home;
