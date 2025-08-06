import "../style/header.css";

export default function Header({ setMonthlyActions }) {
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
                defaultValue={new Date().toISOString().slice(0, 7)}
                onChange={(e) => setMonthlyActions(e.target.value)}
              />
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}
