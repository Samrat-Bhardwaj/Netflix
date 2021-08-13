import React from "react";
import { Route, Redirect} from "react-router-dom"

export function IsUserValid({user,loggedInPath,children,...rest}) {
    return (
        <Route
        {...rest}
        render={()=>{
            if(!user){
                console.log(user);
                return children;
            }

            if(user){
                console.log("exs",user);
                return (
                    <Redirect
                    to={{
                        pathname:"browse"
                    }}></Redirect>
                );
            }
            return null;
        }}                              
        ></Route>
    );
}

export function ProtectedRoute({user,children,...rest}){
    return (
        <Route
        {...rest}
        render={({location})=>{
            if(user){
                return children;
            }

            if(!user){
                return (
                    <Redirect 
                    to={{
                        pathname:"signin",
                        state :{from :location},
                    }}
                    />
                );
            }
            return null;
        }}
        />
    )
}