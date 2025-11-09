import {useState} from "react";
import HeaderSection from "./components/HeaderSection.jsx";
import AddActionPopup from "../AddActionPopup/AddActionPopup.jsx";
import ExpensesTable from "./components/ExpensesTable.jsx";
import fakeData from "../../data/fakeExpensesData.js";

function TablePanel() {
  const [showAddActionPopup, setShowAddActionPopup] = useState(false);

  const [actions, setActions] = useState(fakeData); // State to manage actions

  const closePopup = () => {
    setShowAddActionPopup(false);
  };

  const handleFormSubmit = (formData) => {
    // TODO: make this on AddActionPopup
    setActions([...actions, formData]); // Add the new action to the list
    closePopup(); // סוגר את הפופאפ אחרי שליחת הטופס
  };

  return <div className="table-panel">
    <HeaderSection
            showAddActionPopup={showAddActionPopup}
            setShowAddActionPopup={setShowAddActionPopup}
            // TODO: pass the closed popup function
          />
          {showAddActionPopup && (
            <AddActionPopup
              onSubmit={handleFormSubmit}
              closePopup={closePopup}
            />
          )}

          <div className="actions-list">
            <ExpensesTable actions={actions} setCompleted={setActions} />
          </div>
  </div>;
}

export default TablePanel;
