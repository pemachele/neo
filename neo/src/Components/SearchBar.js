import React from 'react';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SuggestionCard from "./SuggestionCard";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from '@material-ui/core'


const styles = {
    main: {
        margin: '10px 10px 0px 10px',
        width: '500px'

    }
}
const useStyles = makeStyles(styles);


const SearchTab = props => {

    const classes = useStyles();




    return (
        <div>
            <Grid  container direction="column" justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        id="standard-basic"
                        label={<SearchIcon style={{marginBottom: '100px', paddingBottom: '100px'}}/>}
                        size='small'
                        variant='outlined'
                        className={classes.main}
                        onChange={props.handler}

                    />
                </Grid>

                {/*<Grid item xs={12} sm={8} md={8}>*/}
                {/*    <SuggestionCard/>*/}
                {/*</Grid>*/}

            </Grid>

        </div>


    )


}

export default SearchTab;