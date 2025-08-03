import './App.css';
import AddActionPopup from './components/addActionPopup.tsx';
import { useState } from 'react';
import Header from './components/heder.tsx';
import ExpensesTable from './components/expensesTable.tsx';

function App() {
  const [showAddActionPopup, setShowAddActionPopup] = useState(false);
  const [actions, setActions] = useState([]); // State to manage actions

  // Function to toggle the visibility of the AddActionPopup
  const toggleAddActionPopup = () => {
    setShowAddActionPopup(!showAddActionPopup);
  };

  const handleFormSubmit = (formData) => {
    setActions([...actions, formData]); // Add the new action to the list
    setShowAddActionPopup(false); // סוגר את הפופאפ אחרי שליחת הטופס
    console.log("🚀 ~ handleFormSubmit ~ actions:", actions)
  };

  return (
    <>
      <Header/>
      <div className="App">

      <div className='add-action'>
        <button onClick={toggleAddActionPopup}>
          {showAddActionPopup ? 'Close Add Action' : 'Open Add Action'}
        </button>
        {showAddActionPopup && <AddActionPopup onSubmit={handleFormSubmit} />}
      </div>
      <div className='actions-list'>
        <ExpensesTable actions={actions} setCompleted={setActions}/>
      </div>
    </div>
    </>
  );
}

export default App;
