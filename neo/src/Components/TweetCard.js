import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RepeatIcon from '@material-ui/icons/Repeat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '500px',
        marginTop: "10px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    main: {
        maxHeight: '600px',
        overflowY: 'scroll'
    },
    cardHeader:{
        margin:'0px',
        paddingBottom:'1px'
    },
    cardContent:{
        margin:'0px',
        paddingBottom:'1px'
    }
}));

const TweetCard = props => {
    const classes = useStyles();




    //take the post data and store in content
    const content = props.post;

    const mediaCard = (content) => {
        if (content.mediaType === "no") {
            return null;
        } else {
            return <CardMedia
                className={classes.media}
                image={content.media}
                title="Paella dish"
            />

        }
    }




    return (

                <div className={classes.main} >
                    {content ? content.map((content, i) =>
                        <Card className={classes.root} id={i}  >
                            <CardHeader

                                avatar={
                                    <Avatar aria-label="recipe" src={content.profilePic} className={classes.avatar}>

                                    </Avatar>
                                }

                                title={content.userScreenName}
                                subheader={content.userName}
                                className={classes.cardHeader}
                            />
                            <CardContent className={classes.cardContent}>
                                <p>
                                    {content.text }
                                </p>

                            </CardContent>

                            <CardActions disableSpacing>
                                <IconButton  style={{color:'red'}}>
                                    <FavoriteIcon  />
                                </IconButton>
                                {content.likes}

                                <IconButton style={{color:'blue'}}>
                                   <RepeatIcon/>
                                </IconButton>
                                {content.retweetCount}
                            </CardActions>
                        </Card>
                    ) : <div> </div>}
                </div>



    );
}
export default TweetCard;