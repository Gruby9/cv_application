import React from "react";

class MainInfoPopUp extends React.Component {

    render() {
        return (
            <div className="mask">
                <div className="popUp">
                    <p class="firstElement">Name</p>
                    <input type='text' onChange={this.props.name} />
                    <p>Phone</p>
                    <input type='text' onChange={this.props.phone}/>
                    <p>Email</p>
                    <input type='text' onChange={this.props.email}/>
                    <button onClick={this.props.changeState}>Submit</button>
                </div>
            </div>
        )
    }
}

export default MainInfoPopUp