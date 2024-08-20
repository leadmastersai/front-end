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
import { Alert, Spin } from "antd";
import { useSelector } from 'react-redux';
import Carousel1 from '../adIdea/carousel1';
import stars from '../../assets/getIdea/stars.svg';

const Drafts = () => {
  const [success, setSuccess] = useState(false); // state for showing success message
  const [error, setError] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  const getDrafts = async () => {
    try {
      const response = await postService.facebookDraft();
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {

    getDrafts();
  }, []);

  const handleLinkedin = async (item) => {
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
  


  return (
    <div className='main-cont55' style={{}}>
       <div style={{marginInline:'180px'}}>
    <div className='heading' >
    <h3>Post Drafts</h3>
    <img src={stars} className='str'/>
    {success && <Alert style={{marginLeft:'40vw'}} message="deleted successfully!" type="success" showIcon />}
    {error && <Alert style={{marginLeft:'40vw'}} message="Something went Wrong." type="error" showIcon />}
    </div>
    <Carousel1  />
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
            <img src={post} className='btm-img44' style={{ marginLeft: '2%', marginRight: '2%' }} onClick={() => handleLinkedin(item)}/>
            <p className='para44' onClick={() => handleLinkedin(item)}>Post now</p>
            <img src={schedule} className='btm-img44' style={{ marginLeft: '3%', marginRight: '2%' }} />
            <p className='para44'>Schedule Now</p>
            <img src={write} className='btm-img44' style={{ marginLeft: '3%', marginRight: '2%' }}   onClick={() => handledelete(item)}  />
            <p className='para44' onClick={() => handledelete(item)} >Remove from Draft</p>
         
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Drafts;
