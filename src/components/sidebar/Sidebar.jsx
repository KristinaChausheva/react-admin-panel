import "./sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import PaymentIcon from "@mui/icons-material/Payment"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import QueryStatsIcon from "@mui/icons-material/QueryStats"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SettingsSystemDaydreamIcon from "@mui/icons-material/SettingsSystemDaydream"
import PsychologyIcon from "@mui/icons-material/Psychology"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LogoutIcon from "@mui/icons-material/Logout"
import InventoryIcon from "@mui/icons-material/Inventory"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PersonOutlineOutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon />
            <span>Products</span>
          </li>
          <li>
            <PaymentIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">colomn</div>
    </div>
  )
}

export default Sidebar
