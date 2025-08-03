import '../style/header.css';

export default function Header() {
  return (
    <header className="header">
      <h1>ניהול הכנסות והוצאות</h1>
      <nav>
        <ul>
          <li>הכנסות</li>
          <li>הוצאות</li>
          <li >
            <label>
              חודש תצוגה:
              <input type="month" name="date" required />
            </label>
            <button type="submit">הצג</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
