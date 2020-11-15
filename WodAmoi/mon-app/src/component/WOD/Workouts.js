import React, { useState } from "react";
import SoloWod from "./SoloWod";
import TeamWod from "./TeamWod";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'

const Workouts = (props) => {
    const [key, setKey] = useState('home');

    return (
        <>
            <Tabs className="wodTab text-center"
                style={{display: "block ruby"}}
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Solo">
                    <SoloWod />
                </Tab>
                <Tab eventKey="profile" title="Team">
                    <TeamWod />
                </Tab>
            </Tabs>
        </>
    );
};

export default Workouts;





