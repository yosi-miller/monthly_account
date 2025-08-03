import { useState } from "react";
import AddActionPopup from "./components/addActionPopup.jsx";
import Header from "./components/heder.jsx";
import ExpensesTable from "./components/expensesTable.jsx";
import HeaderSection from "./components/headerSection.jsx";

function App() {
  const [showAddActionPopup, setShowAddActionPopup] = useState(false);
  const [actions, setActions] = useState([]); // State to manage actions

  const handleFormSubmit = (formData) => {
    setActions([...actions, formData]); // Add the new action to the list
    setShowAddActionPopup(false); // סוגר את הפופאפ אחרי שליחת הטופס
  };

  return (
    <>
      <Header />
      <div className="App">
        <HeaderSection showAddActionPopup={showAddActionPopup} setShowAddActionPopup={setShowAddActionPopup} />
        {showAddActionPopup && <AddActionPopup onSubmit={handleFormSubmit} />}
        <div className="actions-list">
          <ExpensesTable actions={actions} setCompleted={setActions} />
        </div>
      </div>
    </>
  );
}

export default App;
