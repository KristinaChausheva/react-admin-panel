import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

function New() {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEXu7u6VlZXx8fGOjo6RkZHr6+vm5uagoKCkpKTMzMzJycnz8/OamprCwsLd3d2WlpaxsbHX19fR0dG6urqqqqqzs7O+vr7b29uGhob5boRWAAAGMElEQVR4nO2ca5uqIBRGC/CSOJZ2O///lx5FTG6G3WxX7/o0z1SMrLawN8isVgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH0ryWt7dvRmwgr+Uf+/u4AxYIdavhL+7gzOAAzjogIOLgzJ7Ph/mQPxJ9nTKT3PAnt80HMBBBxz8oAPGkqpKV2YzP+aArYpctNVBuU/l5Ze/5UBWJe9TIiGKi4SfcsBqI9fk+0HCTzlIrXSbb3RbX+Fgphd5cGoEvW7yBQ4Yqyo2R0PFbQVDY5/vQNZbzts6It7Cya088y9xIBv17fJDNBK8W2Et+hc+3QGr9JcrdrFIYLnrgPcDwsc7yC5fahGR4MeB7vfgIJk1qryRsANzdUmkkRb27nhQ9i9oB2xzqGlbmIiDrdGlw/VAYI3jQBz7D1wctDn0Xyrpagg6sBcZeR25/NK5FSrj150D0eXQuzPZYAg7sHuVX7941lgJwmUUNR10P2VFQjMYQg6cTkUDQe6N94ts2F5zHLQvrY8VRQshB95In8emhlECz5OhqXE8GAXxvGHxtGthQg5SJ/lt7/DItyfPGRctfF2M7xzmxvTAjeFFrE/UxseAA/nnbbtEpobuQ2lxOv2dzd5dciSZnrbm3cIPNSkLIQeZq2DNIzmCaolJe+Q38kTJmtwMhnayJDQ++g6Ydyu0r5/uuGArV2ay2q/NW4LvzlQsBBz4t0LLHU279YJcbTIjGATPNjQk+A6kVwN1b7jjcv2aqQ2GoxEMYk/VQeBWaMlCo+L1LoTqRiaTIhv+QKwSWQrPwZjSWASmR5Y0V/PfidqZsXrXtxmfbZbBcyB34QcSvHUEuRFtMVRP92Ny/YD1i7AiVocshR8H26CCYWFk/GDdLzQdJ5uedCD7arskEga+gyocBu306FyydiWydOLrnF5H6j9YEAkDz8H0sznC+pw0VlInJEw50COOIPPoouvAXxm7OLDWmBMz3wmXE5MOVB46rLQQwIuDieGgw/iYtBbQRHBknHLQ70dE67DlcBywqeFgbY8I9vZaeIifcCD7mTGYcLwH10E4O9A9vdz43gQqzr6ECQd6YiSSJ3c4DuRxWsG4qCY3Xi4ZGBPCDoZyhI4Cz4FfN5sdVeMYkw0PjBqehAkH6td3FaKvwnGQXrkVuvftUslSb0NBsXWnyKCDIbUiUioobAf6Cq9IWJelmPBUOhN+0IGee6mUCgrHQXDtYCYiswMh6KCvSqNbFotiO5jOkGZJsL/dkIOhVKCkwI2D8monoxL2poRgHPTve8XjkPdjO4gMiVG4mU8HHJArFRSWg+iQGJfQXH0+UVIrFRS2g8cPdBi5UsABuVJBYTmQx8cPtYwzpO9Ap9iRPdzFseMgtKR8I+LSQ99BosKAUqmgsBwkjysw7nbPgc4+tm/o5lUsB+Fl9VvhhfUcyojUpQKtEdF2wBq1efwwOgt0HejHmqnsKoxYcVAVm+egmvb22giWCgonT3wSqjHXQZ+A0SoVFMud5SFZKigWPM+k5gRipYJiMQfDSiWtUkFxOef6fGwHNEsFxXDeOX8+W9OBXrSnViooljr3rksFQrsKI0s5oLerMLKQA0lvV2FkIQd6V2FP8VZY6P/iUNxVMEjS16L+CNlSYT7MnfpvbYDirsKN1Afr/6Xkm9VtFqg9gHQPTJ535g6bEPvbnj3vP0WwVLgJmfyV9rPnzdyzwER3Fe6BsfpgBgMv5x5E0E//UiwVbobJ9GQFg5h1ao/R3FW4G7m6/SCC3rWIHQj6ILyDCOtd5KBWQrhUuBcmV+Oz5yoYsmuTJdVdhUdpg2FnH9TaTwYD1V2Fx2HeZJk3QQttqdAtptDbVXgKTNbWqT0ePLX3BaXCVbrJ0j6o5U+WX1AqxOhO7Ql3sjRfJ7ur8Ey8yVIczf8l8x2lQhyZuKf2Ch0MhHcVng5j1VEEJkvCuwovwJssRd6sJOFdhdfQVZZW5lT+kTur8HqYe8RdZcnfVSrMwK0sO959TcvTBsPeGh9p7iq8GLuypLqr8HK6ylIHw9eWCnGGyZLX776St6KWYde/GwY97fj4zRXjXKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6C/23TT690oCOPAAAAAElFTkSuQmCC"
              alt="empty photo"
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Upload Image:{" "}
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder="john_doe@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="phone" placeholder="+ 001 234 567 89" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton St. 217 New York" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
