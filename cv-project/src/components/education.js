import React from "react";

class Education extends React.Component {

    render() {
        return (
            <div>
                <h1 className="education">{this.props.name}</h1>
                <h2 className="experience">{this.props.phone}</h2>
                <h2 className="skills">{this.props.email}</h2>
                <p>education</p>
            </div>
        )
    }
}

export default Education