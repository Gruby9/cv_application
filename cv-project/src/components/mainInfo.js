import React from "react";

class MainInfo extends React.Component {

    render() {
        return (
            <div>
                <h1 className="name">{this.props.name}</h1>
                <h2 className="phone">{this.props.phone}</h2>
                <h2 className="email">{this.props.email}</h2>
                <p>hehehe</p>
            </div>
        )
    }
}

export default MainInfo