import { AppBar, Container, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'
import AuthModal from './Authentication/AuthModal';
import UserSidebar from "./Authentication/UserSidebar";


const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "rgb(245,206,1)",
      fontFamily: "Times",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header() {
    const classes = useStyles();
    const { currency, setCurrency,user } = CryptoState();
  
    const history = useHistory();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => history.push(`/`)}
                variant="h4"
                className={classes.title}
              >
                Crypto Verse
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 ,color:"rgb(245,206,1)",textShadow: "0 0 5px goldenrod"}}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"} style={{color:"rgb(245,206,1)"}} >USD</MenuItem>
                <MenuItem value={"INR"} style={{color:"rgb(245,206,1)"}}>INR</MenuItem>
              </Select>
              {user ? <UserSidebar /> : <AuthModal />}
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;