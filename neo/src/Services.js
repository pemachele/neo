import axios from 'axios';

const url = 'http://ec2-13-58-137-105.us-east-2.compute.amazonaws.com/index.php/Neo/searchTweet';

export const getResults= async (userInput) =>{
    try{
        const {data:{statuses}} =await axios({
            method: 'post',
            url: url,
            data: JSON.stringify({
                query: userInput,
                count: 50
            })

        })

        const modifiedData = statuses.map((tweet, i) => ({
            id: tweet.id,
            text: tweet.text,
            userId: tweet.user.id,
            userName: tweet.user.name,
            userScreenName: tweet.user.screen_name,
            tweetUrl: tweet.entities.urls,
            profilePic: tweet.user.profile_image_url_https,
            retweetCount: tweet.retweet_count,
            likes: tweet.favorite_count
        }))
        return modifiedData
    }catch (error) {
      console.log('error message',error)
        
    }










}


export function getResults2() {

}



