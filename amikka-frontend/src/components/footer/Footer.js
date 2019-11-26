import React, { Component } from 'react'
import { Header, Grid, Icon, Label, Image } from 'semantic-ui-react'

export default class Footer extends Component {

    render() {
        return (
            <footer style={{ paddingTop: '10%'}}>
                <Grid centered relaxed fluid >
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row><Grid.Column textAlign='center' color='blue' /></Grid.Row>
                    <Grid.Row centered color='blue' columns={3} divided>
                        <Grid.Column width={16} textAlign='center' color='blue'>
                            Copyright © 2019 Amikka Tutoring
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