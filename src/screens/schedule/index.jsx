import React, { useState, useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import stars from '../../assets/getIdea/stars.svg';
import { scheduleService } from '../../../services/scheduleService';
import { Modal, Button, message } from 'antd';  // Import Ant Design Modal and Button

function Calendar() {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);  // Modal visibility state
  const [selectedEvent, setSelectedEvent] = useState(null);  // Store selected event

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await scheduleService.getScheduledPosts();
        const fetchedEvents = response?.data?.scheduledPosts?.map(event => ({
          title: event?.content,  // Title of the event
          start: moment.utc(event?.scheduleTime).local().toISOString(),  // Start date of the event
          id: event?._id,  // Store the event ID
          extendedProps: {  
            content: event?.content,
            platform: event?.platforms,
            _id: event?._id  // Store the _id in extendedProps
          }
        }));

        setEvents(fetchedEvents);  // Set the fetched events into state
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Function to show the modal when an event is clicked
  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event.extendedProps);  // Set selected event details
    setIsModalVisible(true);  // Show the modal
  };

  // Function to close the modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedEvent(null);  // Clear selected event
  };

  // Function to handle the delete action
  const handleDelete = async () => {
    try {
      const response = await scheduleService.deleteSchedulePost(selectedEvent._id);  // Replace with actual delete API
      if (response.status === 200) {
        // Remove the deleted event from the calendar
        setEvents(events.filter(event => event.id !== selectedEvent._id));
        message.success('Event deleted successfully');  // Show success message
        setIsModalVisible(false);  // Close the modal
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      message.error('Failed to delete event');  // Show error message
    }
  };

  return (
    <div style={{ zIndex: -1 }}>
      <div className='heading'>
        <h3>Scheduled Posts</h3>
        <img src={stars} className='str'/>
      </div>
      <div style={{ width: '70vw', margin: '0 auto' }}>
        <Fullcalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={events}  // Pass the fetched events here
          height={"70vh"}
          slotDuration="00:15:00"
          timeZone="UTC"
          displayEventTime={false}
          eventBackgroundColor="#378006"
          eventClick={handleEventClick}  // Handle event click
        />
      </div>

      {/* Ant Design Modal for showing event details */}
      <Modal 
        title="Event Details" 
        visible={isModalVisible} 
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button 
            key="delete" 
            type="primary" 
            danger 
            onClick={handleDelete}  // Handle delete action
          >
            Delete
          </Button>,
        ]}
      >
        {selectedEvent && (
          <div>
            <p><strong>Content:</strong> {selectedEvent.content}</p>
            <p><strong>Platform:</strong> {selectedEvent.platform}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Calendar;
