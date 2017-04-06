https://github.com/15Dkatz/ReactJS_VideoGuides/blob/master/musicMaster/src/App.jsx

------------------------------------------------------------
index.html
------------------------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"> -->
    <title>React App Template</title>
</head>
<body>

    <div id="root"></div>

</body>
</html>
------------------------------------------------------------



------------------------------------------------------------
index.js
------------------------------------------------------------
import React from 'react';
import ReacDOM from 'react-dom';
import Comp_01 from './01-Comp.jsx';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


ReacDOM.render(<Comp_01 />, document.getElementById('root'));
------------------------------------------------------------



------------------------------------------------------------
01-Comp.jsx
------------------------------------------------------------
import React, { Component } from 'react';
import './style.css';
import {FormGroup, FormControl, InputGroup, Glyphicon, Button} from 'react-bootstrap';


class Comp_01 extends Component{

    constructor(props){
        super(props);
        this.state ={
            query: ""
        }
    }

    search(){
        console.log("this.state: ", this.state);
        const BASE_URL = "https://api.spotify.com/v1/search?";
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log("FETCH_URL: ", FETCH_URL);
    }

    render(){
        return(
            <div className="container">

                    <div className="Tittle">Music App 2</div>

                    <FormGroup>
                        <InputGroup>

                            <FormControl
                                type="text"
                                placeholder="Search for an Artist...."
                                glyph="search"

                                    // This will load the: this.state = {query; ""} empty string with the value string on the form control(aka input area).
                                value={this.state.query}
                                onChange={event => {this.setState({query: event.target.value})}}

                                    // This is to make the Enter start the search without click the Icon
                                onKeyPress={event => {
                                    if(event.key === 'Enter'){
                                        this.search();
                                    }
                                } }
                            />


                                {/* This is the button and on click execute the anonimus function located: this.search() */}
                            <InputGroup.Addon onClick={() => this.search()}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>

                        </InputGroup>
                    </FormGroup>


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
------------------------------------------------------------



------------------------------------------------------------
style.css
------------------------------------------------------------
html body{
    background-color: rgb(0, 0, 0);
    color: rgb(211, 250, 245);
    /*background-image: url("IMG/back3.jpg");*/
    text-align: center;
    display: flex;
    justify-content: center;
}

.container{
    background-color: rgb(26, 0, 80);
    width: 500px;
    padding: 25px;
    margin-top: 55px;
    border: solid 2px white;
}

.Tittle{
    font-size: 26px;
    margin-bottom: 10px;
}
------------------------------------------------------------
