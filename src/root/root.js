import React from "react";
import Button from "../components/button";
// import Test from "../components/test/test";


function Root () {
    return(
        <div>
           <Button width='300' height='60' bg='lime' br="25">Buy</Button> 
           <Button width='200' height='40' bg='violet' color='#333' br='50'>Login</Button> 
           <Button width='250' height='50' bg='yellow' color='red' br='15'>Register</Button> 
           <Button width='270' height='55' bg='pink' color='grey' br='18'>Show</Button> 
        </div>
    )
}

export default Root