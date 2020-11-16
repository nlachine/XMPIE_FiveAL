import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import urlGenerator from '$ustoreinternal/services/urlGenerator'
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
                // onClick={handleToggle}
                onMouseOver={handleOpen}
                href={urlGenerator.get({ page: 'Occasions' })}
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

                                    
                                    {/*Birthday*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '51'})}><MenuItem onClick={handleClose}>Birthday</MenuItem></a>

                                    {/*Holiday*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '52'})}><MenuItem onClick={handleClose}>Holiday</MenuItem></a>

                                    {/*Just Because*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '53'})}><MenuItem onClick={handleClose}>Just Because</MenuItem></a>

                                    {/*Sympathy*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '54'})}><MenuItem onClick={handleClose}>Sympathy</MenuItem></a>

                                    {/*Congratulations*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '55'})}><MenuItem onClick={handleClose}>Congrats</MenuItem></a>

                                    {/*Thank you*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '50'})}><MenuItem onClick={handleClose}>Thank you</MenuItem></a>

                                    {/*Baby*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Category', id: '56'})}><MenuItem onClick={handleClose}>Baby</MenuItem></a>

                                    {/*See All Occasions*/}<a className="dropdown-link" href={urlGenerator.get({ page: 'Occasions' })}><MenuItem onClick={handleClose}>All Occasions</MenuItem></a>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
};
