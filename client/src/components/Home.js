import React from "react";
import {HOME_PAGE} from "./queries";
import {Query} from "react-apollo";
const Home = 
() => <Query query={HOME_PAGE}>
{
    ( {loading, data, error} ) => {
        if(loading) return <span>Loading</span>
        if(error) return <span>Error</span>
        if(data) {
            console.log(data);
            return <span>Success. Check Console</span>
        }
    }
}
</Query>;
export default Home;