// Switch.js
import './switch.css';

const Switch = ({ id, name }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={id}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default Switch;
