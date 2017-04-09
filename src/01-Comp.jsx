import React, { Component } from 'react';
import './style.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile.jsx';
import Gallery from './Gallery.jsx';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';

class Comp01 extends Component{

    constructor(props){
        super(props);
        this.state ={
            query: "",
            artist: null,
            tracks: []
        }
    }

    search(){
        console.log("this.state: ", this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
        // console.log("FETCH_URL: ", FETCH_URL);

            // Fetching the data from FETCH_URL
        fetch(FETCH_URL, {
            method: 'GET'
        })

            // Using a callback Function to grab the data
        .then(response => response.json())
        .then(json => {
        const artist = json.artists.items[0];
        this.setState({artist});

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            console.log('artist top tracks: ', json);
            const {tracks} = json;
            this.setState({tracks});
        })
        });
    }

    render(){
        return(
            <div className="container">

                    <div className="Tittle">ARTIST  MUSIC  PREVIEWS</div>

                    <FormGroup>
                        <InputGroup>

                            <FormControl
                                className="s-bar"
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

                    <Gallery tracks={this.state.tracks} />

                    <div className="bottom1 trans">
                        <div className="name"> <p>by: Edmundo Rubio</p> </div>
                        <div><a href="https://github.com/Edxael" target="blank"> <img className="icon" src={logo1} alt="??" /></a></div>
                        <div><a href="http://www.mycode.website/" target="blank"> <img className="icon" src={logo2} alt="??" /></a></div>
                    </div>

            </div>
        )
    }
}

export default Comp01;
