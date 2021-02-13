import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const TimelineActivity = () => {
    return (
        <VerticalTimeline >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                icon={<CheckIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                icon={<CheckIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                date="2011 - present"
                iconStyle={{ background: '#EC4520', color: '#fff' }}
                icon={<ClearIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                date="2011 - present"
                iconStyle={{ background: '#EC4520', color: '#fff' }}
                icon={<ClearIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    );
}
export default TimelineActivity;