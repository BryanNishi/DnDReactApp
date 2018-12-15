import React from 'react';
import './DM.css';
import DM_ScreenPDF from '../../assets/images/dmScreen.pdf'
import NavBar from '../../components/NavBar'


const DM = () => (
    <div>
        <NavBar />

    <div class="container offset-sm-2 col-sm-10">
        <div class="dmScreen">
            <h1>DM Screen</h1>
            <iframe src={DM_ScreenPDF} width="1200" height="500" className="DM_Screen" />
        </div>

    </div>

    </div>
);


export default DM