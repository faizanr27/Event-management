import React from "react";
import '../Style/button.css'
import { FaCalendarDay } from "react-icons/fa";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

const CreateEvent = ({handleDisplayButton, list}) => {
    return (
<div className="btn">
    <div className="top">
<FaCalendarDay />
    <h3>Events |</h3>
    <button onClick={handleDisplayButton}>Create Event</button>
    </div>
    <div className="text">
                {list.length > 0 ? (
                    <div className="text-one">
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
                    // <EventList list={list} />
                ) : (
                    <div className="text-two">
                    <p>There are no upcoming events
                        <br />
                        Click the button above to create a new event
                    </p>
                    </div>
                )}
            </div>
</div>
    );
};

export default CreateEvent;