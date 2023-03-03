import React, {Component} from "react";
import Btn from './style.jsx'


class Button extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        const {
            children, 
            width, 
            height, 
            bg, 
            color, 
            br,
            ml, 
            mt, 
            mr, 
            mb, 
            pl, 
            pt, 
            pr, 
            pb
        } = this.props
        return <Btn 
            width={width}
            height={height} 
            color={color} 
            bg={bg}
            br={br}
            ml={ml}
            mt={mt}
            mr={mr}
            mb={mb}
            pl={pl}
            pt={pt}
            pr={pr}
            pb={pb}
            >{children}
            </Btn>;
    }
}

export default Button