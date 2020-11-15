import React, { useState } from "react";
import PrJo from "./Pr.jo";
import PrRomeo from "./Pr.romeo";
import ChartPr from "./Chart";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

  

const PrTabs = (props) => {
    const [key, setKey] = useState('home');

    return ( 
        <Tabs className="prTab text-center"
            style={{display: "block ruby"}}
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="home" title="Romeo">
                <PrRomeo />
            </Tab>
            <Tab eventKey="profile" title="Jo">
                <PrJo />
            </Tab>
            <Tab eventKey="chart" title="Graphique">
                <ChartPr />
            </Tab>
        </Tabs>
    );
};

export default PrTabs;





