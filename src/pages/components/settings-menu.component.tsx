import React, { useMemo } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router";
import { useAuth } from "../../providers/auth.provider";

const SettingsMenu: React.FC = () => {
  const navigate = useNavigate();
  const { removeToken } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = useMemo(() => {
    return [
      {
        title: "Preferences",
        onClick: () => {
          handleClose();
          navigate("/settings");
        },
      },
      {
        title: "Logout",
        onClick: () => {
          removeToken();
          handleClose();
        },
      },
    ];
  }, []);

  return (
    <>
      <IconButton
        id="settings-button"
        aria-controls={open ? "settings-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        MenuListProps={{
          "aria-labelledby": "settings-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem key={option.title} onClick={option.onClick}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SettingsMenu;
