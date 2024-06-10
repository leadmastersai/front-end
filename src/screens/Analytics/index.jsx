import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import ballImage from '../../assets/analytics/upper.svg';
import ballImage1 from '../../assets/analytics/lower.svg';

const Analytics = () => {
  return (
    <div className='containr'>
    <h3>Analytics</h3>
    <div className="profile-card">
      <div className="animated-ball ball-left">
        <img src={ballImage} alt="Ball" className="ball-image" />
      </div>
      <div className="animated-ball ball-right">
        <img src={ballImage1} alt="Ball" className="ball-image1" />
      </div>
      <div className="profile-content">
        <img src={avtar} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <div className='title'>Max Alter John</div>
          <p>Sample profile</p>
        </div>
        <div className="profile-stats">
          <div>
            <p>Followers</p>
            <p>1175</p>
          </div>
          <div>
            <p>Following</p>
            <p>1175</p>
          </div>
          <div>
            <p>Total posts</p>
            <p>1175</p>
          </div>
          <div>
            <p>Posts avg</p>
            <p>1175</p>
          </div>
          <div>
            <p>Replies avg</p>
            <p>1175</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Analytics