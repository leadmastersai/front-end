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
import send from '../../assets/createAd/send-one.svg';
import { useState } from 'react';
import { Dropdown, message, Space, Spin } from 'antd';
import { postSubService } from '../../../services/postSubService';
import { useSelector } from 'react-redux';
import { postService } from '../../../services/postServices';

const CreatePosts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const {userBasics}  = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const profilepic=userBasics.picture;
  const handlePlatformSelect = (platform) => {
    console.log('Selected Platform:', platform);
    setSelectedPlatform(platform);
    setSelectedCategory(null); // Reset selected category when changing platform
    setData([]); 
    // You can now use this selectedPlatform for further actions in the parent component
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
  setLoading(true); // Show spinner when starting to save draft
  const payload = {
   
    content: item?.content,
    platform: selectedPlatform.toLowerCase(),
    hashtags:item?.hashtags
  };
  console.log(payload,"&&&77");
  
  try {
    const response = await postService.saveToDraft(payload);
    console.log(response.data, "posted");
  } catch (error) {
    console.log(error, "error");
  } finally {
    setLoading(false); // Hide spinner after operation is complete
  }
};



  return (
    <>
    <div className='main-cont' style={{marginInline:'100px'}}>
    {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
    <div className='heading'>
    <h3>Create new Posts </h3>
    <img src={stars} className='str'/>
    </div>
    <Carousel1 style={{marginTop:'-5vh'}} onPlatformSelect={handlePlatformSelect} />
    <div className="app-container">
      <header className="header-ad">
        <img
          src={avtar} 
          alt="Profile"
          className="profile-picture"
        />
        <div className="profile-info1">
          <h5>Abdullah Khan</h5>
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
        <div className='card-cont' key={index} >
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
          <p className='para'>{item?.content}</p>
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
            <img src={post} className='btm-img' style={{ marginLeft: '13%', marginRight: '1%' }} />
            <p className='para1'>Post now</p>
            <img src={schedule} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <p className='para1'>Schedule Now</p>
            <img src={write} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <div className='button' style={{ marginLeft: '6%' }} onClick={() => handleDraft(item)}>
              <span>Save to draft</span>
            </div>
          </div>
        </div>
      ))}
        </>
    
  )
}

export default CreatePosts