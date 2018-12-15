import React from 'react';
import './DM.css';
import DM_ScreenPDF from '../../assets/images/dmScreen.pdf'
import NavBar from '../../components/NavBar'


const DM = () => (
    <div className="DM-Page">
        <NavBar />
        <div className="row">
            <div className="col-sm-2 DM-Notes">
                <div className="fixed-Notes">
                    <h2>DM's Notes</h2>
                    <textarea rows="15" cols="30">Type Notes Here</textarea>

                </div>
            </div>
            <div class="col-sm-10">
                <div className="dmScreen">
                    <h1>DM Screen</h1>
                    <iframe src={DM_ScreenPDF} width="1200" height="500" className="DM_Screen" title="DM Screen" />
                </div>
            </div>

        </div>

        
    </div>
);


export default DM