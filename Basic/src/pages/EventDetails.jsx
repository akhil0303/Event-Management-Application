import { useParams } from "react-router-dom";

import {MdCalendarMonth} from "react-icons/md";
import {IoLocationSharp} from "react-icons/io5"
import "./EventDetails.css";
import Navigation from "../components/Navigation";
import { eventList } from "../utils/EvenDatabase";
const EventDetails = ()=>{
  const {id}=useParams()
  const numId = Number(id)

  const filteredEvent = eventList.find(
    eventDetail=>eventDetail.id===numId)

  return(
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={"https://plus.unsplash.com/premium_photo-1709560426498-7b55e257f365?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default EventDetails;