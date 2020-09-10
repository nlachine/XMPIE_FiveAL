import React from 'react';
import { Box, Button, ClickAwayListener } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './SimpleMenu.scss'


const ButtonDropDown = withStyles((theme) => ({
    root: {
        padding: '1.5%',
        color: '#ec5f58',
        fontSize: '1rem',
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 'bold',
        textTransform: 'none'
    },
    '@media (max-width: 1200px)': {
        root: {
            display: 'none',
        },
    }
}))(Button);

const DropMenu = withStyles((theme) => ({
    root: {
    },
}))(Menu);

const CloseItem = withStyles((theme) => ({
    root: {
        color: '#ec5f58',
        fontWeight: 'bold',
    },
}))(MenuItem);



class SimpleMenu extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="Dropdown-wrapper">
                <ButtonDropDown
                    className="button"
                    aria-owns={this.state.open ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    onMouseOver={this.handleClick}
                >Occasions
                </ButtonDropDown>
                <DropMenu
                    className="menu"
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                    onClickAway={this.handleRequestClose}

                >

                    <MenuItem onClick={this.handleRequestClose}>Thank You</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Sympathy</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Friendship</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                    <CloseItem onClick={this.handleRequestClose}>Close</CloseItem>
                </DropMenu>
            </div>
        );
    }
}

export default SimpleMenu;
