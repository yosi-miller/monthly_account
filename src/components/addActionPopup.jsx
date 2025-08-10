import "../style/addActionPopup.css";

function AddActionPopup({ onSubmit, closePopup }) {
  
  const handleSubmit = (e) => {
    e.preventDefault(); // מונע רענון הדף

    const formData = new FormData(e.target);
    const data = {
      id: Date.now(), // Add a default unique ID based on the current timestamp
      actionName: formData.get("actionName"),
      amount: formData.get("amount"),
      paymentMethod: formData.get("paymentMethod"),
      category: formData.get("category"),
      subCategory: formData.get("subCategory"),
      notes: formData.get("notes"),
      dateAdded: formData.get("dateAdded"),
      completed: formData.get("completed") === "on", // Convert checkbox value to boolean
    };

    onSubmit(data);
  };

  return (
    <div className="popup-container" onClick={closePopup}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h2>הוסף הוצאה</h2>
        <form onSubmit={handleSubmit}>
          <label>
            שם הוצאה:
            <input type="text" name="actionName" required />
          </label>
          <label>
            סכום הוצאה:
            <input type="number" name="amount" required />
          </label>
          <label>
            אופן תשלום:
            <select name="paymentMethod">
              <option value="credit">אשראי</option>
              <option value="bank_standing_order">הו"ק בנקאית</option>
              <option value="credit_standing_order">הו"ק באשראי</option>
              <option value="cash">מזומן</option>
              <option value="check">צ'ק</option>
            </select>
          </label>
          <label>
            קטגוריה:
            <input type="text" name="category" />
          </label>
          <label>
            תת קטגוריה:
            <input type="text" name="subCategory" />
          </label>
          <label>
            הערות:
            <textarea name="notes"></textarea>
          </label>
          <label>
            תאריך הוספה:
            <input
              type="month"
              name="dateAdded"
              required
              defaultValue={new Date().toISOString().slice(0, 7)}
            />
          </label>
          <label>
            בוצע:
            <input type="checkbox" name="completed" />
          </label>
          <div className="popup-buttons">
            <button type="submit">הוסף הוצאה</button>
            <button type="button" onClick={closePopup}>סגור</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddActionPopup;
