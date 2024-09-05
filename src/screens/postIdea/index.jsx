import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import down from '../../assets/getIdea/down.png';
import like from '../../assets/getIdea/like.svg';
import dislike from '../../assets/getIdea/dislike.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import write from '../../assets/getIdea/write.svg';
import stars from '../../assets/getIdea/stars.svg';
import Carousel1 from '../adIdea/carousel1';
import { useEffect, useState } from 'react';
import { postSubService } from '../../../services/postSubService';
import { Spin } from "antd";
import { postService } from '../../../services/postServices';
import { useSelector } from 'react-redux';

const PostIdea = () => {
  const {userBasics}  = useSelector((state) => state.auth);
  const profilepic=userBasics.picture;
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const getFPosts = async () => {
      try {
        const response = await postSubService.postsubGet();
        console.log(response.data, "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
        setData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
    getFPosts();
  }, []);

  const handleDraft = async (item) => {
    setLoading(true); // Show spinner when starting to save draft
    const payload = {
      title: item?.title,
      content: item?.content,
      platform: "facebook",
      hashtags:item?.hashtags
    };
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
    <div className='main-cont' style={{marginInline:'100px'}}>
      {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
         <div >
      <div className='heading'>
        <h3>Get Post Ideas</h3>
        <img src={stars} className='str' />
      </div>
      <Carousel1 />
      </div>
   
      <h2 style={{fontWeight:'300',margin:'5%',textAlign:'center'}}>Please tell us more about yourself and your business to Get Recommendations here!!</h2>
      {/* {data?.map((item, index) => (
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
          <div className='small-cont'><span>Learn more</span> <img style={{ width: 12, height: 12, objectFit: 'contain', marginLeft: 5 }} src={down} /></div>
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
      ))} */}
    </div>
  )
}

export default PostIdea;
