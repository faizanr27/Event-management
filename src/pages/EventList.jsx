import React from "react";
import '../Style/eventlist.css'
const EventList = ({list}) => {
    
    return (
<div className="event-list">
    <div className="box-two">
        <ul>
                    {list.map((e, index) => (
                        <li key={index} className="event-item">
                            <h3>{e.topic}</h3>
                            <p>Date: {e.date}</p>
                            <p>Time: {e.time}</p>
                            <p>Description: {e.description}</p>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
    );
};

export default EventList;