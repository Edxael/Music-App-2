import React, { Component } from 'react';
import './style.css';
import {FormGroup, FormControl, InputGroup, Glyphicon, Button} from 'react-bootstrap';

class Comp_01 extends Component{
    render(){
        return(
            <div className="container">

                    <div className="Title">Music App 2</div>


                    <InputGroup>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search for an Artist...." />
                            <Glyphicon glyph="home" />
                        </FormGroup>
                    </InputGroup>

                    <div>
                        <Button onClick={this._onGetHome}> Push-It
                          <Glyphicon glyph="home" />
                        </Button>
                    </div>

                    Possible solution
                    http://stackoverflow.com/questions/18369036/bootstrap-3-glyphicons-are-not-working



                    <span className="glyphicon glyphicon-envelope"></span>

                    <div className="Profile">
                        <div>Artis Picture</div>
                        <div>Artis Name</div>
                    </div>

                    <div className="Gallery">
                        Gallery
                    </div>

            </div>
        )
    }
}

export default Comp_01;
