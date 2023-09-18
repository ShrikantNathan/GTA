import React from 'react'
import './DataScience.css'
import database from '../../assest/Database-img.png'
import vectorimg from '../../assest/Vectorimg.png'
import GoToTop from './Top'

function DataBase() {
    return (
        <div className='Cloudmain'>
            <div className='Cloud p-10'>

                <h1 className='Analytics line-height mt-5'> Database Servers <span className="spancloud">Management <br />
                    Services</span> </h1>

            </div>
            <div className='cloud-image'>
                <div className='imagecloud'>
                    <img src={database} alt='databseimg' height={300}></img>

                </div>    
                    <p className='cloudp p-10'>Ensuring Oracle, Hyper-V platform, MS Server 2015, and MS SQL databases are configured and maintained properly is a time-consuming task for IT departments. Georgetown Analytics and Technology can augment the customers’ internal skill set with comprehensive database server management. We offer a broad range of management services and will take the burden of ensuring the proper services for specific server and databases are utilized. Typical database services offered by Georgetown Analytics and Technology include:</p>
                    <div className="responsive-card">
                        <p className="card-content">
                            <ul >

                                <li>
                                    A system audit to document architecture and suggest improvements
                                </li>
                                <br />
                                <li>
                                    24/7 technical support of the server, operating system and database by experienced engineers
                                </li>
                                <br />
                                <li>
                                    Security and bug patch notifications for the operating system and database, and when approved, installation
                                </li>
                                <br />
                                <li>
                                    Monitor database and network availability
                                </li>
                                <br />
                                <li>
                                    Monitor database response time
                                </li>
                                <br />
                                <li>
                                    Monitor the server’s disk usage, processor usage and load average
                                </li>
                                <br />
                                <li>
                                    Visibility into Georgetown Analytics and Technology ‘s trouble ticket system via a secure portal
                                </li>
                                <br />
                                <li>
                                    Periodic activity reports
                                </li>
                                <br />
                                <li>
                                    Except for the initial system audit, service time to repair or otherwise service the monitored system is not included in this monitoring agreement.
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
    )
}

export default DataBase;