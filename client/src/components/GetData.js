import React, { useContext, useEffect } from "react";
import {GET_DATA} from "./queries";
import {Query} from "react-apollo";
import Store from "./store";

const SetData = ({type,payload}) =>{
    const { dataDispatch } = useContext(Store);
    useEffect(()=>dataDispatch({type, payload}),[]);
    return <span>{type==='ERROR'?'Error':'Success. Check Console'}</span>
}


const GetData = () => {
    return (
        <Query query={GET_DATA}>
        {
            ( {loading, data, error} ) => {
                if(loading) return <span>Loading</span>
                if(error) return <SetData type={'ERROR'} payload={'error'}/>
                if(data) return <SetData type={'ADD_DATA'} payload={data}/>
            }
        }
        </Query>
        );
}
export default GetData;