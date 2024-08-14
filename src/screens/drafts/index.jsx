import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import down from '../../assets/getIdea/down.png';
import like from '../../assets/getIdea/like.svg';
import dislike from '../../assets/getIdea/dislike.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import write from '../../assets/getIdea/write.svg';
import { useEffect, useState } from 'react';
import { postService } from '../../../services/postServices';
import { Spin } from "antd";

const Drafts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const getDrafts = async () => {
      try {
        const response = await postService.facebookDraft();
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };
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

  return (
    <div className='main-cont'>
      {loading && (
        <div className='overlay'>
          <Spin size="large" />
        </div>
      )}
      {data?.map((item, index) => (
        <div className='card-cont' key={index} >
          <div className='profile-cont'>
            <img src={avtar} className='avtar' />
            <div className='profile-subcont'>
              <h4 className='name'>
                Max Alter John
              </h4>
              <p className='email'>
                @Max-Alter gmail.com
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
          <div className='small-cont'>
            <span>Learn more</span> 
            <img style={{ width: 12, height: 12, objectFit: 'contain', marginLeft: 5 }} src={down} />
          </div>
          <div className='bottom-cont'>
            <img src={like} className='btm-img' />
            <img src={dislike} className='btm-img' style={{ marginLeft: '2%' }} />
            <img src={post} className='btm-img' style={{ marginLeft: '13%', marginRight: '1%' }} />
            <p className='para1'>Post now</p>
            <img src={schedule} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <p className='para1'>Schedule Now</p>
            <img src={write} className='btm-img' style={{ marginLeft: '6%', marginRight: '1%' }} />
            <div className='button' style={{ marginLeft: '6%' }} onClick={() => handleLinkedin(item)}>
              <span>Publish now</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Drafts;
