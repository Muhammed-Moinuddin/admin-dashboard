import {Box, useTheme, Typography} from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from '../../theme';

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode); 

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam dignissimos laborum recusandae iste, unde commodi hic rem provident nesciunt tenetur nostrum aliquam reprehenderit corporis voluptatum vel. Nam, natus corrupti!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam dignissimos laborum recusandae iste, unde commodi hic rem provident nesciunt tenetur nostrum aliquam reprehenderit corporis voluptatum vel. Nam, natus corrupti!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        What is Your Favourite Memory with us?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam dignissimos laborum recusandae iste, unde commodi hic rem provident nesciunt tenetur nostrum aliquam reprehenderit corporis voluptatum vel. Nam, natus corrupti!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        What do you want from me?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam dignissimos laborum recusandae iste, unde commodi hic rem provident nesciunt tenetur nostrum aliquam reprehenderit corporis voluptatum vel. Nam, natus corrupti!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        What are your plans for the coming month?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam dignissimos laborum recusandae iste, unde commodi hic rem provident nesciunt tenetur nostrum aliquam reprehenderit corporis voluptatum vel. Nam, natus corrupti!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ