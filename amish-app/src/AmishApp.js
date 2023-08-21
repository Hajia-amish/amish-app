import { Component } from "react";
import Description from "./Description";
import Title from "./Title";
import Image from "./Image";

class AmishApp extends Component{
    render(){
        return(
            <div className='flex'>
                <Image />
                <div className="sub">
                    <Title />
                    <Description />
                </div>
            </div>
        )
    }
}
export default AmishApp; 