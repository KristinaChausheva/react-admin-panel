import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined"
import ZoomInMapOutlinedIcon from "@mui/icons-material/ZoomInMapOutlined"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"

function Navbar() {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ZoomInMapOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent-muc2-1.xx.fbcdn.net/v/t1.18169-9/11825793_10207545460584331_2274065792767588975_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=QVnNTMKMYBEAX9G3_dU&_nc_oc=AQnRpbGXFbUZG24kRN5q3a7WjP3ij4Mcxy7A5ji8ys7E6ISiNuhSZfetNQFmIIR6ZYKcEXoWX301wioFjF9ff3xv&_nc_ht=scontent-muc2-1.xx&oh=00_AT-kJrB7fMxOa4X1l3U6BkIzV4zaFWGLq6uGdiCHWcPFFw&oe=6270E653"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
