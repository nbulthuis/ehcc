import React from 'react'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
import Layout from '../components/layout'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const CALENDAR_ID = "a3mfome2np8kgenf6vc1ghr9vc@group.calendar.google.com";
const API_KEY = 'AIzaSyDdyTRj1MfOl4PUdmb_tynEmYec74VnEMI'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

function getEvents(setStateCallback) {
  fetch(url).then(response => {
    if(response.ok){
      return response.json()
    } else throw new Error("Something went wrong with calendar request")
  }).then(json => {
    const events = [];
    json.items.map(event => {
      let startTime = event.start.date || event.start.dateTime
      let endTime = event.end.date || event.end.dateTime
      let formattedStartTime = moment(startTime).toDate()
      let formattedEndTime = moment(endTime).toDate()
      return events.push({
        start: formattedStartTime,
        end: formattedEndTime,
        title: event.summary,
        description: event.description,
        location: event.location,
      })
    });
    setStateCallback(events);
    }).catch(error => console.log(error))
}

class CalendarPage extends React.Component {
  state = {
    events: []
  }
  
  componentDidMount() {
    getEvents((events) => this.setState({ events }))
  }

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <Layout>
        <BigCalendar localizer={localizer} style={{ height: '420px', padding: `20px` }} events={this.state.events} />
      </Layout>
    )
  }
}

export default CalendarPage