import {Component} from "react";

//props = {personName:"Raj", age:"29", role:"Trainer"}
export class Footer extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {brand:"Adidas",rating:"4.7"};
        //If you are writing the handleClick as a normal function the below line complusory
        // this.handleClick = this.handleClick.bind(this);
        //If you are writing the handleClick as a arrow function the above line is not required

    }

    handleClick = () => {
        
        this.setState({
            brand:"nike",
            rating:"4.9"
        });
    }

    render()
    {
        return(
            <div>
                <h1>His name is {this.props.personName} whose age is {this.props.age} working as {this.props.role}</h1>
                <h1>The most popular brand is {this.state.brand} whose rating is {this.state.rating}</h1>
                <button onClick={this.handleClick}>View latest result</button>
            </div>
        )
    }
}

/*

*/