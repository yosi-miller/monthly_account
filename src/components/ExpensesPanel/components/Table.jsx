import ExpensesTable from "./ExpensesTable";
import IncomeTable from "./IncomeTable";

function Table({ status }) {
  return (
    <div className="table">{status === "expense" ? <ExpensesTable /> : <IncomeTable />}</div>
  );
}

export default Table;
