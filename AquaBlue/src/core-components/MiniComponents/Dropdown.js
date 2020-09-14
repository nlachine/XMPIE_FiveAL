import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import './Dropdown.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export default function Dropdown() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
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
        <div className="dropdown">
            <Button className="dropdown-button"
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                onMouseOver={handleOpen}
            >
                Occasions
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className="pop-up-menu">
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/27/"><MenuItem onClick={handleClose}>Birthday</MenuItem></a>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/28/"><MenuItem onClick={handleClose}>Congratulations</MenuItem></a>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/29/"><MenuItem onClick={handleClose}>Holiday</MenuItem></a>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/30/"><MenuItem onClick={handleClose}>Friendship</MenuItem></a>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/32/"><MenuItem onClick={handleClose}>Sympathy</MenuItem></a>
                                    <a className="dropdown-link" href="http://mk-xmpie.mk.local/ustorethemes/FALVersionOne/7/en-US/category/33/"><MenuItem onClick={handleClose}>Thank you</MenuItem></a>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
};
