import React from "react";

class Education extends React.Component {

    render() {
        return (
            <div>
                <h1>Education:</h1>
                <h1 className="education">{this.props.education}</h1>
                <h2>Experience:</h2>
                <h2 className="experience">{this.props.experience}</h2>
                <h2>Skills:</h2>
                <h2 className="skills">{this.props.skills}</h2>
            </div>
        )
    }
}

export default Education