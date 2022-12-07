import React from 'react';
import { CCard} from '@coreui/react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

export const ExamplePage = () => {

    return (
        <div>
            <h2>Matt Tinnel</h2>
            <div style={{fontSize:'10pt'}}>
            matttinnel@gmail.com | 503-853-9514
            <Link to="/github-tincaniam"><IconButton style={{color:'white'}}><GitHubIcon /></IconButton></Link>
            <Link to="/linkedin"><IconButton style={{color:'white'}}><LinkedInIcon /></IconButton></Link>
            </div>
                  
            <CCard style={{backgroundColor:'#4D4D4D', margin:'3%', padding:'3%'}}>
            <h2 style={{textAlign: 'left'}}>:Folio <Link to="/github-portfolio"><IconButton style={{color:'white', marginLeft:'0px !important'}}><GitHubIcon /></IconButton></Link></h2>
            <br></br>
            <img src={ "images/portFolio.png" } className="exampleImage" alt=""/>
            <br></br>
            <p className='exampleBody'>
                :Folio (Portfolio) is designed to be a simple and intuitive portfolio and project tracking app.
            </p>
            <p className='exampleBody'>
                Portfolio page inception! This project you're on now is itself a personal portfolio project, built with progessive technologies and practices.
            </p>
            <div className='exampleBody'>
            This project utilizes the MERN stack:
                <ul>
                    <li>Mongoose database</li>
                    <li>Express and Nodejs in the application layer</li>
                    <li>React for the presentation layer</li>
                </ul>
            </div>
            <div className='exampleBody'>
                This project also features:
            <ul className='exampleBody'>
                    <li>User registration/login with hashed and salted passwords.</li>
                    <li>Content that is dynamically generated on the page based on the contents of the databse for the user.</li>
                    <li>Unit Tests using Mocha and Chai.</li>
                </ul>
            </div>
            </CCard>

            <CCard style={{backgroundColor:'#4D4D4D', margin:'3%', padding:'3%'}}>
            <h2 style={{textAlign: 'left'}}>InterPyter <Link to="/github-interpyter"><IconButton style={{color:'white', marginLeft:'0px !important'}}><GitHubIcon /></IconButton></Link></h2>
            <br></br>
            <img src={ "images/interPyter.png" } className="exampleImage" alt=""/>
            <br></br>
            <p className='exampleBody'>
                InterPyter is a simple and stylish web based Python Compiler built using Django and Python. This also has examples of some of my other Python projects which can run on it.
            </p>
            </CCard>


        </div>
    );
}

export default ExamplePage;