import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem, 
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please Enter a new title for your event");
        const calenderApi = selected.view.calender;
        calenderApi.unselect();

        if (title) {
            calenderApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
            selected.event.remove();
        }
    };
    return (
        <Box m="20px">
            <Header title="CALENDER" subtitle="Full Calender Interative Page"/>
            <Box display="flex" justifyContent="space-between">
                {/* CALENDER SIDEBAR */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem 
                                key={event.id}
                                sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0px", borderRadius: "2px"}}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={
                                        <Typography>
                                            {formatDate(event.start, {
                                                year: "numeric",
                                                month: "short",
                                                day: "numeric",
                                            })}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* CALENDER */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar plugins={[dayGridPlugin]}/>
                </Box>
            </Box>
        </Box>
    )
 
}

export default Calender;