import { useCallback, useState } from 'react'
import './App.scss'

//
import { notificationsDB, mails, users, eventsDB, chartDB } from './data.ts';

import { Calendar, Popup } from 'devextreme-react';
import { Avatar, Badge, IconButton } from '@mui/material';
import { CalendarMonth, Mail, Notifications } from '@mui/icons-material';
import CustomCell from './Components/Calendar/CustomCell';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';

import Booking from './Sections/Tabs/Booking.tsx';
import Amenities from './Sections/Tabs/Amenities.tsx';
import Customization from './Sections/Tabs/Customization.tsx';
import Events from './Sections/Events.tsx';

function App() {

  //users
  // this only controls the viewer data up top right it doesn't
  // change the events and other info
  const [currentUser, setCurrentUser] = useState(1);
  const [userSelectorVisible, setUserSelectorVisible] = useState(false);

  const renderUserInfo = useCallback(() => (
    <section className='user'>
      <div className='info'>
        <h6 className='name'>{users[currentUser].Name}</h6>
        <p>{users[currentUser].Description}</p>
      </div>
      <IconButton onClick={showUserSelection}>
        <div className='avatar'>
          <Avatar src={"https://picsum.photos/seed/" + users[currentUser].Avatar + "/200"} />
        </div>
      </IconButton>
    </section>
  ), [currentUser]);

  const showUserSelection = useCallback(() => {
    setUserSelectorVisible(true);
  }, [setUserSelectorVisible]);

  const handleUserSelectionHidden = useCallback(() => {
    setUserSelectorVisible(false);
  }, [setUserSelectorVisible]);

  const SetUser = useCallback((id: number) => {
    setCurrentUser(id);
    setUserSelectorVisible(false);
  }, []);

  const renderUserSelector = useCallback(() => (
    <div className='users'>
      {
        users.map((user, index) => <div className='user' key={user.Name} onClick={() => SetUser(index)} >
          <Avatar src={"https://picsum.photos/seed/" + user.Avatar + "/200"} />
          <h6 className='name'>{user.Name}</h6>
        </div>)
      }
    </div>
  ), []);

  // notifications
  const [notifications, setNotifications] = useState(notificationsDB);
  const [notificationVisible, setNotificationVisible] = useState(false);

  const ShowNotifs = useCallback(() => {
    setNotificationVisible(true);
  }, [setNotificationVisible]);

  const handleNotifsHidden = useCallback(() => {
    setNotificationVisible(false);
    setNotifications([]);
  }, [setNotificationVisible]);

  const renderNotifications = useCallback(() => (
    <div className='notifications'>
      {
        notifications.length > 0 ?
          notifications.map((notif) => <div className='notification' key={notif.Date + notif.Subject}>
            <h6>{notif.Subject}</h6>
            <p className='date'>{new Date(notif.Date * 1000).toLocaleDateString()}</p>
            <p>{notif.Description}</p>
          </div>)
          :
          <p>No notifications at this time</p>
      }
    </div>
  ), [notifications]);

  // mails
  const [mailVisible, setMailVisible] = useState(false);

  const ShowMails = useCallback(() => {
    setMailVisible(true);
  }, [setMailVisible]);

  const handleMailsHidden = useCallback(() => {
    setMailVisible(false);
  }, [setMailVisible]);

  const renderMails = useCallback(() => (
    <div className='mails'>
      {
        mails.map((notif) => <div className='mail' key={notif.Date + notif.Subject}>
          <h6>{notif.Subject}</h6>
          <p className='date'>{new Date(notif.Date * 1000).toLocaleDateString()}</p>
          <p>{notif.Description}</p>
        </div>)
      }
    </div>
  ), []);

  // timeline
  const [mobileCalendarVisible, setMobileCalendarVisible] = useState(false);

  const ShowMobileCalendar = useCallback(() => {
    setMobileCalendarVisible(true);
  }, [setMobileCalendarVisible]);

  const HideMobileCalendar = useCallback(() => {
    setMobileCalendarVisible(false);
  }, [setMobileCalendarVisible]);

  const [currentEvents, setCurrentEvents] = useState(eventsDB.filter(x => new Date(x.Date * 1000).toDateString() == (new Date()).toDateString()));
  const [currentDate, setCurrentDate] = useState(new Date());

  const SetDate = useCallback((_new: Date) => {
    setCurrentDate(_new);
    setCurrentEvents(eventsDB.filter(x => new Date(x.Date * 1000).toDateString() == _new.toDateString()));
  }, [setCurrentDate])

  const renderCalendarEvents = useCallback(() => (
    <>
      <div className='calendar'>
        <Calendar
          width="100%"
          cellComponent={CustomCell}

          value={currentDate}
          onValueChanged={(val) => SetDate(val.value)} />
      </div>
      <div className='events'>
        <Timeline data-date={currentDate.toDateString()}>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              6:00 AM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Wake Up</TimelineContent>
          </TimelineItem>
          {
            currentEvents.map((event) => <TimelineItem key={event.Date + event.Name}>
              <TimelineOppositeContent color="text.secondary">
                {new Date(event.Date * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={event.Color} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: event.Description ? 0 : 0.3, px: 2 }}>
                <h6>{event.Name}</h6>
                {event.Description && <p>{event.Description}</p>}
              </TimelineContent>
            </TimelineItem>)
          }
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              10:00 PM
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Go to Sleep</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  ), [currentDate]);


  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        className='tab'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <div className='main'>
        <div className='content'>
          <div className='dashboard'>
            <h4>Main Dashboard</h4>
            <Box>
              <Tabs value={tabIndex} onChange={handleChange}>
                <Tab label="Booking" />
                <Tab label="Amenities" />
                <Tab label="Customization" />
              </Tabs>
            </Box>
            <CustomTabPanel value={tabIndex} index={0}>
              <Booking />
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={1}>
              <Amenities />
            </CustomTabPanel>
            <CustomTabPanel value={tabIndex} index={2}>
              <Customization />
            </CustomTabPanel>
            <h4>Current Events</h4>
            <Events />
          </div>
          <div className='calendar-panel' >
            <div className='topbar'>
              <section className='badges'>
                <IconButton onClick={ShowMails}>
                  <Badge variant={mails.length > 0 ? "dot" : "standard"} color="primary">
                    <Mail />
                  </Badge>
                </IconButton>
                <IconButton onClick={ShowNotifs}>
                  <Badge variant={notifications.length > 0 ? "dot" : "standard"} color="secondary">
                    <Notifications />
                  </Badge>
                </IconButton>
                <IconButton className='calendar-button' onClick={ShowMobileCalendar}>
                  <Badge variant={currentEvents.length > 0 ? "dot" : "standard"} color="secondary">
                    <CalendarMonth />
                  </Badge>
                </IconButton>
              </section>
              {renderUserInfo()}
            </div>
            {renderCalendarEvents()}
          </div>
        </div>
      </div>

      {/* POPUPS */}
      {/* Very basic setup a much better setup if i had time would be to make a universal popup manager */}

      <Popup
        showTitle={true}
        title="Notifications"
        dragEnabled={false}
        hideOnOutsideClick={true}
        onHiding={handleNotifsHidden}
        visible={notificationVisible}
        showCloseButton={true}
        contentRender={renderNotifications}
      />
      <Popup
        showTitle={true}
        title="Mails"
        dragEnabled={false}
        hideOnOutsideClick={true}
        onHiding={handleMailsHidden}
        visible={mailVisible}
        showCloseButton={true}
        contentRender={renderMails}
      />
      <Popup
        maxHeight="50vh"
        maxWidth="50vw"
        dragEnabled={false}
        hideOnOutsideClick={true}
        onHiding={handleUserSelectionHidden}
        visible={userSelectorVisible}
        showCloseButton={true}
        contentRender={renderUserSelector}
      />
      <Popup
        showTitle={true}
        title="Calendar"
        dragEnabled={false}
        hideOnOutsideClick={true}
        onHiding={HideMobileCalendar}
        visible={mobileCalendarVisible}
        showCloseButton={true}
        contentRender={renderCalendarEvents}
      />
    </>
  )
}

export default App
