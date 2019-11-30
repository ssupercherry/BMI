import React, {Component} from 'react';
import './Home.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

class Welcome extends Component {

render() {
return (
<div className="bg">

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<h1 style={{marginLeft:'45%'}}>
     BMI

  </h1>
  <br/><br/><br/><br/>
<div className="d-flex flex-column" >
  <ButtonToolbar size="sm">
    <Button variant="dark" href="/login" style={{marginLeft:'45%'}}>Login</Button>




  </ButtonToolbar>
  <ButtonToolbar size="sm">



    <Button variant="light" href="/signup" style={{marginLeft:'45%'}} >Signup</Button>


  </ButtonToolbar>


  </div>

</div>
);
}
}
export default Welcome;
