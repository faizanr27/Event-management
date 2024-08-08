import React, { useState,useEffect } from "react";
import '../Style/eventform.css'
import { Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EventForm = ({addEvent, handleDisplayForm, selecteditem, handleUpdateList}) => {
    const [id, setId] = useState("");
    const [topic, setTopic] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (selecteditem) {
            setId(selecteditem.id);
            setTopic(selecteditem.topic);
            setDate(selecteditem.date);
            setTime(selecteditem.time);
            setDescription(selecteditem.description);
        } else {
            setId("");
            setTopic("");
            setDate("");
            setTime("");
            setDescription("");
        }
    }, [selecteditem]);

    const handleSubmit = (e) => {

        if(id){
            const updatedItem = {id, topic, date, time, description };
            handleUpdateList(updatedItem);
        }
        else{
            const newEvent = { id:uuidv4(), topic, date, time, description };
            addEvent(newEvent);
        }
        
        setId("");
        setTopic("");
        setDate("");
        setTime("");
        setDescription("");

        handleDisplayForm();
        
    }

    return(
        <div >
           
            <span>What's your event about?</span>
            <Form onSubmit={() =>{handleSubmit(); }} className="fr">
            <div className="box">
                <div className="inputs">
                    <label>Event Topic</label>
                    <input 
                    type="text" 
                    placeholder="What's your event?"
                    value={topic}
                    onChange={(e) => {
                        setTopic(e.target.value);
                    }}
                    />
                    <div className="dd">
                    <label>Start Date</label>
                    <input type="date"
                     value={date}
                     onChange={(e) => {
                         setDate(e.target.value);
                     }}
                    />
                    <label>Start Time</label>
                    <input type="time"
                     value={time}
                     onChange={(e) => {
                         setTime(e.target.value);
                     }}
                    />
                    </div>
                    <div className="des">
                    <label>Description</label>
                    <textarea
                     value={description}
                     onChange={(e) => {
                         setDescription(e.target.value);
                     }}
                    />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </div>

            </Form>
            
        </div>
    );
};
export default EventForm;