import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Accordian = () => {
  return (
    <div className="mt-16">
      <h3 className="text-[#D830BB] text-3xl my-4">SOME QUESTION AND ANSWER</h3>
      <div className="">
        <Accordion defaultExpanded  className="bg-[#0B1D34] text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="text-2xl">Who is this course for?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A web development course is designed to cater to a diverse
              audience, including beginners who have little or no prior
              programming experience, individuals aspiring to become web
              developers, designers looking to enhance their skillset by
              incorporating front-end development, entrepreneurs aiming to
              establish and manage their own online presence, students seeking
              to deepen their knowledge of web technologies, freelancers wanting
              to offer web development services, career switchers transitioning
              into the web development field, and even programmers from other
              domains interested in expanding into web development.
            </Typography>
          </AccordionDetails>
        </Accordion >
        <Accordion className="bg-[#0B1D34] text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="text-2xl"> Why should you do this policy?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            It seems like you are asking about the reasons for implementing a certain policy, but you have nott specified which policy you are referring to. To provide you with a more accurate answer, could you please clarify which policy you are asking about? This will help me provide you with relevant information.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="bg-[#0B1D34] text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="text-2xl">What is included in the course?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            The contents of a web development course can vary widely depending on its level (beginner, intermediate, advanced), focus (front-end, back-end, full-stack), and the technologies being taught. However, here are some common topics that are often included in a comprehensive web development course
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
