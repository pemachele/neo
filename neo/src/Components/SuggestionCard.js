import React, {useState} from 'react';
import { Paper,Grid } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";


const styles = {
    main: {

        width: '500px',
        margin:'10px'

    },
    suggestionText:{
       alignContent:'left',
        borderBottom: '1px solid #0001',
        borderWidth:'10px'

    }
}
const useStyles = makeStyles(styles);

const SuggestionCard = () => {
    const classes = useStyles();

    const [suggestion, setSuggestion] = useState(['trump','Peter','machele']);

    return (
        <Paper elevation={3} className={classes.main} >
            {suggestion ? suggestion.map((suggestion,i)=>
                <div className={classes.suggestionText}>
                    {suggestion}
                </div>
            ):<div> no suggestion</div>}

        </Paper>


    )

}

export default SuggestionCard;