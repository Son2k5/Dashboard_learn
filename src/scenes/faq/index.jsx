import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page"></Header>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas esse, sit omnis ducimus ab,
                         aperiam impedit quae deleniti veritatis error suscipit labore veniam, est vero. Cum est corporis culpa!

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas esse, sit omnis ducimus ab,
                         aperiam impedit quae deleniti veritatis error suscipit labore veniam, est vero. Cum est corporis culpa!

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        A Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas esse, sit omnis ducimus ab,
                         aperiam impedit quae deleniti veritatis error suscipit labore veniam, est vero. Cum est corporis culpa!

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The favourite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptas esse, sit omnis ducimus ab,
                         aperiam impedit quae deleniti veritatis error suscipit labore veniam, est vero. Cum est corporis culpa!

                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
export default FAQ;