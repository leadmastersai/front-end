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
import {postService} from '../../../services/postServices'

const PostIdea = () => {
  const [data,setData]=useState([]);
  
useEffect(()=>{
  const getFPosts=async()=>{
    try{
  const response= await postService.facebookGet();
  console.log(response.data,"VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  setData(response.data)
    }catch(error){
      console.log(error,"error");
    }
  }
  getFPosts();
  },[]);

  const handleDraft=async({item})=>{
    const payload={
      title:item?.title,
      content:item?.content,
      platform:item?.platform
    }
    try{
      const response=await postService.saveToDraft(payload);
console.log(response.data,"posted");
    }catch(error){
      console.log(error,"error");
    }
  }
  // Example usage
  return (
    <div className='main-cont'>
    <div className='heading'>
    <h3>Get Post Ideas</h3>
    <img src={stars} className='str'/>
    </div>
    <Carousel1 />
    {data?.map((item, index) => (
      <div className='card-cont' key={index} >
        <div className='profile-cont'>
<img src={avtar}  className='avtar'/>
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
        <p className='para'>{item?.content
          }</p>
        {/* <p className='para'>Join the ranks of successful businesses that have transformed their online presence with us. Let’s build your brand together! 💪</p> */}
        <div className='small-cont'><span>Learn more</span> <img style={{width:12,height:12,objectFit:'contain',marginLeft:5}} src={down}/></div>
        <div className='bottom-cont'>
<img src={like} className='btm-img'/>
<img src={dislike} className='btm-img' style={{marginLeft:'2%'}}/>
<img src={post} className='btm-img' style={{marginLeft:'13%',marginRight:'1%'}}/>
<p className='para1'>Post now</p>
<img src={schedule} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<p className='para1'>Schedule Now</p>
<img src={write} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<div className='button' style={{marginLeft:'6%'}} onClick={()=>handleDraft({item})}>
  <span>Save to draft</span>
</div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default PostIdea