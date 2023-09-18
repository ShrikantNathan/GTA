import React from 'react'
import './DataScience.css'
import cloud from '../../assest/Cloud 1.png'
import vectorimg from '../../assest/Vectorimg.png'
import GoToTop from './Top'



function Cloud() {
    return (
        <div className='Cloudmain'>
            <div className='Cloud p-10'>

                <h1 className='Analytics line-height mt-5'> Data Science <span className="spancloud"> and Computer <br />
                    Engineering Services</span> </h1>

            </div>
            <div className='cloud-image'>
                <div className='imagecloud'>
                    <img src={cloud} alt='cloudimg' height={300}></img>
                </div>   
               
                    <p className='cloudp p-10'>We will serve as your computer science and technical consultant for work <br />involving both application and development of mathematical, statistical and <br />computer-simulated models andapplications.</p>
                 
                    <div className="responsive-card">
                        <ul className="card-content" >
                            <li>
                                Apply mathematical and software engineering principles and disciplines to the building of software systems
                            </li>
                            <br />
                            <li>
                                Perform various duties concerned with the application of, or research into, computer science methods and techniques to store, manipulate, transform or present information
                            </li>
                            <br />
                            <li>
                                Provide professional competence in the application of the theoretical foundations of computer science, including computer system architecture, system software organization and the modeling of the representation and transformation of information structure
                            </li>
                            <br />
                            <li>
                                Apply specialized knowledge of the design characteristics, limitations, and potential applications of information systems, and of broad areas of applications of computing which have common structures, processes, and techniques
                            </li>
                            <br />
                            <li>
                                Perform significant software engineering program management duties related to the System Engineering Process (SEP) which supports complex, often highly specialized, state-of-the-art software systems
                            </li>
                            <div className="vectorimg">
                                <img alt="vectorimg" src={vectorimg} style={{ opacity: 0.50 }} width={118}></img>
                            </div>
                        </ul>
                    </div>
                </div>
                <GoToTop />
            </div>
   
    )
}

export default Cloud;