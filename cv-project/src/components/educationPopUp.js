import React from "react";

class EducationPopUp extends React.Component {

    render() {
        return (
            <div className="popUp">
                <p className="firstElement">Education</p>
                <input type='text' onChange={this.props.education} />
                <p>Experience</p>
                <input type='text' onChange={this.props.experience}/>
                <p>Skills</p>
                <input type='text' onChange={this.props.skills}/>
                <button>Submit</button>
            </div>
        )
    }
}

export default EducationPopUp