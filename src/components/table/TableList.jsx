import "./tableList.scss"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

function TableList() {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 3,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 4,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      method: "Cash on Delivery",
      status: "Approved",
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tabelCell">Tracking ID</TableCell>
            <TableCell className="tabelCell">Product</TableCell>
            <TableCell className="tabelCell">Customer</TableCell>
            <TableCell className="tabelCell">Date</TableCell>
            <TableCell className="tabelCell">Amount</TableCell>
            <TableCell className="tabelCell">Payment Method</TableCell>
            <TableCell className="tabelCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tabelCell">{row.id}</TableCell>
              <TableCell className="tabelCell">{row.product}</TableCell>
              <TableCell className="tabelCell"> {row.customer}</TableCell>
              <TableCell className="tabelCell">{row.date}</TableCell>
              <TableCell className="tabelCell">{row.amount}</TableCell>
              <TableCell className="tabelCell">{row.method}</TableCell>
              <TableCell className="tabelCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList
