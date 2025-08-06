import '../style/headerSelction.css';

function HeaderSection({ showAddActionPopup, setShowAddActionPopup, monthlyActions }) {
  // Function to toggle the visibility of the AddActionPopup
  const toggleAddActionPopup = () => {
    setShowAddActionPopup(!showAddActionPopup);
  };

  return (
    <div className="header-section">
      <h4>טבלת הוצאות לחודש: {monthlyActions}</h4>
      <div className="add-action">
        <button onClick={toggleAddActionPopup}>
          {showAddActionPopup ? "סגור" : "הוספת הוצאה"}
        </button>
      </div>
    </div>
  );
}

export default HeaderSection;
