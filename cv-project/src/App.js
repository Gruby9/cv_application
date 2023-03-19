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
        mainInfo: {
          name: '',
          phone: '',
          email: '',
        },
        edu: ''
      }
    this.changeState = this.changeState.bind(this)
    this.changeStateOne = this.changeStateOne.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.getEdu = this.getEdu.bind(this)
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
  this.setState({mainInfo: {name: e.target.value}})
}

handlePhoneChange(e) {
  this.setState({mainInfo: {phone: e.target.value}})
}

handleEmailChange(e) {
  this.setState({mainInfo: {email: e.target.value}})
}

getEdu(e) {
  this.setState({edu : e.target.value})
  console.log(e.education)
}

  render() {


    return (
      <div className='board'>
        <div className='page'>
          <div className='sidebar'>
            <MainInfoPopUp name={this.handleNameChange} phone={this.handlePhoneChange} 
              email={this.handleEmailChange} />
            <MainInfo mainInfo={this.state.mainInfo}
              // name={this.state.name} phone={this.state.phone} email={this.state.email}
              />
            <button onClick={this.changeState}>Options</button>
            <button onClick={this.changeStateOne} >Options2</button>
            <EducationPopUp func={this.getEdu}/>
            <Education name={this.state.edu}/>
          </div>
          <div className='main'>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
