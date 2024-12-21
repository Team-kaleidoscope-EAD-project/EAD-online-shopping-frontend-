import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import { logout } from "../../../auth/logout";
import { useNavigate} from "react-router-dom";

export default function ProfileMenu({ profileImg }) {
  
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfilePageNavigation = () => {
    navigate(`/profile`);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
  };

  return (
    <div>
      <Avatar
        alt="Profile Picture"
        // src={profileImg}
        sx={{ cursor: "pointer" }}
        onClick={handleClick}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", // Custom box shadow
            width: "150px",
          },
        }}
      >
        <MenuItem onClick={handleProfilePageNavigation}>Profile</MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
