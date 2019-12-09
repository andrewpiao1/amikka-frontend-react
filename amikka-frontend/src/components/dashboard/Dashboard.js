import React from 'react'
import { Grid, Segment, Image, Table, Header, Icon, Progress, Transition } from 'semantic-ui-react'

//Image imports
import BlueBackground from '../../images/backgrounds/blue-trianglify.png'
import OnlineCourse from '../../images/icons/online-course.png'
import PieChart from '../../images/icons/pie-chart.svg'
import CompleteMedal from '../../images/icons/completed.svg'
import Percentage from '../../images/icons/percentage.svg'
import Math from '../../images/icons/math.svg'
import English from '../../images/icons/english.svg'
import Grammar from '../../images/icons/grammar.svg'

const backgroundStyles = {
	backgroundImage: 'url(' + BlueBackground + ')',
	backgroundSize: '100% 500px',
	backgroundPosition: 'center top',
	backgroundRepeat: 'no-repeat',
}

const segmentHeaderStyles = {
	fontFamily: 'raleway',
	fontSize: '15px',
}

const segmentDescStyles = {
	fontFamily: 'raleway',
	fontSize: '30px',
	fontWeight: 'bold',
	paddingTop: '5px',
}

const tableHeadersStyles = {
	fontFamily: 'raleway',
	fontSize: '25px',
	fontWeight: 'bold',
	paddingTop: '5px',
}

const mainHeaderStyles = {
	fontFamily: 'raleway',
	fontSize: '25px',
	fontWeight: 'bold',
	paddingTop: '1%',
	paddingLeft: '1%'
}

class Dashboard extends React.Component {
	render() {
		return (
			<div style={backgroundStyles}>
				<Grid centered padded relaxed width={15}>
					<Grid.Row column={1}>
						<Grid.Column textAlign='left'>
							<div style={mainHeaderStyles}>
								Welcome to your dashboard, Josh!
							</div>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row column={4} style={{ paddingTop: '4%', paddingLeft: '1%', paddingRight: '1%' }}>
						<Grid.Column width={4}>

							<Segment raised padded>
								<Grid columns={4} width={16}>
									<Grid.Row>
										<Grid.Column width={11}>
											<div style={segmentHeaderStyles}>
												Registered Courses
											</div>
											<div style={segmentDescStyles}>
												3
											</div>
										</Grid.Column>
										<Grid.Column width={5}>
											<Image src={OnlineCourse} size='medium' />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>

						</Grid.Column>

						<Grid.Column width={4}>
							<Segment raised padded>
								<Grid columns={4} width={16}>
									<Grid.Row>
										<Grid.Column width={11}>
											<div style={segmentHeaderStyles}>
												Courses Started
											</div>
											<div style={segmentDescStyles}>
												2
											</div>
										</Grid.Column>
										<Grid.Column width={5}>
											<Image src={PieChart} size='large' />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Grid.Column>

						<Grid.Column width={4}>
							<Segment raised padded>
								<Grid columns={4} width={16}>
									<Grid.Row>
										<Grid.Column width={11}>
											<div style={segmentHeaderStyles}>
												Completed Courses
											</div>
											<div style={segmentDescStyles}>
												1
											</div>
										</Grid.Column>
										<Grid.Column width={5}>
											<Image src={CompleteMedal} size='medium' />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Grid.Column>

						<Grid.Column width={4}>
							<Segment raised padded>
								<Grid columns={4} width={16}>
									<Grid.Row>
										<Grid.Column width={11}>
											<div style={segmentHeaderStyles}>
												Total Completion
											</div>
											<div style={segmentDescStyles}>
												33%
											</div>
										</Grid.Column>
										<Grid.Column width={5}>
											<Image src={Percentage} size='medium' />
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Grid.Column>

					</Grid.Row>

					<Grid.Row columns={1} style={{ paddingTop: '4%', paddingLeft: '1%', paddingRight: '1%' }}>
						<Grid.Column width={16}>
							<Segment raised padded>
								<Grid width={16}>
									<Grid.Row>
										<Grid.Column textAlign='left'>
											<div style={tableHeadersStyles}>
												Course Stats
											</div>
										</Grid.Column>
									</Grid.Row>
									<Grid.Row>
										<Grid.Column>
											<Table basic='very'>
												<Table.Header>
													<Table.Row>
														<Table.HeaderCell>COURSE</Table.HeaderCell>
														<Table.HeaderCell>VERSION</Table.HeaderCell>
														<Table.HeaderCell>QUESTIONS</Table.HeaderCell>
														<Table.HeaderCell>STATUS</Table.HeaderCell>
														<Table.HeaderCell>COMPLETION</Table.HeaderCell>
													</Table.Row>
												</Table.Header>

												<Table.Body>
													<Table.Row>
														<Table.Cell>
															<Header as='h4' image>
																<Image src={Math} rounded size='mini' />
																<Header.Content>
																	Math
																</Header.Content>
															</Header>
														</Table.Cell>
														<Table.Cell>Full</Table.Cell>
														<Table.Cell>100</Table.Cell>
														<Table.Cell>
															<Icon name='check circle' size='large' color='green' />
														</Table.Cell>
														<Table.Cell verticalAlign='middle'>
															<Progress size='small' percent={100} progress indicating success>
																completed
															</Progress>
														</Table.Cell>
													</Table.Row>

													<Table.Row>
														<Table.Cell>
															<Header as='h4' image>
																<Image src={English} rounded size='mini' />
																<Header.Content>
																	English
																</Header.Content>
															</Header>
														</Table.Cell>
														<Table.Cell>Full</Table.Cell>
														<Table.Cell>100</Table.Cell>
														<Table.Cell>
															<Transition animation='pulse' duration={10000000000} visible={true}>
																<Icon name='circle' size='large' color='blue' />
															</Transition>
														</Table.Cell>
														<Table.Cell verticalAlign='middle'>
															<Progress size='small' percent={35} progress indicating>
																in progress
															</Progress>
														</Table.Cell>
													</Table.Row>

													<Table.Row>
														<Table.Cell>
															<Header as='h4' image>
																<Image src={Grammar} rounded size='mini' />
																<Header.Content>
																	Grammar
																</Header.Content>
															</Header>
														</Table.Cell>
														<Table.Cell>Trial</Table.Cell>
														<Table.Cell>15</Table.Cell>
														<Table.Cell>
															<Icon name='times' size='large' color='red' />
														</Table.Cell>
														<Table.Cell verticalAlign='middle'>
															<Progress size='small' percent={0} progress indicating >
																not started
															</Progress>
														</Table.Cell>
													</Table.Row>
												</Table.Body>
											</Table>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Segment>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}

export default Dashboard