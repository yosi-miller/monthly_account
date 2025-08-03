import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from "@mui/material";

export default function ExpensesTable({ actions, setCompleted }) {
  console.log("🚀 ~ ExpensesTable ~ actions:", actions)
  
    const handleToggleCompleted = (index) => {
    const updated = [...actions];
    console.log("🚀 ~ handleToggleCompleted ~ updated:", updated)
    updated[index].completed = !updated[index].completed;
    setCompleted(updated);
    console.log("🚀 ~ handleToggleCompleted ~ updated:", updated)
  };

  return (
    <Paper sx={{ p: 2, mt: 3, maxHeight: "70vh" }}>
      <TableContainer sx={{ height: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: 'center' }}>שם הוצאה</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>סכום</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>אמצעי תשלום</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>קטגוריה</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>תת קטגוריה</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>תאריך</TableCell>
              <TableCell sx={{ textAlign: 'center' }}>סטאטוס</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {actions.map((exp) => (
              <TableRow key={exp.id}>
                <TableCell sx={{ textAlign: 'center' }}>{exp.actionName}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{exp.amount} ₪</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{exp.paymentMethod}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{exp.category || "-"}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{exp.subCategory || "-"}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>{exp.dateAdded}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <Checkbox
                    checked={Boolean(exp.completed)}
                    onChange={() => handleToggleCompleted(exp.id)}
                    color="primary"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
