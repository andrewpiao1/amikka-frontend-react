import React, { Component } from 'react'
import { Header, Grid, Icon, Label, Image } from 'semantic-ui-react'

export default class Footer extends Component {

    render() {
        return (
            <footer style={{ marginTop: '-15%' }}>
                <Grid centered relaxed fluid >
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row centered color='blue' columns={3} divided>
                        <Grid.Column width={7} textAlign='right' color='blue'>
                            Copyright © 2019 Amikka Tutoring
                        </Grid.Column>
                        <Grid.Column width={2} textAlign='center' color='blue'>
                            (305)-746-5982
                        </Grid.Column>
                        <Grid.Column width={7} textAlign='left' color='blue'>
                            Info@amikkatutoring.com
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                </Grid>
            </footer>
        )
    }
}