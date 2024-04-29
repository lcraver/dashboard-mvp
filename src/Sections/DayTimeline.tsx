import Timeline from '@mui/lab/Timeline';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineItem from '@mui/lab/TimelineItem';

export function DayTimeline(
    currentEvents: DBEvent[],
    currentDate: Date
) {
    return <Timeline data-date={currentDate.toDateString()}>
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
    </Timeline>;
}

export default DayTimeline;