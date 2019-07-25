import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

const CoLocatedTabs = ({ children }) => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabsChange = index => {
        setTabIndex(index)
      }
  
    return (
      <Tabs
      index={tabIndex}
          onChange={handleTabsChange}
      >
        <TabList>
          {React.Children.map(children, (child) => (
            <Tab>{child.props.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {React.Children.map(children, (child) => (
            <TabPanel>{child.props.children}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    )
  }
  
  // just a placeholder since it's not actually rendered,
  // its props are used as data
  const ColocatedTab = () => null

export default CoLocatedTabs;