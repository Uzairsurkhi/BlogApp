import React from 'react';
import { AppBar, Toolbar, Typography, Switch, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/actions/themeActions';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Blog App</Typography>
        <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;