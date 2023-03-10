import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styles/style.scss'
import MainInfo from './components/mainInfo';
import PopUpMainInfo from './components/popUpMainInfo';
import Education from './components/education';
import EducationPopUp from './components/educationPopUp'


class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        on: false,
        onOne: false,
        name: '',
        phone: '',
        email: ''
      }
    this.changeState = this.changeState.bind(this)
    this.changeStateOne = this.changeStateOne.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)

}

changeState() {
  if (this.state.on) {
    this.setState({on: false})
    console.log('false')
  } else {
    this.setState({on: true})
    console.log('true')
  }
}

changeStateOne() {
  if (this.state.onOne) {
    this.setState({onOne: false})
  } else {
    this.setState({onOne: true})
  }
}

handleNameChange(e) {
  this.setState({name: e.target.value})
}

handlePhoneChange(e) {
  this.setState({phone: e.target.value})
  console.log(e.target.value)
}

handleEmailChange(e) {
  this.setState({email: e.target.value})
}

  render() {

    let info
    if (this.state.on) {
      info = 
      <div>
        <p>Name</p>
        <input type='text' onChange={this.handleNameChange} />
        <p>Phone number</p>
        <input type='text' onChange={this.handlePhoneChange}/>
        <p>E-mail</p>
        <input type='text' onChange={this.handleEmailChange}/>
        <button>Submit</button>
      </div>
    } 

    let educationPopUp
    if (this.state.onOne) {
      educationPopUp = <EducationPopUp />
    }

    return (
      <div className='board'>
        <div className='page'>
          <div className='sidebar'>
            <MainInfo name={this.state.name} phone={this.state.phone} email={this.state.email}/>
            <button onClick={this.changeState}>Options</button>
            {info}
            <button onClick={this.changeStateOne} >Options2</button>
            {educationPopUp}
            <Education />
          </div>
          <div className='main'>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
