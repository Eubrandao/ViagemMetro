import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import '../assets/css/journey.scss'
import Switch from '@mui/material/Switch';  
import FormControlLabel from '@mui/material/FormControlLabel';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function Journey() {
    const [checked, setChecked] = React.useState(false);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    

    
    };
    
    return (
      
      <div className='journey'>
          <div className='itinerario'>
          <FormControlLabel control={<Switch checked={checked} onChange={handleChange} defaultChecked color="warning" />} label="Itinerário" />
          </div>
          
            {checked ? (
                 <Timeline  position="alternate" className='timeline' >
                 <TimelineItem>
                   <TimelineOppositeContent color="text.secondary">
                     09:30 am
                   </TimelineOppositeContent>
                   <TimelineSeparator>
                     <TimelineDot />
                     <TimelineConnector />
                   </TimelineSeparator>
                   <TimelineContent>Embarque na estação Patriarca</TimelineContent>
                 </TimelineItem>
                 <TimelineItem>
                   <TimelineOppositeContent color="text.secondary">
                     10:00 am
                   </TimelineOppositeContent>
                   <TimelineSeparator>
                     <TimelineDot />
                     <TimelineConnector />
                   </TimelineSeparator>
                   <TimelineContent>Desembarque na estação República</TimelineContent>
                 </TimelineItem>
                 <TimelineItem>
                   <TimelineOppositeContent color="text.secondary">
                     10:20 am
                   </TimelineOppositeContent>
                   <TimelineSeparator>
                     <TimelineDot />
                     <TimelineConnector />
                   </TimelineSeparator>
                   <TimelineContent>Siga sentido a estação Consolação</TimelineContent>
                 </TimelineItem>
                     </Timeline>
            ) : (
                    <div>
                        <h1>teste</h1>
                    </div>    
         )}
   
          </div>
  );
}