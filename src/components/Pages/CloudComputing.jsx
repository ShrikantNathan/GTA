import React from 'react'
import './DataScience.css'
import '../header/Customer.css'
import database from '../../assest/Database-img.png'
import vectorimg from '../../assest/Vectorimg.png'
import GoToTop from './Top'


function CloudComputing() {
    return (
        <>
            <div className='Cloudmain'>
                <div className='Cloud p-10'>
                    <h1 className='Analytics line-height mt-5'>Cloud Computing <span className="spancloud">and Engineering<br />
                        Services</span> </h1>
                </div>
                <div className='cloud-image'>
                    <div className='imagecloud'>
                        <img src={database} alt='databseimg' height={300}></img>
                    </div>
                    <p className='cloudp p-10'>Plan, participate in or execute assigned audits and special projects       including investigations Perform risk analysis of functions and activities to determine the nature of operations and the adequacy of the system of internal control to achieve established objectives
                        Develop, perform, and document testing and walkthroughs of IT processes and controls
                        Evaluate the adequacy of the security and processing controls as they relate to each audit, and the effectiveness of general and application computer controls in effect in the IT environment
                        Provide auditing and information systems technical assistance</p>
                    <div className="responsive-card">
                        <p className="card-content">
                            <ul >
                                <li>
                                    Manage and prioritize multiple assignments including all audits and projects
                                </li>
                                <br />
                                <li>
                                    Make IT leading practice recommendations to address improvement opportunities and perform follow-up
                                </li>
                                <br />
                                <li>
                                    Work closely with directors and managers on risk assessment and audit planning

                                </li>
                                <br />
                                <li>
                                    Review the means of safeguarding information assets and monitoring of ongoing performance metrics established by your IT and Security departments
                                </li>
                                <br />
                                <li>
                                    Evaluate management processes ensuring data assets are formally managed and fully utilized throughout the organization
                                </li>
                                <br />
                                <li>
                                    Understand corporate-wide data strategy, corporate structure, and defined protocol of data governance program
                                </li>
                                <br />
                                <li>
                                    Assess parameters and data definitions developed to ensure data are reliable, accurate, consistent, and effective when stored in a database
                                </li>
                                <br />
                                <li>
                                    Examine effective storage of data within data warehouses
                                </li>
                                <br />
                                <li>
                                    Analyze data utilization capabilities, allowing users to access, manipulate, create, and share data seamlessly
                                </li>
                                <div className="vectorimg">
                                    <img alt="vectorimg" src={vectorimg} style={{ opacity: 0.50 }} width={118}></img>
                                </div>

                            </ul>
                        </p>
                    </div>
                </div>
                <GoToTop />
            </div>
        </>
    )
}


export default CloudComputing;