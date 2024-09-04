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
import { Alert, Button, Modal, Spin } from "antd";
import { useSelector } from 'react-redux';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';
import { useNavigate} from 'react-router-dom';


const Drafts = () => {
  const navigate=useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState("LinkedIn");
  const [success, setSuccess] = useState(false); // state for showing success message
  const [error, setError] = useState(false);
  const {userBasics}  = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  console.log(userBasics,"###################################");
  
  const getDrafts = async () => {
    const platform=selectedPlatform.toLocaleLowerCase();
    try {
      const response = await postService.facebookDraft(platform);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error, "error");
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
    } catch (error) {
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
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoading(false); // Hide spinner after operation is complete
    }
  };

  const handledelete = async (item) => {
    try {
      setLoading(true); 
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
       <div style={{marginInline:'50px'}}>
    <div className='heading' >
    <h3>Post Drafts</h3>
    <img src={stars} className='str'/>
    {success && <Alert style={{marginLeft:'40vw'}} message="deleted successfully!" type="success" showIcon />}
    {error && <Alert style={{marginLeft:'40vw'}} message="Something went Wrong." type="error" showIcon />}
    </div>
    <Carousel1 onPlatformSelect={handlePlatformSelect}  />
    {(!data || data.length === 0) && (
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
          <p className='para23'>{item?.content}</p>
          <div className='hashtags88'>
            {item.hashtags?.map((hashtag, idx) => (
              <span key={idx} className='hashtag-span'>
                {hashtag}
              </span>
            ))}
          </div>
          <div className='small-cont'>
            <span>Learn more</span> 
            <img style={{ width: 12, height: 12, objectFit: 'contain', marginLeft: 5 }} src={down} />
          </div>
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
            <img src={schedule} className='btm-img44' style={{ marginLeft: '3%', marginRight: '2%' }} />
            <p className='para44'>Schedule Now</p>
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
    </div>
  )
}

export default Drafts;
