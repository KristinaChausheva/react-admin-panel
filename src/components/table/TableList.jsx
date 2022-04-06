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
      amount: 300,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      amount: 600,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 3,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      amount: 200,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 4,
      product: "Acer Nitro 5",
      img: "https://cyberport.scene7.com/is/image/cyberport/211006135644900301900061A?$Zoom_1000$",
      customer: "John Doe",
      date: "1 March",
      amount: 3100,
      method: "Cash on Delivery",
      status: "Pending",
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList
