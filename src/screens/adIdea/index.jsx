import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import down from '../../assets/getIdea/down.png';
import like from '../../assets/getIdea/like.svg';
import dislike from '../../assets/getIdea/dislike.svg';
import post from '../../assets/getIdea/post.svg';
import schedule from '../../assets/getIdea/schedule.svg';
import write from '../../assets/getIdea/write.svg';
import stars from '../../assets/getIdea/stars.svg';
import Carousel1 from './carousel1';
const AdIdea = () => {
  return (
    <div className='main-cont' style={{marginInline:'100px'}}>
    <div className='heading'>
    <h3>Get Ad Ideas</h3>
    <img src={stars} className='str'/>
    </div>
    <Carousel1 />
      <div className='card-cont'>
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
        <h5>🚀 Unleash Your Business Potential with Our New Digital Marketing Services! 🚀</h5>
        <p className='para'>Are you ready to take your business to the next level? Our latest digital marketing services are designed to help you reach new heights. From SEO to social media management, we’ve got you covered.</p>
        <p className='para'>Join the ranks of successful businesses that have transformed their online presence with us. Let’s build your brand together! 💪</p>
        <div className='small-cont'><span>Learn more</span> <img style={{width:12,height:12,objectFit:'contain',marginLeft:5}} src={down}/></div>
        <div className='bottom-cont'>
<img src={like} className='btm-img'/>
<img src={dislike} className='btm-img' style={{marginLeft:'2%'}}/>
<img src={post} className='btm-img' style={{marginLeft:'13%',marginRight:'1%'}}/>
<p className='para1'>Post now</p>
<img src={schedule} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<p className='para1'>Schedule Now</p>
<img src={write} className='btm-img' style={{marginLeft:'6%',marginRight:'1%'}}/>
<div className='button' style={{marginLeft:'6%'}}>
  <span>Save to draft</span>
</div>
        </div>
      </div>
    </div>
  )
}

export default AdIdea