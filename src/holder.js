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
import Comp01 from './01-Comp.jsx';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';


ReacDOM.render(<Comp01 />, document.getElementById('root'));
------------------------------------------------------------



------------------------------------------------------------
01-Comp.jsx
------------------------------------------------------------
import React, { Component } from 'react';
import './style.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile.jsx';

class Comp01 extends Component{

    constructor(props){
        super(props);
        this.state ={
            query: "",
            artist: null
        }
    }

    search(){
        console.log("this.state: ", this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log("FETCH_URL: ", FETCH_URL);

            // Fetching the data from FETCH_URL
        fetch(FETCH_URL, {
            method: 'GET'
        })

            // Using a callback Function to grab the data
        .then(response => response.json())
        .then(json => {
        const artist = json.artists.items[0];

        this.setState({artist});
        console.log("Artist: ", artist);
        });
    }

    render(){
        return(
            <div className="container">

                    <div className="Tittle">Music 4U</div>

                    <FormGroup>
                        <InputGroup>

                            <FormControl
                                type="text"
                                placeholder="Search for an Artist...."

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



                            <InputGroup.Addon onClick={() => this.search()}>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>

                        </InputGroup>
                    </FormGroup>


                    <Profile artist={this.state.artist} />

                    <div className="Gallery">
                        Gallery
                    </div>

            </div>
        )
    }
}

export default Comp01;
------------------------------------------------------------



------------------------------------------------------------
style.css
------------------------------------------------------------
html body{
    background-color: rgb(236, 247, 140);
    color: rgb(0, 0, 0);
    /*background-image: url("IMG/back3.jpg");*/
    text-align: center;
    display: flex;
    justify-content: center;
}

.container{
    background-color: rgb(151, 252, 207);
    width: 500px;
    padding: 25px;
    margin-top: 55px;
    border: solid 8px rgb(210, 245, 255);
    box-shadow: 7px 7px 7px #888888;
}

.Tittle{
    font-size: 26px;
    margin-bottom: 10px;
    font-weight: bold;
    /*margin-top: 10px;*/
}

/*-----------  Profiles  ------------*/
.profile{
    display: flex;
    justify-content: center;
}

.profile-info{
    margin-left: 10px;
    text-align: left;
}

.pro-pic{
    width: 150px;
    height: 150px;
    border: 3px solid rgb(0, 0, 0);
    border-radius: 75px;
    object-fit: cover;
}

.profile-name{
    color: rgb(64, 108, 238);
    font-size: 26px;
    margin-top: 25px;
}

.profile-followers, .profile-genres{
    font-size: 18px;
}
------------------------------------------------------------
