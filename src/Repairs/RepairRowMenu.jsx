import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItemPaid from "./MenuItemPaid"
import MenuItemComplete from './MenuItemComplete'
import MenuItemDelete from '../Buttons/MenuItemDelete'


export default function RepairRowMenu({ repair, openMenuId, onMenuToggle }) {
  const anchorRef = React.useRef(null);
  const {_id: id} = repair

  const handleToggle = (event) => {
    event.stopPropagation()
    onMenuToggle(id);
  };

  const open = openMenuId === id;

  const handleClose = (event) => {
    event.stopPropagation()
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    onMenuToggle(null);
  };

  function handleListKeyDown(event) {
    event.stopPropagation()
    if (event.key === "Tab") {
      event.preventDefault();
      onMenuToggle(null);
    } else if (event.key === "Escape") {
      onMenuToggle(null);
    }
  }


  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MoreHorizIcon size="small" sx={{ color: "grey" }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="right-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>
                      <MenuItemPaid repair={repair} />
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <MenuItemComplete repair={repair} />
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <MenuItemDelete id={repair._id} path='repairs'/>
                    </MenuItem>

   
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
