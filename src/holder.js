------------------------------------------------------------
index.html
------------------------------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
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


ReacDOM.render(<Comp_01 />, document.getElementById('root'));
------------------------------------------------------------



------------------------------------------------------------
01-Comp.jsx
------------------------------------------------------------
import React, { Component } from 'react';
import './style.css';

class Comp_01 extends Component{
    render(){
        return(
            <div className="container">

                    <div className="Title">Music App 2</div>

                    <div>
                        <input type="text" placeholder="Search Artist..."/>
                        <button>Search</button>
                    </div>

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
body{
    background-color: rgb(204, 249, 131);
    /*background-image: url("IMG/back3.jpg");*/
    text-align: center;
    display: flex;
    justify-content: center;
}

.container{
    background-color: aquamarine;
    width: 90vw;
    padding: 25px;
    margin-top: 55px;
    border: solid 2px black;
}

.Title{

}

.Profile{

}

.Gallery{

}
------------------------------------------------------------
