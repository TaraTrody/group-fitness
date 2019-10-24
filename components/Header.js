import Link from 'next/link';

import { Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import { styleToolbar } from './SharedStyles';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Exo',
    textAlign: 'vertical',
    '&::after': {
      color: '#FFF',
    },
  },
  linkStyle: {
    margin: '0px 20px 0px auto',
    color: '#363838',
    '&:hover': {
      color: '#FF7000',
    },
  },
  buttonLink: {
    '&:active': {
      color: '#FFF',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
  logo: {
    fontFamily: 'Exo',
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#FF7000',
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justify="space-between" align="center">
          <Link href="https://spotify.com">
            <a>
              <Typography classes={{ root: classes.logo }} variant="h5">
                Group Fitness Instructors
              </Typography>
            </a>
          </Link>
          <Grid item>
            <Link href="/">
              <a className={classes.linkStyle}>Join as Instructor</a>
            </Link>
            <Link href="/">
              <a className={classes.linkStyle}>FAQ</a>
            </Link>
            <Link href="/">
              <a className={classes.linkStyle} classes={{}}>
                Log in
              </a>
            </Link>
            <Link href="/">
              <a className="classes.linkStyle">
                <Button
                  classes={{
                    root: classes.root,
                    label: classes.label,
                  }}
                  variant="contained"
                  color="primary"
                >
                  SIGN UP
                </Button>
              </a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Header;
