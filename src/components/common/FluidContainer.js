import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class FullWidthGrid extends React.Component {
  /*
  <div className="col col-lg-1 visible-lg hidden-xl">&nbsp; </div>
      <div className="col col-xl-2 visible-xl">&nbsp;</div>
      <div className="col col-sm-12 col-lg-10 col-xl-8" {...attributes}>
        {children}
      </div>
       */
  render(props) {
    const { classes, children, attributes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Hidden mdDown>
            <Grid item lg={1} xl={2}>
              <Paper className={classes.paper}>lg=1 xl=2</Paper>
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={10} xl={8}>
            <Paper className={classes.paper}>
              {' '}
              xs=12 lg=10 xl=8 <br />
              {children}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

/* FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};*/

export default withStyles(styles)(FullWidthGrid);
