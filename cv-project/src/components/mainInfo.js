import React from "react";

class MainInfo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <p>name:</p>
                <h1 className="name">{this.props.name}</h1>
                <p>phone:</p>
                <h2 className="phone">{this.props.phone}</h2>
                <p>email:</p>
                <h2 className="email">{this.props.email}</h2>
                <p>hehehe</p>
            </div>
        )
    }
}

export default MainInfo