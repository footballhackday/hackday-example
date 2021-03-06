'use strict';

import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';

import Team from './Team';
import moment from 'moment';

export default class Fixture extends Component {

  render() {
    let fixture = this.props.fixture,
        date    = moment(fixture.scheduled_at),
        stadium = fixture.stadium.name,
        teams   = this.props.fixture.teams.map(
            team => <Team key={team.id} team={team} onClick={this.props.onTeamClicked.bind(this, team)} />
        );

    return (
      <tr>
        <td>{fixture.id}</td>
        <td>{date.format("MMM Do HH:MM")}</td>
        <td>{teams}</td>
        <td>{stadium}</td>
        <td><Button onClick={this.props.onEventsClicked.bind(this, fixture)}>Show events</Button></td>
      </tr>
    );
  }
}
