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
