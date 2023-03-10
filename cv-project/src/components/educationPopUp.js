import React from "react";

class EducationPopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            education: '',
            experience: '',
            skills: ''
        }

        this.handleEducationChange = this.handleEducationChange.bind(this)
    }

    handleEducationChange(e) {
        this.setState({education: e.target.value})
    }

    render() {
        return (
            <div>
                <p>Education</p>
                <input type='text' onChange={this.handleEducationChange} />
                <p>Experience</p>
                <input type='text' />
                <p>Skills</p>
                <input type='text' />
                <button>Submit</button>
            </div>
        )
    }
}

export default EducationPopUp