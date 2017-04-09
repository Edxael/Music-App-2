import React, { Component } from 'react';
import './style.css';


class Gallery extends Component {

    constructor(props){
        super(props);
        this.state = {
            playingUrl: "",
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl){
        let audio = new Audio(previewUrl);
        if (!this.state.playing){
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else{
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            } else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }

    render() {

        const { tracks } = this.props;
        return(
            <div className="gal-cont">
                <h3 className="t-1">Song Previews:</h3>
                {tracks.map((track, k) => {

                    const trackImg = track.album.images[0].url;

                    return(
                        <div key={k} className="track" >
                            <img src={trackImg} className="track-img" alt="Y la Tack Pic?" onClick={() => this.playAudio(track.preview_url)} />
                            <div className="t-play" onClick={() => this.playAudio(track.preview_url)}>{track.name}>

                                <div className="t-play-in">
                                        &#9654;
                                    {/* {this.state.playingUrl === track.preview_url ? <span>| |</span> : <span>&#9654;</span> } */}

                                </div>
                            </div>
                            <p className="track-text" onClick={() => this.playAudio(track.preview_url)}>{track.name}</p>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Gallery;
