import React from "react";

class MainInfoPopUp extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <p>Name</p>
                <input type='text' onChange={this.props.name} />
                <p>Phone</p>
                <input type='text' onChange={this.props.phone}/>
                <p>Email</p>
                <input type='text' onChange={this.props.email}/>
                <button>Submit</button>
            </div>
        )
    }
}

export default MainInfoPopUp