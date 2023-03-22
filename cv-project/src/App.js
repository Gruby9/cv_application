import logo from './logo.svg';
import './App.css';
import React from 'react';
import './styles/style.scss'
import MainInfo from './components/mainInfo';
import MainInfoPopUp from './components/mainInfoPopUp';
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
        email: '',
        edu: '',
        exp: '',
        skills: ''
      }
    this.changeState = this.changeState.bind(this)
    this.changeStateOne = this.changeStateOne.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.getEdu = this.getEdu.bind(this)
    this.getExp = this.getExp.bind(this)
    this.getSkills = this.getSkills.bind(this)
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
}

handleEmailChange(e) {
  this.setState({email: e.target.value})
}

getEdu(e) {
  this.setState({edu : e.target.value})
}

getExp(e) {
  this.setState({exp : e.target.value})
}

getSkills(e) {
  this.setState({skills : e.target.value})
}

  render() {


    return (
      <div className='board'>
        <div className='page'>
          <div className='sidebar'>
          </div>
          <div className='main'>
          {this.state.on ? (<MainInfoPopUp name={this.handleNameChange} phone={this.handlePhoneChange} 
            email={this.handleEmailChange} changeState={this.changeState}/>) : ('')}
          <MainInfo name={this.state.name} phone={this.state.phone}
            email={this.state.email}  />
          <button onClick={this.changeState}>Options</button>
          <button onClick={this.changeStateOne} >Options2</button>
          {this.state.onOne ? (<EducationPopUp education={this.getEdu} experience={this.getExp} 
            skills={this.getSkills} />) : ('')}  
          <Education education={this.state.edu} experience={this.state.exp}
            skills={this.state.skills} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
