import Switch from '../../components/switch'
import './styles.scss'
import star from '../../assets/analytics/star.svg';
import edit from '../../assets/analytics/edit.svg';

const Automation = () => {
    const scheduleData = [
        { title: 'Schedule Ads ', date: '20-09-2025', time: '11AM', description: 'Schedule post to boost your business engagement' },
        { title: 'Ad Performance Alerts', date: '21-09-2025', time: '12PM', description: 'Schedule post to boost your business engagement' },
        { title: 'Automated Ad Optimization', date: '22-09-2025', time: '1PM', description: 'Schedule post to boost your business engagement' },
        { title: 'A/B Testing Automation', date: '23-09-2025', time: '2PM', description: 'Schedule post to boost your business engagement' },
        { title: 'Repost Top-Performing Ads', date: '24-09-2025', time: '3PM', description: 'Schedule post to boost your business engagement' },
        { title: 'Email Notifications', date: '25-09-2025', time: '4PM', description: 'Schedule post to boost your business engagement' },
      ];

    const ScheduleCard = ({ title, date, time, description ,index}) => {
        return (
          <div className="schedule-card">
            <div className="card-header">
              <h4>{title}</h4>
              <Switch id={`toggleSwitch${index}`} name={`toggleSwitch${index}`} />
            </div>
            <p>{description}</p>
            <div className="schedule-info">
              <div className="date-time">
                <span style={{ marginRight: 6 }}>{date}</span>
                <span>{time}</span>
              </div>
              <div className="date-time1">
                <img src={edit} className="edit-btn" alt="edit" />
                <button className="edit-button">Edit</button>
              </div>
            </div>
          </div>
        );
      };
  return (
    <div style={{marginLeft: '10vh',marginTop:'5vh'}}>
    <div className='small-cont-s' >
    <h3 style={{marginRight:5}}>Smart Automation</h3>
    <img src={star} />
    </div>
        
    <div className="schedule-cards-container">
        {scheduleData.map((data, index) => (
          <ScheduleCard
                    key={index}
            title={data.title}
            date={data.date}
            time={data.time}
            description={data.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Automation