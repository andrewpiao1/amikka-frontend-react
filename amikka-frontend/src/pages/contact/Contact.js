import React, { Component } from 'react';
import { Header, Form, Grid, Button, Card, Transition } from 'semantic-ui-react';
import * as emailjs from 'emailjs-com';
import toastr from 'toastr';

const headerStyles = {
	fontFamily: 'raleway',
	fontSize: '30px',
	color: 'white',
}

const headerStyles2 = {
	fontFamily: 'raleway',
	fontSize: '30px',
}

const headerStyles3 = {
	fontFamily: 'raleway',
	fontSize: '15px',
}

const descriptionStyles3 = {
	fontFamily: 'raleway',
	fontSize: '15px',
	paddingTop: '3%',
	color: 'white',
}

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			message: '',
			errors: {
				name: '',
				email: '',
				message: ''
			},
			animation: 'fade up',
			duration: 500,
		}
	}

	handleFirstNameChange = (e, { value }) => this.setState({ firstName: value });

	handleLastNameChange = (e, { value }) => this.setState({ lastName: value });

	handlePhoneNumberChange = (e, { value }) => this.setState({ phoneNumber: value });

	handleEmailChange = (e, { value }) => this.setState({ email: value });

	handleMessageChange = (e, { value }) => this.setState({ message: value });


	// handleInputChange = (e, firstName, lastName, phoneNumber) => {
	// 	event.preventDefault();
	// 	const target = e.target
	// 	const firstName = target.firstName
	// 	const lastName = target.lastName
	// 	const phoneNumber = target.phoneNumber
	// 	const value = target.value
	// 	this.setState({ [firstName]: value })
	// }

	sendMessage = (event) => {
		const { firstName, lastName, phoneNumber, email, message, } = this.state

		var template_params = {
			"from_name": firstName + lastName + '(' + email + ')',
			"from_phoneNumber": phoneNumber,
			"message_html": message
		}

		var service_id = "default_service";
		var template_id = "template_xO4nDxoK";

		emailjs.send(service_id, template_id, template_params, 'user_Xy6ZBBg6ox7fzwqRfI5lN');

		// emailjs.send('gmail', 'template_xO4nDxoK', template_params, 'user_Xy6ZBBg6ox7fzwqRfI5lN')
		// 	.then(function (response) {
		// 		toastr.success('Message sent successfully')
		// 		console.log('SUCCESS!', response.status, response.text)
		// 	}, function (err) {
		// 		toastr.error(err)
		// 		console.log(err)
		// 	})

		this.setState({
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			subject: '',
			message: ''
		})
	}

	render() {
		const { firstName, lastName, email, phoneNumber, message, animation, duration } = this.state
		return (
			<div>
				<div className='Contact'>
					<Grid centered padded>

						<Grid.Row centered style={{ paddingTop: '5%', paddingBottom: '5%', background: 'rgba(23, 120, 186)' }}>
							<Grid.Column width={10} textAlign='center' >
								<div style={headerStyles}>
									QUESTIONS?
								</div>
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered style={{ paddingTop: '5%' }}>
							<div style={headerStyles2}>
								CONTACT
							</div>
						</Grid.Row>

						<Grid.Row centered style={{ paddingTop: '1%' }}>
							<Grid.Column centered textAlign='right' width={16}>
								<Grid stackable divided relaxed>
									<Grid.Row centered columns={2}>
										<Grid.Column textAlign='right' width={8}>
											<div style={headerStyles3}>
												(305) 746 - 5982
											</div>
										</Grid.Column>
										<Grid.Column textAlign='left'>
											<div style={headerStyles3}>
												Info@amikkatutoring.com
											</div>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
						</Grid.Row>

						<Transition animation='fade up' duration='700' transitionOnMount>
							<Grid.Row centered style={{ paddingTop: '2%' }}>
								<Grid.Column width={6}>

									<Form size='big'>
										<Form.Group widths='equal'>
											<Form.Input fluid placeholder='First Name' onChange={this.handleFirstNameChange.bind(this)} value={firstName} />
											<Form.Input fluid placeholder='Last Name' onChange={this.handleLastNameChange.bind(this)} value={lastName} />
										</Form.Group>
										<Form.Group widths='equal'>
											<Form.Input fluid placeholder='Email' onChange={this.handleEmailChange.bind(this)} value={email} />
											<Form.Input fluid placeholder='Phone Number' onChange={this.handlePhoneNumberChange.bind(this)} value={phoneNumber} />
										</Form.Group>


										<Form.TextArea placeholder='Your Message' name='message' onChange={this.handleMessageChange.bind(this)} value={message}
										/>
									</Form>
								</Grid.Column>
							</Grid.Row>
						</Transition>
						<Grid.Row centered style={{ paddingTop: '2%' }}>
							<Button inverted size='huge' color='blue' floated='right' onClick={this.sendMessage.bind(this)}>SUBMIT</Button>
						</Grid.Row>
					</Grid>
				</div >
			</div >
		)
	}
}