import "../../style/header.css";
import { useContext } from "react";
import { CurrentDateContext } from "../../store/CuurectDateContext.jsx";

export default function Header() {
  const { currentDate, setCurrentDate } = useContext(CurrentDateContext);

  return (
    <header className="header">
      <h1>ניהול הכנסות והוצאות</h1>
      <nav>
        <ul>
          <li>הכנסות</li>
          <li>הוצאות</li>
          <li>
            <label>
              חודש תצוגה:
              <input
                type="month"
                name="date"
                required
                defaultValue={currentDate}
                onChange={(e) => setCurrentDate(e.target.value)}
              />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
