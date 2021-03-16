import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Clock from './clock';


const Header = () => {
    return (
        <>
            <Grid container>
                <Grid item xs={8}>
                    <Button><Link to='/' >Home </Link></Button>
                    <Button><Link to='/replication'>Replication Status</Link></Button>
                    <Button><Link to='/storage'>Storage Utilization</Link></Button>
                    <Button><Link to='/routes'>Route</Link></Button>
                    <Button><Link to="/cursorPosition">Cursor Position</Link></Button>
                </Grid>
                <Grid item xs={4} style={{textAlign: 'right'}}>
                    <div>
                        <Clock />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Header;