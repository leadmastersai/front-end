import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import down from '../../assets/getIdea/down.png';
import like from '../../assets/getIdea/like.svg';
import dislike from '../../assets/getIdea/dislike.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import write from '../../assets/getIdea/remove.svg';
import { useEffect, useState } from 'react';
import { postService } from '../../../services/postServices';
import { Alert, Button, Modal, Radio, Spin } from "antd";
import { useSelector } from 'react-redux';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';
import { useNavigate} from 'react-router-dom';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker} from '@mui/x-date-pickers';
import { scheduleService } from '../../../services/scheduleService';
dayjs.extend(utc);
dayjs.extend(timezone);

const Drafts = () => {
  const [loading2,setLoading2]=useState(false);
  const [success3,setSuccess3]=useState(false);
  const [success1,setSuccess1]=useState(false);
  
  const [error1, setError1] = useState(false);
  const navigate=useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const [success, setSuccess] = useState(false); // state for showing success message
  const [error, setError] = useState(false);
  const {userBasics}  = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isModalSVisible, setIsModalSVisible] = useState(false);
const [dateValue, setDateValue] = useState(dayjs());
const [timeValue, setTimeValue] = useState(dayjs());
const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
const [selectedCard, setSelectedCard] = useState(null); 

const handleCardClick = (item) => {
  setSelectedCard(item); // Set the selected card data
  setIsModalSVisible(true); // Show the schedule modal
};


const handleCancel = () => {
  setIsModalSVisible(false);
};

const handleTimeSlotChange = (e) => {
  setSelectedTimeSlot(e.target.value);
};

const handleSchedule = async () => {
  setLoading2(true);
  // const hashtagsString = selectedCard?.hashtags?.length
  //   ? selectedCard?.hashtags?.map(hashtag => `#${hashtag}`).join(' ')
  //   : '';

  const text = selectedCard?.content; 
  const localDate = dateValue.format('YYYY-MM-DD');
  const localTime = selectedTimeSlot; 
  const localDatetime = `${localDate}T${localTime}`; 

  const payload = {
    platforms: selectedPlatform,
    content: text,
    scheduleTime: localDatetime
  };

  try {
    const response = await scheduleService.schedulePost(payload);
    console.log('Scheduling response:', response.data);
    setLoading2(false)
    handleCancel(); // Ensure that the modal is hidden and success message is shown
    setSuccess3(true);
     
    setTimeout(() => {
      setSuccess3(false);
   // Hide the modal
    }, 3000);
  } catch (error) {
    console.log('Scheduling error:', error);
  } finally {
    setLoading2(false);
  }
};
  console.log(userBasics,"###################################");
  
  const getDrafts = async () => {
    setLoading(true);
    const platform=selectedPlatform.toLocaleLowerCase();
    try {
      const response = await postService.facebookDraft(platform);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  };

  const showLoginModal = (platform) => {
    setModalMessage(`Login with ${platform} to post.`);
    setIsModalVisible(true);
  };

  useEffect(() => {

    getDrafts();
  }, [selectedPlatform]);

  const handleModalOk = () => {
    setIsModalVisible(false);
   navigate("/integrations") // Redirect to the integration screen if needed
  };


  const handleLinkedin = async (item) => {
    if (!userBasics.isLinkedInConnected) {
      showLoginModal('LinkedIn');
      return;
    }
    setLoading(true); // Show spinner when starting to publish
    // const hashtagsString = item?.hashtags?.length
    // ? item.hashtags.map(hashtag => `#${hashtag}`).join(' ')
    // : '';
  
  // Combine content and hashtags
  const text = item?.content // Trim to remove any extra spaces
  
  const payload = {
    text
  };
    try {
      const response = await postService.publishLinkedin(payload);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        setSuccess1(true);
        setTimeout(() => setSuccess1(false), 3000);
        setError1(false);
        setLoading(false);
      }
    } catch (error) {
      setError1(true)
      setSuccess1(false)
      setTimeout(()=>setError1(false),3000);
      console.log(error, "error");
    } finally {
      setLoading(false); // Hide spinner after operation is complete
    }
  };
  
  const handleTwitter = async (item) => {
    if (!userBasics.isTwitterLogin) {
      showLoginModal('Twitter');
      return;
    }
    setLoading(true); // Show spinner when starting to publish
    // const hashtagsString = item?.hashtags?.length
    // ? item.hashtags.map(hashtag => `#${hashtag}`).join(' ')
    // : '';
  
  // Combine content and hashtags
  const text = item?.content // Trim to remove any extra spaces
  
  const payload = {
    text
  };
    try {
      const response = await postService.twitterPost(payload);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        setSuccess1(true);
        setTimeout(() => setSuccess1(false), 3000);
        setError1(false);
        setLoading(false);
      }
    } catch (error) {
      console.log(error, "error");
      setError1(true)
      setSuccess1(false)
      setTimeout(()=>setError1(false),3000);
    } finally {
      setLoading(false); // Hide spinner after operation is complete
    }
  };

  const handledelete = async (item) => {
    try {
 
      const id = item?._id;
      const response = await postService.draftDelete(id);
      console.log(response.data, "deleted successfully");
  
      if (response.status === 200 || response.status === 201) {
        getDrafts();
      }
      setSuccess(true);
      setError(false);
      
      setLoading(false)
      setTimeout(() => setSuccess(false), 3000); // Hide after 3 seconds
      } catch (error) {
        console.log(error, 'error');
        setError(true);
        setSuccess(false);
        setLoading(false);
        setTimeout(() => setError(false), 3000);
      }
  };
  

  const handlePlatformSelect = (platform) => {
    console.log('Selected Platform:', platform);
    setSelectedPlatform(platform);
    // You can now use this selectedPlatform for further actions in the parent component
  };

  console.log(selectedPlatform,"0000000000");

  
  

  return (
    <div className='main-cont55' style={{}}>
          {success1 && (
      <Alert
        message="Posted successfully"
        type="success"
        showIcon
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          width: 'auto',
          maxWidth: '300px',
        }}
      />
    )}
       {success3 && (
      <Alert
        message="Scheduled Successfully"
        type="success"
        showIcon
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          width: 'auto',
          maxWidth: '300px',
        }}
      />
    )}
    {error1 && (
      <Alert
        message="Something went wrong."
        type="error"
        showIcon
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1000,
          width: 'auto',
          maxWidth: '300px',
        }}
      />
    )}
       <div style={{marginInline:'50px'}}>
    <div className='heading' >
    <h3>Post Drafts</h3>
    <img src={stars} className='str'/>
    {success && <Alert style={{marginLeft:'40vw'}} message="deleted successfully!" type="success" showIcon />}
    {error && <Alert style={{marginLeft:'40vw'}} message="Something went Wrong." type="error" showIcon />}
    </div>
    <Carousel1 onPlatformSelect={handlePlatformSelect}  />
  
{!loading && (!data || data.length === 0) && (
  <h2 className='message-for-draft'>You can Select a Template Post from Post Idea or can generate Post Idea !!</h2>
)}


    </div>
      {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
      <div className='card-containr'>
      {data?.map((item, index) => (
        <div className='card-cont3'  key={index} >
          {/* <div className='profile-cont'>
            <img src={avtar} className='avtar' />
            <div className='profile-subcont'>
              <h4 className='name'>
                {userBasics?.fullName}
              </h4>
              <p className='email'>
{userBasics?.email}
              </p>
            </div>
          </div> */}
          {/* <h5>{item?.title}</h5> */}
          <p className='para23'>{item?.content?.replace(/\[|\]/g, '')}</p>

          <div className='hashtags88'>
            {item.hashtags?.map((hashtag, idx) => (
              <span key={idx} className='hashtag-span'>
                {hashtag}
              </span>
            ))}
          </div>
          {/* <div className='small-cont'>
            <span>Learn more</span> 
            <img style={{ width: 12, height: 12, objectFit: 'contain', marginLeft: 5 }} src={down} />
          </div> */}
          <div className='bottom-cont44'>
            {/* <img src={like} className='btm-img' />
            <img src={dislike} className='btm-img' style={{ marginLeft: '2%' }} /> */}
            <img src={post} className='btm-img44' style={{ marginLeft: '2%', marginRight: '2%' }} onClick={() =>{
    if (selectedPlatform === 'Twitter') {
      handleTwitter(item);
    } else if (selectedPlatform === 'LinkedIn') {
      handleLinkedin(item);
    }}}/>
            <p className='para44' onClick={() =>{
    if (selectedPlatform === 'Twitter') {
      handleTwitter(item);
    } else if (selectedPlatform === 'LinkedIn') {
      handleLinkedin(item);
    }}}>Post now</p>
            <img src={schedule} className='btm-img44' style={{ marginLeft: '3%', marginRight: '2%' }} onClick={() => handleCardClick(item)}/>
            <p className='para44' onClick={() => handleCardClick(item)}>Schedule Now</p>
            <img src={write} className='btm-img44' style={{ marginLeft: '3%', marginRight: '2%' }}   onClick={() => handledelete(item)}  />
            <p className='para44' onClick={() => handledelete(item)} >Remove from Draft</p>
         
          </div>
        </div>
      ))}
      </div>
      <Modal
        title="Login Required"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>{modalMessage}</p>
        <Button type="primary" onClick={handleModalOk}>
          Go to Integration
        </Button>
      </Modal>
      <Modal
        title="Pick Date and Time"
        visible={isModalSVisible}
        onCancel={handleCancel}
        footer={null} // Remove default footer buttons
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ marginBottom: '1em' }}>
            <DatePicker
              label="Select Date"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              renderInput={(params) => <input {...params} />}
            />
          </div>
          <div>
            <h3>Select Time Slot:</h3>
            <Radio.Group onChange={handleTimeSlotChange} value={selectedTimeSlot}>
           
              <Radio value="21:00">9 AM</Radio>
              <Radio value="17:00">5 PM</Radio>
            </Radio.Group>
          </div>
          <div  style={{ marginTop: '1em', textAlign: 'center' }}>
            <button className='button' style={{ borderStyle:"none" }} onClick={handleSchedule}>
            {loading2 ? (
        <Spin size="small" />
      ) : (
        'Schedule'
      )}
            </button>
          </div>
        </LocalizationProvider>
      </Modal>
    </div>
  )
}

export default Drafts;
