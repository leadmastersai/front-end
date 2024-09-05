import './styles.scss';
import avtar from '../../assets/dashb/Avatars.svg';
import ballImage from '../../assets/analytics/upper.svg';
import ballImage1 from '../../assets/analytics/lower.svg';
import chart1 from '../../assets/analytics/chart1.svg';
import chart2 from '../../assets/analytics/chart2.svg';
import chart3 from '../../assets/analytics/chart3.svg';
import chart4 from '../../assets/analytics/chart4.svg';
import chart5 from '../../assets/analytics/chart5.svg';
import chart6 from '../../assets/analytics/chart6.svg';
import chart7 from '../../assets/analytics/chart7.svg';
import chart8 from '../../assets/analytics/chart8.svg';
import chart9 from '../../assets/analytics/chart9.svg';
import star from '../../assets/analytics/star.svg';
import legend from '../../assets/analytics/Legend.svg';
import sub1 from '../../assets/analytics/sub1.svg';
import sub2 from '../../assets/analytics/sub2.svg';
import sub3 from '../../assets/analytics/sub3.svg';
import sub4 from '../../assets/analytics/sub4.svg';

const Analytics = () => {
  return (
    <div className='containr'>
    <h3>Performance Overview</h3>
    <div className="profile-card">
      <div className="animated-ball ball-left">
        <img src={ballImage} alt="Ball" className="bal" />
      </div>
      <div className="animated-ball ball-right">
        <img src={ballImage1} alt="Ball" className="ball-image1" />
      </div>
      <div className="profile-content">
        <img src={avtar} alt="Profile" className="profile-picture7" />
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
    <div className='charts-cont'>
    <h2 className='text'>Overall Campaign Performance</h2>
<img src={chart1} className='charts-img'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Total Spend:</strong> The amount of money spent on ads.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Impression:</strong> The total number of times ads were displayed.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Clicks:</strong> The number of times ads were clicked.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Conversations:</strong> The number of successful actions (e.g., purchases, sign-ups) resulting from clicks.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> CTR (Click-Through Rate):</strong> The percentage of impressions that resulted in clicks.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> CPC (Cost Per Click):</strong> The average cost incurred for each click.
                </li>
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <div className='small-cont-box'>
    <h2 className='text'>Campaign performance over time</h2>
    <img src={legend} style={{marginLeft:100,width:230,objectFit:'contain'}} />
    </div>
<img src={chart2} className='charts-img1'/>
  <div className="chart-container">
  
            <h2>About Chart</h2> 
            
            
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Impression:</strong>  Total number of times the ads were displayed.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Clicks:</strong>  Number of times the ads were clicked.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Conversations: </strong>Number of successful actions resulting from clicks.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Spend: </strong> Amount of money spent on the ads.
                </li>
                
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <h2 className='text'>Ad Spend Distribution</h2>
<img src={chart3} className='charts-img1'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Piechart:</strong>  Displays the distribution of ad spend by campaign.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Bar Graph:</strong>  Shows the ad spend by different platforms.
                </li>
                
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <h2 className='text'>Conversion Funnel</h2>
<img src={chart4} className='charts-img1'/>

    </div>
    <div className='charts-cont'>
    <h2 className='text'>Top Performing Ads</h2>
<img src={chart5} className='charts-img1'/>

    </div>
    <div className='charts-cont'>
    <h2 className='text'>Audiance Insights</h2>
    <div className="charts-container2">
  <img src={sub1} className="charts-img2" />
  <img src={sub2} className="charts-img2" />
  <img src={sub3} className="charts-img2" />
  <img src={sub4} className="charts-img2" />
</div>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Age Demographics:</strong>  Shows the distribution of the audience across different age groups.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Gender Demographics:</strong>  Displays the percentage of male and female audiences.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Device Types: </strong> Indicates the distribution of audience device usage (Mobile, Desktop, Tablet).
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Geolocation:</strong>  Highlights the percentage distribution of the audience across different countries.
                </li>
              
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <h2 className='text'>Audiance Insights</h2>
<img src={chart6} className='charts-img'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Age Demographics:</strong>  Shows the distribution of the audience across different age groups.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Gender Demographics:</strong>  Displays the percentage of male and female audiences.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Device Types: </strong> Indicates the distribution of audience device usage (Mobile, Desktop, Tablet).
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Geolocation:</strong>  Highlights the percentage distribution of the audience across different countries.
                </li>
              
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <h2 className='text'>Ad Engagement Metrics</h2>
<img src={chart7} className='charts-img'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Click-Through Rate (CTR):</strong> The line chart illustrates the CTR trend, showing how the rate has changed over time
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}>  Engagement Rate (Likes, Shares, Comments):</strong>  The bar charts provide a clear view of the engagement metrics, helping to identify trends and peaks in user interaction with ads.
                </li>
             
              
            </ul>
        </div>
    </div>
    <div className='charts-cont'>
    <h2 className='text'>Top Performing Ads</h2>
<img src={chart8} className='charts-img1'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                     The table provides a clear view of how each keyword is performing across different metrics.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                Top-performing keywords based on conversions are highlighted for quick identification.
                </li>
             
              
            </ul>
        </div>
    </div>
    <div className='charts-cont' style={{marginBottom:'10vh'}}>
    <h2 className='text'>platform Performance Comparison</h2>
<img src={chart9} className='charts-img1'/>
  <div className="chart-container">
            <h2>About Chart</h2>
            <ul>
                <li>
                    <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}>  Impressions:</strong> Represented in blue.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Clicks:</strong>  Represented in orange.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Conversions:</strong>  Represented in green.
                </li>
                <li>
                <img src={star} style={{marginInline:2}}/>
                    <strong style={{marginRight:2}}> Spend: </strong> Represented in red.
                </li>
            
            </ul>
        </div>
    </div>

    </div>
  )
}

export default Analytics