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
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Lists</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <InventoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <PaymentIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">colomn</div>
    </div>
  )
}

export default Sidebar
