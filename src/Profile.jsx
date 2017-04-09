import React, { Component } from 'react';
import './style.css';


class Profile extends Component{
    render() {
        let pic1 = "https://images.vexels.com/media/users/3/130305/isolated/lists/b5886e95f67f09fdbefbf9f8f0e2390a-female-singer-silhouette.png";
        let artist = { name: "Artist", followers: {total: "0"}, images: [{url: pic1}], genres: []};
        artist = this.props.artist !== null ? this.props.artist : artist;

        return(
            <div className="profile">
                <img src={artist.images[0].url} alt="Y La Pic?" className="pro-pic" />
                <div className="profile-info">
                    <div className="profile-name">Name: {artist.name}</div>
                    <div className="profile-followers">Followers: {artist.followers.total}</div>
                    <div className="profile-genres">Geners:
                        {
                            artist.genres.map((genre, k) => {
                                genre = genre !== artist.genres[artist.genres.length-1] ? ` ${genre},` : ` & ${genre}`;
                                return (
                                    <span key={k}>{genre}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
