import Header from "./components/Heder/Heder.jsx";
import TablePanel from "./components/TablePanel/TablePanel.jsx";
import CurrentDateProvider from "./store/CuurectDateContext.jsx";
import "./style/app.css";

function App() {

  return (
    <>
      <CurrentDateProvider>
        <Header />
        <div className="app-expenses-panel">
          <TablePanel />
        </div>
      </CurrentDateProvider>
    </>
  );
}

export default App;
