import Carousel1 from '../adIdea/carousel1';
import avtar from '../../assets/dashb/Avatars.svg';
import down from '../../assets/getIdea/down.png';
import like from '../../assets/getIdea/like.svg';
import dislike from '../../assets/getIdea/dislike.svg';
import './styles.scss';
import { DownOutlined } from '@ant-design/icons';
import stars from '../../assets/getIdea/stars.svg';
import write1 from '../../assets/createAd/write.svg';
import write from '../../assets/getIdea/write.svg';
import mail from '../../assets/createAd/email.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import expand from '../../assets/createAd/expand.svg';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import send from '../../assets/createAd/send-one.svg';
import { useState } from 'react';
import { Alert, Button, Dropdown, message, Modal, Radio, Space, Spin } from 'antd';
import { postSubService } from '../../../services/postSubService';
import { useSelector } from 'react-redux';
import { postService } from '../../../services/postServices';
import { useNavigate } from 'react-router-dom';
import { DatePicker} from '@mui/x-date-pickers';
import { scheduleService } from '../../../services/scheduleService';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


const CreatePosts = () => {
  const navigate=useNavigate();
  const [success1,setSuccess1]=useState(false);
  const [error1, setError1] = useState(false);
  const [savedDrafts, setSavedDrafts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const {userBasics}  = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
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

const [isModalVisible, setIsModalVisible] = useState(false);
const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loading2,setLoading2]=useState(false);
  const [success3,setSuccess3]=useState(false);
  const profilepic=userBasics.picture;
  const handlePlatformSelect = (platform) => {
    console.log('Selected Platform:', platform);
    setSelectedPlatform(platform);
    setSelectedCategory(null); // Reset selected category when changing platform
    setData([]); 
    // You can now use this selectedPlatform for further actions in the parent component
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };
  const onClick = ({ key }) => {
    // Find the item clicked based on the key
    const selectedItem = items.find(item => item.key === key);
    if (selectedItem) {
      setSelectedCategory(selectedItem);
    
    }
  };

  const items1 = [
    {
      label: "Health Care Domain",
      value: "Health%20Care%20Domain",
      key: "1"
    },
    {
      label: "Legal Services",
      value: "Legal%20Services",
      key: "2"
    },
    {
      label: "Banking Domain",
      value: "Banking%20Domain",
      key: "3"
    },
    {
      label: "Education Domain",
      value: "Education%20Domain",
      key: "4"
    },
    {
      label: "Energy and Utilities",
      value: "Energy%20and%20Utilities",
      key: "5"
    },
    {
      label: "Cyber Security",
      value: "Cyber%20Security",
      key: "6"
    },
    {
      label: "Agriculture",
      value: "Agriculture",
      key: "7"
    },
    {
      label: "Retail Domain",
      value: "Retail%20Domain",
      key: "8"
    },
    {
      label: "Marketing Domain",
      value: "Marketing%20Domain",
      key: "9"
    }
  ];
  

  const items = [
    {
      label: 'Finance',
      value: 'Finance', // Value different from label
      key: '1',
    },
    {
      label: 'Real Estate',
      value: 'Real%20Estate',
      key: '2',
    },
    {
      label: 'Education',
      value: 'Education',
      key: '3',
    },
    {
      label:'Technology',
      value:'Technology',
      key:'4'
    },
    {
      label:'Retail',
      value:'Retail',
      key:'5'
    },
    {
      label:'Aerospace and Defense',
      value:'Aerospace%20and%20Defense',
      key:'6'
    },
    {
      label:'Agriculture',
      value:'Agriculture',
      key:'7'
    },
    {
      label:'Legal Services',
      value:'Legal%20Services',
      key:'8'
    },
    {
      label:'Healthcare',
      value:'Healthcare',
      key:'9'
    },
    {
      label:'Energy and Utilities',
      value:'Energy%20and%20Utilities',
      key:'10'
    }

  ];

  const currentItems = selectedPlatform === "LinkedIn" ? items1 : items;

  const menu = {
     items: currentItems,
     onClick: ({ key }) => {
      const selectedItem = currentItems.find(item => item.key === key);
      if (selectedItem) {
          setSelectedCategory(selectedItem);
      }
  },
  };

console.log(selectedCategory,"==");

const handleGetCategoryData=async()=>{
  if (!selectedCategory) {
    // Show a warning message if category is not selected
    message.warning('Please select a category before proceeding.');
    return; // Exit the function early
  }
  const cate=selectedCategory?.value
setLoading(true);
  try{
    const response=await postSubService.postPlatformCategory(selectedPlatform,cate);
    console.log(response.data,",,,,,,,,,,,,,,,,,,,,,,");
    setData(response.data)
if(response.status===200){
  setLoading(false)
}
  }catch(error){
    console.log(error,"error");
    setLoading(false)
  }
}

const handleDraft = async (item) => {
  if (savedDrafts.includes(item?.content)) {
    message.warning('This post is already saved to drafts.');
    return;
  }
  setLoading(true); // Show spinner when starting to save draft
  const payload = {
    content: item?.content,
    platform: selectedPlatform.toLowerCase(),
    hashtags: item?.hashtags
  };
  console.log(payload, "&&&77");

  try {
    const response = await postService.saveToDraft(payload);
    console.log(response.data, "posted");
    if (response.status === 200 || response.status === 201) {
      setSuccess(true);
    setError(false);
    setSavedDrafts([...savedDrafts, item?.content]); 
    setLoading(false)
    setTimeout(() => setSuccess(false), 3000); //
    }

    } catch (error) {
      console.log(error, 'error');
      setError(true);
      setSuccess(false);
      setLoading(false);
      setTimeout(() => setError(false), 3000);
    }
};

const showLoginModal = (platform) => {
  setModalMessage(`Login with ${platform} to post.`);
  setIsModalVisible(true);
};

const handleLinkedin = async (item) => {
  if (!userBasics.isLinkedInConnected) {
    showLoginModal('LinkedIn');
    return;
  }
  setLoading(true); // Show spinner when starting to publish
  const hashtagsString = item?.hashtags?.length
  ? item.hashtags.map(hashtag => `#${hashtag}`).join(' ')
  : '';

// Combine content and hashtags
const text = `${item?.content} ${hashtagsString}`.trim(); // Trim to remove any extra spaces

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

console.log(dateValue,selectedTimeSlot,"0000000000000000000000000000");

const handleTwitter = async (item) => {
  if (!userBasics.isTwitterLogin) {
    showLoginModal('Twitter');
    return;
  }
  setLoading(true); // Show spinner when starting to publish
  const hashtagsString = item?.hashtags?.length
  ? item.hashtags.map(hashtag => `#${hashtag}`).join(' ')
  : '';

// Combine content and hashtags
const text = `${item?.content} ${hashtagsString}`.trim(); // Trim to remove any extra spaces

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

const handleModalOk = () => {
  setIsModalVisible(false);
 navigate("/integrations") // Redirect to the integration screen if needed
};

const handleSchedule = async () => {
  setLoading2(true);
  const hashtagsString = selectedCard?.hashtags?.length
    ? selectedCard?.hashtags?.map(hashtag => `#${hashtag}`).join(' ')
    : '';

  const text = `${selectedCard?.content} ${hashtagsString}`.trim(); 
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




  return (
    <>
     {success && (
      <Alert
        message="Saved to draft successfully!"
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
    {error && (
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
    <div className='main-cont' style={{marginInline:'100px'}}>
    {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
    <div className='heading'>
    <h3>Post Builder</h3>
    <img src={stars} className='str'/>
    </div>
    <Carousel1 style={{marginTop:'-5vh'}} onPlatformSelect={handlePlatformSelect} />
    <div className="app-container">
      <header className="header-ad">
        <img
       src={profilepic ?profilepic: avtar} 
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info1">
          <h5>{userBasics?.fullName}</h5>
          <div className='header-ad'>
          <img src={write1} className='write-img' />
          <p >Start typing note</p>
          </div>
        </div>
      </header>
      <div className="post-content">
      <img src={mail} className='mail-img' />
        {/* <p>
          Are you struggling to maintain a work-life balance? I will be sharing some practical tips and strategies that have personally helped me navigate through this challenge. Stay tuned!
        </p> */}
      </div>
      {/* <div className="action-buttons">
        <button><img src={expand} className='write-img'/>Make it crisp</button>
        <button><img src={expand} className='write-img' /> Fix spellings</button>
        <button> <img src={expand}  className='write-img'/>Add Emojis</button>
        <button><img src={expand} className='write-img'/>Add Hashtags</button>
      </div> */}
      
      <div className="dropdown-container">
        <Dropdown menu={menu} placement="bottomCenter">
          <Space className="dropdown-trigger">
            <span>{selectedCategory ? `Selected: ${selectedCategory?.label}` : 'Select a category'}</span>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    
      <div className="message-input">
        <input type="text" placeholder="Type your message here or pick from the prompts" style={{widows:'80%'}}/>
        <button className="send-button" onClick={handleGetCategoryData}><img src={send} className='write-img1' /></button>
      </div>
      <div className="prompt-buttons">
        <button>Provide me a post idea for Instagram</button>
        <button>Provide me a poster idea for digital marketing</button>
      </div>
    </div>
    
    </div>
{/*     
    <div className='bottom-cont1' style={{marginBottom:'5vh'}}>
    <img src={post} className='btm-img1' style={{marginLeft:'39%',marginRight:'1%'}}/>
    <p className='para1'>Cross Posting</p>
<img src={post} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<p className='para1'>Post now</p>
<img src={schedule} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<p className='para1'>Schedule Now</p>

<div className='button1' style={{marginLeft:'6%'}}>
  <span>Pickup Slot</span>
</div>
        </div> */}
        {data?.map((item, index) => (
        <div className='card-cont' style={{marginInline:'auto'}} key={index} >
          <div className='profile-cont'>
            <img src={profilepic ?profilepic: avtar} className={profilepic ? 'avtar-usr':'avtar'} />
            <div className='profile-subcont'>
              <h4 className='name'>
                {userBasics?.fullName}
              </h4>
              <p className='email'>
{userBasics?.email}
              </p>
            </div>
          </div>
          <h5>{item?.title}</h5>
          <p className='para'>{item?.content?.replace(/\[|\]/g, '')}</p>

          <div className='hashtags'>
            {item.hashtags?.map((hashtag, idx) => (
              <span key={idx} className='hashtag'>
                {hashtag}
              </span>
            ))}
          </div>
          {/* <div className='small-cont'><span>Learn more</span> <img style={{ width: 12, height: 12, objectFit: 'contain', marginLeft: 5 }} src={down} /></div> */}
          <div className='bottom-cont'>
            <img src={like} className='btm-img' />
            <img src={dislike} className='btm-img' style={{ marginLeft: '2%' }} />
            <img src={post} className='btm-img' style={{ marginLeft: '13%', marginRight: '1%' }} onClick={() =>{
    if (selectedPlatform === 'Twitter') {
      handleTwitter(item);
    } else if (selectedPlatform === 'LinkedIn') {
      handleLinkedin(item);
    }}}/>
            <p className='para1' onClick={() =>{
    if (selectedPlatform === 'Twitter') {
      handleTwitter(item);
    } else if (selectedPlatform === 'LinkedIn') {
      handleLinkedin(item);
    }}}>Post now</p>
            <img onClick={() => handleCardClick(item)}src={schedule} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <p className='para1' onClick={() => handleCardClick(item)}>Schedule Now</p>
            <img src={write} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <div className='button' style={{ marginLeft: '6%' }} onClick={() => handleDraft(item)}>
              <span>Save to draft</span>
            </div>
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
      ))}
        </>
    
  )
}

export default CreatePosts