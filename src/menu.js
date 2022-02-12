import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Newspage from './Newspage';

const Menu = () => {
    return(
        <div className='maindiv'>
            <div className='leftdiv'>
                <div className='menuinnerdiv d-flex flex-row justify-content-center'>
                    <img src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/" />
                    <div>
                        <h1 className='heading'> Hi Reader, </h1>
                        <p>Here's your News</p>
                    </div>
                </div>
                <div className='menuinnerdiv '>
                    <h1 className='head'>View Toggle</h1>
                    <center>
                        <button className='midbutton' > 👍</button>
                        <button className='midbutton'> 👎</button>
                    </center>
                </div>
                <div className='menuinnerdiv'>
                    <h1 className='head'>Have a Feedback?</h1>
                    <center>
                        <button className='button'>we're Listening!</button>
                    </center>    
                </div>
            </div>
            <div className='rightdiv'>
                <Newspage />
            </div>
        </div>    
    )
}

export default Menu;