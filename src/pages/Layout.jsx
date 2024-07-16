import React, { useState } from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import CreateEvent from "./createEvent";
import '../Style/Layout.css';

const Layout = () => {
    const [list, setList] = useState([]);
    const [displayform, setDisplayForm] = useState(false);
    // const [displaylist, setDisplayList] = useState(false);
    const [displaybutton, setDisplayButton] = useState(true);

    const handleDisplayButton = () => {
        setDisplayButton(false);
        setDisplayForm(true);
    }

    const handleDisplayForm = () => {
        setDisplayButton(true);
        setDisplayForm(false);
        // setDisplayList(true);
    }
    
    const addEvent = (newEvent) => {
        setList([...list, newEvent]);
    }
    return(
        <div className="container-one">
            <div className="box-one">
            {!displayform && <CreateEvent handleDisplayButton={handleDisplayButton} list={list} />}
            {!displaybutton && <EventForm addEvent={addEvent} handleDisplayForm={handleDisplayForm}/>}
            {/* {!displayform && <EventList list={list} />} */}
            </div>
        </div>
    );
}

export default Layout;