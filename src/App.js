import { useState } from "react";
import AddActionPopup from "./components/addActionPopup.jsx";
import Header from "./components/heder.jsx";
import ExpensesTable from "./components/expensesTable.jsx";
import HeaderSection from "./components/headerSection.jsx";
import fakeData from "./data/fakeExpensesData.js"; 

function App() {
  const [showAddActionPopup, setShowAddActionPopup] = useState(false);
 
  const [actions, setActions] = useState(fakeData); // State to manage actions
  const [monthlyActions, setMonthlyActions] = useState(
    new Date().toISOString().slice(0, 7)
  ); // State to manage monthly actions

  const closePopup = () => {
    setShowAddActionPopup(false);
  };

  const handleFormSubmit = (formData) => {
    // TODO: make this on AddActionPopup 
    setActions([...actions, formData]); // Add the new action to the list
    closePopup(); // סוגר את הפופאפ אחרי שליחת הטופס
  };

  return (
    <>
      <Header
        monthlyActions={monthlyActions}
        setMonthlyActions={setMonthlyActions}
      />
      <div className="App">
        <HeaderSection
          showAddActionPopup={showAddActionPopup}
          setShowAddActionPopup={setShowAddActionPopup}
          // TODO: pass the closed popup function
          monthlyActions={monthlyActions}
        />
        {showAddActionPopup && (
          <AddActionPopup onSubmit={handleFormSubmit} closePopup={closePopup} />
        )}
        
        <div className="actions-list">
          <ExpensesTable
            actions={actions}
            setCompleted={setActions}
            monthlyActions={monthlyActions}
          />
        </div>
      </div>
    </>
  );
}

export default App;
