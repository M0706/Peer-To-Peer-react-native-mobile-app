import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import logo from '../Assets/img/logo.png';
import { Button, Container, Dialog, Typography } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import Image from 'react-bootstrap/Image';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  logo: {
    marginTop: 6,
    height: 50,
  },
  button: {
    textTransform: 'none',
    marginRight: 10,
  },
}));

export default function Header() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container className={classes.toolbar} >
        <Toolbar>
          <Image src={logo} alt={'logo'} className={classes.logo} />

          <div style={{ flex: 1 }}></div>

          <Button
            color='primary'
            className={classes.button}
          >
            <ListAltOutlinedIcon style={{ marginRight: 2 }} />
            <DropdownButton id="dropdown-item-button" title="My Actions" style={{marginRight: 10}}>
                <Dropdown.Item as="button">Take a Test</Dropdown.Item>

            </DropdownButton>
          
          </Button>

          {/* Log out button only is currently logged in */}
          <Button color='primary' className={classes.button} >
          <Button
            color='primary'
            className={classes.button}
          >
            <PersonIcon style={{ marginRight: 10 }} />
            <DropdownButton id="dropdown-item-button" title="My Account" style={{marginRight: 20}}>
                <Dropdown.Item as="button">My Subscriptions</Dropdown.Item>

            </DropdownButton>
          
          </Button>
            <ExitToAppIcon style={{ marginRight: 3 }} />
            <Typography>
              Submit
            </Typography>
          </Button>

        </Toolbar>
      </Container>
    </React.Fragment >
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};