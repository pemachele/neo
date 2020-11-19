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
    }
}));

const TweetCard = props => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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

    // const urlify = (text) =>{
    //     var urlRegex = /(https?:\/\/[^\s]+)/g;
    //     // return text.replace(urlRegex, function(url) {
    //     //     return '<a href="' + url + '">' + url + '</a>';
    //     // })
    //
    //     return text.replace(urlRegex, '<a href="$1">$1</a>')
    // }



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
                            />
                            <CardContent>
                                <p>
                                    {content.text }
                                </p>

                            </CardContent>

                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon/> {content.likes}
                                </IconButton>

                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                   <RepeatIcon/> {content.retweetCount}
                                </IconButton>
                            </CardActions>
                        </Card>
                    ) : <div> </div>}
                </div>



    );
}
export default TweetCard;