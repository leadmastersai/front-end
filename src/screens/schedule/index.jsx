import React, { useState, useEffect } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment";
import stars from '../../assets/getIdea/stars.svg';
import { scheduleService } from '../../../services/scheduleService';
import { Modal, Button, message } from 'antd';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin ,faFacebook,faThreads,faInstagram} from '@fortawesome/free-brands-svg-icons';
import './styles.scss';
function Calendar() {
  const [events, setEvents] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [selectedEvent, setSelectedEvent] = useState(null);  

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await scheduleService.getScheduledPosts();
        const fetchedEvents = response?.data?.scheduledPosts
        ?.filter(event => event?.isPosted === false)  // Filter out events where isPosted is true
        .map(event => ({
          title: event?.content,  // Keep title as a string
          start: moment.utc(event?.scheduleTime).local().toISOString(),  
          id: event?._id,  
          extendedProps: {  
            content: event?.content,
            platform: event?.platforms,
            _id: event?._id,
             imgUrl:event?.imgLink
          }
        }));

        setEvents(fetchedEvents);  
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event.extendedProps);  
    setIsModalVisible(true);  
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedEvent(null);  
  };

  const handleDelete = async () => {
    try {
      const response = await scheduleService.deleteSchedulePost(selectedEvent._id);  
      if (response.status === 200) {
        setEvents(events.filter(event => event.id !== selectedEvent._id));
        message.success('Event deleted successfully');  
        setIsModalVisible(false);  
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      message.error('Failed to delete event');  
    }
  };

  // Custom event rendering function
  const renderEventContent = (eventInfo) => {
    let platformIcon = null;
    const { platform, content } = eventInfo.event.extendedProps;
  
    if (platform.includes('Twitter')) {
      platformIcon = <FontAwesomeIcon icon={faTwitter} color="black" style={{ marginRight: '5px' }} />;
    } else if (platform.includes('LinkedIn')) {
      platformIcon = <FontAwesomeIcon icon={faLinkedin} color="blue" style={{ marginRight: '5px' }} />;
    }else if (platform.includes('Facebook')) {
      platformIcon = <FontAwesomeIcon icon={faFacebook} color="blue" style={{ marginRight: '5px' }} />;
    } else if (platform.includes('Instagram')) {
      platformIcon = <FontAwesomeIcon icon={faInstagram} color="pink" style={{ marginRight: '5px' }} />;
    }else if (platform.includes('Threads')) {
      platformIcon = <FontAwesomeIcon icon={faThreads} color="black" style={{ marginRight: '5px' }} />;
    }
  
    return (
      <div style={{ display: 'flex', alignItems: 'center',backgroundColor:'purple' }} className="iri-s">
        {platformIcon} <span>{content}</span>
      </div>
    );
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
          events={events}  
          height={"70vh"}
          slotDuration="00:15:00"
          timeZone="UTC"
          displayEventTime={false}
          eventBackgroundColor="#378006"
          eventClick={handleEventClick}  
          eventContent={renderEventContent}  // Custom event rendering
        />
      </div>

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
            onClick={handleDelete}  
          >
            Delete
          </Button>,
        ]}
      >
        {selectedEvent && (
          <div>
            <p><strong>Content:</strong> {selectedEvent.content}</p>
            <p><strong>Platform:</strong> {selectedEvent.platform}</p>
            {(selectedEvent.platform.includes('Facebook') || selectedEvent.platform.includes('Instagram')) && (
        <img 
          src={selectedEvent.imgUrl} 
          alt="Uploaded in Parent"
          style={{ width: "150px", height: "150px", objectFit: "contain" }} 
        />
      )}
          </div>

        )}
      </Modal>
    </div>
  );
}

export default Calendar;
