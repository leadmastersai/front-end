import Carousel1 from '../adIdea/carousel1';
import avtar from '../../assets/dashb/Avatars.svg';
import './styles.scss';
import stars from '../../assets/getIdea/stars.svg';
import write1 from '../../assets/createAd/write.svg';
import write from '../../assets/getIdea/write.svg';
import mail from '../../assets/createAd/email.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import expand from '../../assets/createAd/expand.svg';
import send from '../../assets/createAd/send-one.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { postService } from '../../../services/postServices';
import { saveUserDetail } from '../../redux/authSlice';

const CreateAd = () => {
  const dispatch=useDispatch();
  



useEffect(() => {
  const token = localStorage.getItem('oauthToken');

  if (token) {
      console.log('Token in Home:', token);
      console.log('Token in Home:', token);
  } else {
      console.error('Token is null or undefined in Home');
  }
}, []);

useEffect(()=>{
const getUserDetails=async()=>{
  const response=await postService.getUser();
  console.log(response.data,"+++");
 dispatch(saveUserDetail(response.data));
  
}
getUserDetails()
},[])

const {userBasics}  = useSelector((state) => state.auth);
const profilepic=userBasics.picture;
console.log(userBasics,"this is user");
  return (
    <>
    <div className='main-cont' style={{marginInline:'100px'}}>
    <div className='heading'>
    <h3>Ad Builder</h3>
    <img src={stars} className='str'/>
    </div>
    <Carousel1 style={{marginTop:'-5vh'}}/>
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
      <div className="message-input">
        <input type="text" placeholder="Type your message here or pick from the prompts" style={{widows:'80%'}}/>
        <button className="send-button"><img src={send} className='write-img1' /></button>
      </div>
      <div className="prompt-buttons">
        <button>Provide me a post idea for Instagram</button>
        <button>Provide me a poster idea for digital marketing</button>
      </div>
    </div>
    
    </div>
    
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
        </div>
        </>
    
  )
}

export default CreateAd