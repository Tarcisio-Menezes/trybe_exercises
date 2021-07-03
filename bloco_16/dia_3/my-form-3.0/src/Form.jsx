import React from 'react';
import { connect } from 'react-redux';
import Name from './Name';
import Email from './Email';
import Cpf from './Cpf';
import End from './End';
import City from './City';
import State from './State';
import Type from './Type';
import LastJob from './LastJob';
import Office from './Office';
import JobDescription from './JobDescription';
import SucessButton from './SucessButton';
import DisplayData from './DisplayData';
import { saveForm } from './redux/actions';

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.readForm = this.readForm.bind(this);
    this.validEnd = this.validEnd.bind(this);
    this.validCity = this.validCity.bind(this);
    this.officeAlert = this.officeAlert.bind(this);
    this.sendData = this.sendData.bind(this);
    
    this.state = {
      name: '',
      email: '',
      cpf: '',
      end: '',
      city: '',
      state: '',
      type: '',
      jobs: '',
      office: '',
      mouseEnter: false,
      jobDescription: '',
    };
  }

  readForm(event) {
    const value = event.target.type ==='checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [event.target.name]: value,
    });

  }

  validEnd(event) {
    this.setState({
      end: event.target.value.replace(/[`~!@#$%^&*+=><']/g, '')
    });
  }

  validCity(event) {
    this.setState({
      city: event.target.value.replace(/[`0123456789`]/g, '')
    });
  }

  officeAlert() {
    if(!this.state.mouseEnter) {
      alert('Preencha com cuidado esta informação.');

      this.setState({
        mouseEnter: true,
      });
    };
  }

  sendData() {
    const { name, email, cpf, end, city, state, type,
      jobs, office, mouseEnter, jobDescription } = this.state;
    this.props.saveForm({ name, email, cpf, end, city, state, type, jobs, office, mouseEnter, jobDescription });
  }

  render() {
 
    return (
      <div className="personal">  
        <h1 className="title">Cadastre seu currículo conosco</h1>
        <form action="" method="get">
          <Name
            value={ this.state.name }
            readForm={ this.readForm }
          />
          <br></br>
          <Email
            value={ this.state.email }
            readForm={ this.readForm }
          />
          <br></br>
          <Cpf
            value={ this.state.cpf }
            readForm={ this.readForm }
          />
          <br></br>
          <End
            value={ this.state.end }
            readForm={ this.readForm }
            validEnd={ this.validEnd }
          />
          <br></br>
          <City
            value={ this.state.city }
            readForm={ this.readForm }
            validCity={ this.validCity }
          />
          <br></br>
          <State
            value={ this.state.state }
            readForm={ this.readForm }
          />
          <br></br>
          <Type
            value={ this.state.type }
            readForm={ this.readForm }
          />
          <br></br>
          <LastJob
            value={ this.state.jobs }
            readForm={ this.readForm }
          />
          <br></br>
          <Office
            value={ this.state.office }
            readForm={ this.readForm }
            officeAlert={ this.officeAlert }
          />
          <br></br>
          <JobDescription
            value={ this.state.jobDescription }
            readForm={ this.readForm }
          />
          <br></br>
          <div className="buttons">
          <SucessButton
            save={ () => this.sendData }
          />
          </div>
        </form>

        <div className="display">
          <DisplayData />  
        </div>

      </div>
    );
  }

}

const mapDispatchToProps = dispatch  => ({
  saveForm: e => dispatch(saveForm(e))
});

export default connect(null, mapDispatchToProps)(Form);
