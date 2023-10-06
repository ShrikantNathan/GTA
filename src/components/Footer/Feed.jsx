import React, { Component } from 'react'
import './Feedback.css'
import icon from '../../assest/Form-img.png'
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from 'react-responsive-carousel';
import logoicon from "../../../src/assest/Group 139.svg"
// import icon1 from "../../assest/Ellipse 73.svg"
// import icon2 from "../../assest/Ellipse 73(3).svg"
// import icon3 from "../../assest/icon3.svg"
// import icon4 from "../../assest/icon4.svg"


export class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			LastName: '',
			email: '',
			Cname: '',
			number: '',
			message: '',
			SelectService: ''
		};
	}


	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = async (event) => {
		event.preventDefault();
		const { name, LastName, email, Cname, number, message,SelectService } = this.state;

		try {
			const response = await fetch('http://40.112.58.27:3002/raise-query/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					'first_name': name,
					'last_name': LastName,
					'email': email,
					'company': Cname,
					'phone_number': number,
					'service': SelectService, 
					'enquiry': message,
				}),
			});

			if (response.ok) {
				console.log('Form submitted successfully');
				this.setState({
					name: '',
					LastName: '',
					email: '',
					Cname: '',
					number: '',
					message: '',
					SelectService: '', 
				});
			} else {
				console.error('Form submission failed');
			}

			const responseData = await response.json();
			console.log(responseData)
			console.log('Backend response:', responseData);

		} catch (error) {
			console.error('An error occurred:', error);
		}
	};



	render() {
		const { name, LastName, email, Cname, number, message,SelectService } = this.state;

		return (
			<div className='footermain'>
				{/* <div className='feedheading' >
					<h1>Feedback from <span className='Analytics'> our clients</span></h1>
					<Carousel autoPlay={true}>
						<div className='Cardslider'>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon1}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon2}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon3}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon4}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
						</div>
						<div className='Cardslider'>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon1}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span >Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon2}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon3}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon4}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
						</div>
						<div className='Cardslider'>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon1}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon2}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon3}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon4}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
						</div>
						<div className='Cardslider'>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon1}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span >Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon2}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon3}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
							<div className='cardslider-body'	>
								<p>Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.Lorem 2 is a modern, minimalist, no-nonsense lorem impsum generator. We're also one of the longest-running lorem ipsum generators on the net.</p>
								<figure className='iconslide d-flex align-items-center'>
									<div>
										<img className='icon1' src={icon4}
											alt="icon" />
									</div>
									<div className='text-left'>
										<h3>Dr. Matyas Petho</h3>
										<span>Clinical Research Manager</span>
									</div>
								</figure>
							</div>
						</div>
					</Carousel>
					<h1>How can we <span className='Analytics'>Help</span> you?</h1>
				</div> */}
				<Container>
					<Row>
						<Col sm={6}>
							<img className="Form-img" src={icon} alt="Form-img" />
						</Col>
						<Col sm={6}>
							<div className='form'>
								<form onSubmit={this.handleSubmit}>
									<Row>
										<Col sm={6}>
											<label htmlFor="name">First Name*</label>
											<input className='formtext'
												type="text"
												id="name"
												name="name"
												value={name}
												onChange={this.handleInputChange}
												required
											/>
										</Col>
										<Col sm={6}>
											<label htmlFor="LastName">Last Name*</label>
											<input
												className='formtext'
												type="text"
												id="LastName"
												name="LastName"
												value={LastName}
												onChange={this.handleInputChange}
												required
											/>
										</Col>
									</Row>


									<Row>
										<Col sm={6}>
											<label htmlFor="email">Email Address* </label>
											<input
												className='formtext'
												type="email"
												id="email"
												name="email"
												value={email}
												onChange={this.handleInputChange}
												required
											/>
										</Col>
										<Col sm={6}>
											<label htmlFor="Company">Company* </label>
											<input
												className='formtext'
												type="text"
												id="Cname"
												name="Cname"
												value={Cname}
												onChange={this.handleInputChange}
												required
											/>
										</Col>
									</Row>
									<Row>
										<Col sm={6}>
											<label htmlFor="number">Phone Number*</label>
											<input className='formtext'
												type="number"
												id="number"
												name="number"
												value={number}
												onChange={this.handleInputChange}
												required
											/>
										</Col>
										<Col sm={6}>
											<label htmlFor="Select Service">Select Service*</label>
											<select
												className='formtext'
												id="SelectService"   
												name="SelectService" 
												value={SelectService}
												onChange={this.handleInputChange}
												required
											><br/>
												{SelectService === "" && <option value="">Select a service</option>}
												<option value="Service1">Service 1</option>
												<option value="Service2">Service 2</option>
											</select>
										</Col>
									</Row>
									<Row>
										<Col sm={12}>
											<label htmlFor="message">Type your enquires here</label>
											<textarea
												className='formtext'
												id="message"
												name="message"
												value={message}
												onChange={this.handleInputChange}
												rows="1"
												required
											/>

										</Col>
									</Row>
									<Row>
										<Col sm={12}>
											<button className="btn1" type="submit">Submit<span className='btnicon'><img src={logoicon} alt='group' height="30px" /></span></button>

										</Col>
									</Row>

								</form>
							</div>
						</Col>
					</Row>
				</Container >
			</div>
		)
	}
}

export default Feed