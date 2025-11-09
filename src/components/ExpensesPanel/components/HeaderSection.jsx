import { useContext } from 'react';
import '../style/headerSelction.css';
import { CurrentDateContext } from '../../../store/CuurectDateContext';

function HeaderSection({ showAddActionPopup, setShowAddActionPopup }) {
  const { currentDate } = useContext(CurrentDateContext);
  
  // Function to toggle the visibility of the AddActionPopup
  const toggleAddActionPopup = () => {
    setShowAddActionPopup(!showAddActionPopup);
  };

  return (
    <div className="header-section">
      <h4>טבלת הוצאות לחודש: {currentDate}</h4>
      <div className="add-action">
      {!showAddActionPopup &&
        <button onClick={toggleAddActionPopup}>
         הוספת הוצאה
        </button>}
      </div>
    </div>
  );
}

export default HeaderSection;
