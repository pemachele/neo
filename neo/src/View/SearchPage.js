import React,{useState} from "react";
//material ui components
import {Grid} from "@material-ui/core";

//custom components
import TweetCard from "../Components/TweetCard";
import SearchTab from "../Components/SearchBar"

import{getResults} from "../Services";



const SearchPage =()=> {

    const[content,setContent]=useState([] );


    //handler for searching query
    const searchHandler =async (event) =>{
        setContent ( await getResults(event.target.value))
    }


    return (
        <Grid  container direction="column" justify="center" alignItems="center">
            <Grid item xs={12} sm={8} md={8}>
                <SearchTab handler={searchHandler} />
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
                <TweetCard
                    post={content}
                />
            </Grid>


        </Grid>





    );
}

export default SearchPage;
