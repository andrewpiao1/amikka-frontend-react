import React, { Component } from 'react'
import { Grid, Header, Button, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-parallax'

import Amikka1 from '../../images/amikka_1.jpeg'
// import Amikka2 from '../../images/amikka_2.jpg'
import Amikka3 from '../../images/amikka_3.png'
import Amikka4 from '../../images/amikka_4.png'
import Amikka5 from '../../images/amikka_5.png'
import Tutor1 from '../../images/tutor_4.jpg'

const headerStyles = {
	fontFamily: 'raleway',
	fontSize: '30px',
	fontWeight: 'bold',
}

const headerStyles2 = {
	fontFamily: 'raleway',
	fontSize: '30px',
	color: 'white',
}

const cardHeaderStyles = {
	fontFamily: 'raleway',
	fontSize: '20px',
	color: 'white',
	lineHeight: 1,
}

const descriptionStyles = {
	fontFamily: 'raleway',
	fontSize: '15px',
}

const descriptionStyles3 = {
	fontFamily: 'raleway',
	fontSize: '15px',
	paddingTop: '3%',
	color: 'white',
}

const insideStyles = {
	background: 'rgba(black, 0.8)',
	color: 'white',
	textAlign: 'center',
	fontFamily: 'raleway',
	fontSize: '35px',
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%,-50%)"
}

export default class Services extends Component {
	render() {
		return (
			<div>
				<Grid centered relaxed stackable>

					{/* LAYER ONE */}
					<Grid.Row>
						<Grid.Column>
							<Parallax bgImage={Tutor1} strength={700} blur={3}>
								<div style={{ height: 350, background: 'rgba(0, 0, 0, 0.4)' }}>
									<div style={insideStyles}>
										<Grid stackable>
											<Grid.Row centered>
												<div style={{ paddingTop: '5%' }}>
													SERVICES
												</div>
											</Grid.Row>
										</Grid>
									</div>
								</div>
							</Parallax>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER TWO */}
					<Grid.Row textAlign='center'>
						<Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
							<div style={headerStyles}>
								PRIVATE SESSIONS (SAT/ACT)
              </div>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER THREE */}
					<Grid.Row centered style={{ paddingBottom: '5%' }}>
						<Grid.Column width={10} textAlign='center' style={{ paddingTop: '1%' }}>
							<div style={descriptionStyles}>
								After each student takes our diagnostic, we create a personalized plan to help them achieve their desired score. Each plan includes multiple review sections, full-timed practice tests, and supplemental study guides.
							</div>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER THREE */}
					<Grid.Row centered style={{ paddingTop: '5%', paddingBottom: '5%', background: 'rgba(23, 120, 186)' }}>
						<Grid.Column width={10} textAlign='center' >
							<div style={headerStyles2}>
								GROUP SESSIONS (SAT/ACT)
              				</div>
							<div style={descriptionStyles3}>
								After each student takes the diagnostic, we create a personalized plan to help them achieve their desired score and place them in a group with student starting at a similar level. Each plan includes multiple review sections, full-timed practice tests, and supplemental study guides.
							</div>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER TWO */}
					<Grid.Row textAlign='center'>
						<Grid.Column textAlign='center' style={{ paddingTop: '5%' }}>
							<div style={headerStyles}>
								K-12 tutoring
              				</div>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER THREE */}
					<Grid.Row centered style={{ paddingBottom: '5%' }}>
						<Grid.Column width={10} textAlign='center' style={{ paddingTop: '1%' }}>
							<div style={descriptionStyles}>
								This option offers prep for k-12 academic courses as well as AP exams. We offer practice exams, quizzes, and weekly Q&A sessions to ensure maximum improvement.
							</div>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER ONE */}
					<Grid.Row stretched>
						<Grid.Column>
							<Parallax bgImage={Amikka1} strength={500}>
								<div style={{ height: 450, background: 'rgba(0, 0, 0, 0.4)' }}>
									<div style={insideStyles}>
										<Grid stackable divided relaxed>

											<Grid.Row centered>
												<div style={headerStyles}>
													DEVELOPMENT COURSES
                        						</div>
											</Grid.Row>

											<Grid.Row centered style={{ paddingTop: '3%' }} columns={6}>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														College Admissions
													</div>
												</Grid.Column>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														Resume Building
													</div>
												</Grid.Column>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														Job Applications
													</div>
												</Grid.Column>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														LinkedIn Optimization
													</div>
												</Grid.Column>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														Internship Opportunities
													</div>
												</Grid.Column>
												<Grid.Column textAlign='center'>
													<div style={cardHeaderStyles}>
														Professional Development
													</div>
												</Grid.Column>
											</Grid.Row>
										</Grid>
									</div>
								</div>
							</Parallax>
						</Grid.Column>
					</Grid.Row>

					{/* LAYER THREE */}
					<Grid.Row centered style={{ paddingBottom: '5%' }}>
						<div style={{ paddingTop: '5%' }}>
							<Button inverted color='blue' size='huge' content='LEARN MORE' as={Link} to='/contact'/>
						</div>
					</Grid.Row>

				</Grid>
			</div>
		)
	}
}