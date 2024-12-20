import React from "react";
import "./App.css";
import { Timeline, Button, Card, Badge, Modal } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { HiHand } from "react-icons/hi";
import {
  HiAcademicCap,
  HiArrowSmRight,
  HiBriefcase,
  HiLightBulb,
  HiBeaker,
  HiTerminal,
  HiChevronRight,
} from "react-icons/hi";
import { createTheme } from "@mui/material/styles";

const Projects = () => {
  const font = "'Rubik', sans-serif";

  const [show, setShow] = React.useState(false);

  const theme = createTheme({
    typography: {
      fontFamily: [
        font,
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  const siz = createTheme({
    breakpoints: {
      values: {
        sm: 0,
        lg: 770,
      },
    },
  });

  return (
    <div className="proj">
      <Modal show={show} onClose={() => setShow(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="content">
        <div className="title">ABOUT ME</div>

        <div className="w-10/12 max-w-xl">
          <Card>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title className="flex items-center pb-1">
                    <HiAcademicCap />
                    &nbsp;Education
                  </Timeline.Title>
                  <Timeline.Body>
                    <div className="gap-2 space-y-0">
                      <Badge color="info" size="sm" className="w-64">
                        Georgia Institute of Technology
                      </Badge>
                      <Badge color="dark" icon={HiChevronRight}>
                        <b>MS in <div className="inline text-sky-700 font-extrabold">Machine Learning</div></b>&nbsp;&nbsp;&nbsp;<Timeline.Time>Graduating 2025</Timeline.Time>
                      </Badge>
                      <Badge color="dark" icon={HiChevronRight}>
                        <b>BS in <div className="inline text-sky-700 font-extrabold">Computer Science</div></b>&nbsp;&nbsp;&nbsp;<Timeline.Time>2024</Timeline.Time>
                      </Badge>
                      <div className="ml-6">
                      <Badge color="dark" icon={HiArrowSmRight}>
                        Concentration in Artifical Intelligence & Modeling/Simulation
                      </Badge>
                      <Badge color="dark" icon={HiArrowSmRight}>
                        Minor in Business thru the Denning Technology & Management program
                      </Badge>
                    </div>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title className="flex items-center pb-1">
                    <HiBriefcase />
                    &nbsp;Experience
                  </Timeline.Title>

                  <Timeline.Body>
                    <div className="flex flex-wrap items-end gap-2 ">
                    <div className="flex flex-wrap items-end gap-2 ">
                        <Badge color="pink" size="sm">
                          <div className="flex flex-wrap items-center gap-2">
                            Software Engineer at{" "}
                            <img
                              alt="Citadel"
                              height={30}
                              width={70}
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Citadel_LLC_Logo.svg/2560px-Citadel_LLC_Logo.svg.png"
                            />
                          </div>
                        </Badge>
                        <Timeline.Time>Starting 2025</Timeline.Time>
                      </div>
                    <div className="flex flex-wrap items-end gap-2 ">
                        <Badge color="pink" size="sm">
                          <div className="flex flex-wrap items-center gap-2">
                            Software Engineer Intern at{" "}
                            <img
                              alt="Citadel"
                              height={30}
                              width={70}
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Citadel_LLC_Logo.svg/2560px-Citadel_LLC_Logo.svg.png"
                            />
                          </div>
                        </Badge>
                        <Timeline.Time>2024</Timeline.Time>
                      </div>
                      <div className="flex flex-wrap items-end gap-2 ">
                        <Badge color="pink" size="sm">
                          <div className="flex flex-wrap items-end gap-2 ">
                            Software Engineer Intern at{" "}
                            <img
                              alt="Capital One"
                              height={10}
                              width={50}
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/2560px-Capital_One_logo.svg.png"
                            />
                          </div>
                        </Badge>
                        <Timeline.Time>2023</Timeline.Time>
                      </div>
                      <div className="flex flex-wrap items-end gap-2 ">
                        <Badge color="pink" size="sm">
                          <div className="flex flex-wrap items-end gap-2 ">
                            Data Science Intern at{" "}
                            <img
                              alt="InSite Group"
                              height={10}
                              width={50}
                              src="https://i.ibb.co/BGBQdkv/Insite-Photo-Room-png-Photo-Room-1.png"
                            />
                          </div>
                        </Badge>
                        <Timeline.Time>2020</Timeline.Time>
                      </div>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title className="flex items-center pb-1">
                    <HiBeaker />
                    &nbsp;Extracurricular
                  </Timeline.Title>

                  <Timeline.Body>
                    <div className="flex flex-wrap items-end gap-2 ">
                    <Badge color="purple" size="sm">
                        Prototyping Instructor - Invention Studio
                      </Badge>
                      <Badge color="purple" size="sm">
                        Automata & Complexity Teaching Assistant
                      </Badge>
                      <Badge color="purple" size="sm">
                        Data Structures & Algorithms Teaching Assistant
                      </Badge>
                      <Badge color="purple" size="sm">
                        Software Developer - Bits of Good
                      </Badge>
                      <Badge color="purple" size="sm">
                        Board Member - Startup Exchange
                      </Badge>
                      <Badge color="purple" size="sm">
                        Yellow Jacket Flying Club
                      </Badge>
                      
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Body>
                    <Timeline.Title className="flex items-center pb-1">
                      <HiLightBulb />
                      &nbsp;Interests
                    </Timeline.Title>
                    <div className="flex flex-wrap items-end gap-2 ">
                      <Badge color="pink" size="sm">
                        {/* onClick={() => setShow(!show)} */}
                        Flying Planes & Helicopters 🚁
                      </Badge>
                      <Badge color="pink" size="sm">
                        Skydiving 🪂
                      </Badge>
                      <Badge color="pink" size="sm">
                        Electric Skateboarding 🛹
                      </Badge>
                      <Badge color="pink" size="sm">
                        Woodworking 🪚
                      </Badge>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title className="flex items-center pb-1">
                    <HiTerminal />
                    &nbsp;Skills
                  </Timeline.Title>
                  <Timeline.Body className="">
                    <div className="flex flex-wrap items-end gap-2">
                      <Badge color="info" size="sm">
                        Java
                      </Badge>
                      <Badge color="info" size="sm">
                        Python
                      </Badge>
                      <Badge color="info" size="sm">
                        C
                      </Badge>
                      <Badge color="info" size="sm">
                        SQL
                      </Badge>
                      <Badge color="info" size="sm">
                        JavaScript
                      </Badge>
                      <Badge color="purple" size="sm">
                        React
                      </Badge>
                      <Badge color="purple" size="sm">
                        Node
                      </Badge>
                      <Badge color="purple" size="sm">
                        Kubernetes
                      </Badge>
                      <Badge color="purple" size="sm">
                        Terraform
                      </Badge>
                      <Badge color="purple" size="sm">
                        MongoDB
                      </Badge>
                      <Badge color="purple" size="sm">
                        Git
                      </Badge>
                      <Badge color="pink" size="sm">
                        AWS
                      </Badge>
                      <Badge color="pink" size="sm">
                        Google Cloud
                      </Badge>
                      <Badge color="pink" size="sm">
                        Docker
                      </Badge>
                      <Badge color="pink" size="sm">
                        Figma
                      </Badge>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </Card>
        </div>
        {/* <a href="https://drive.google.com/file/d/1AZ0YkMx2IDIDNz9gIyMdGfAnU3kr_vyF/view?usp=sharing" target="_blank">
          <div className="resume">
               <FaDownload></FaDownload>Download Resume
          </div></a> */}
        <br></br>

        <div className="title">PROJECTS</div>

        <div className="space-y-6 pb-12">
          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Talk GT
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Social media for Georgia Tech students to create accounts,
                submit posts, reply and vote on others, and resolve threads on
                request.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="info" size="xl">
                  React
                </Badge>
                <Badge color="info" size="xl">
                  PostgreSQL
                </Badge>
                <Badge color="info" size="xl">
                  AWS
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://www.talkgt.com/"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/ShmulTomer/TalkGT/"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/kSxpQZm/Screen-Shot-2023-06-22-at-2-12-02-PM.png"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Data Structures & Algorithms Visualization Tool
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Developing and maintaining an open-source tool to help students
                visualize and comprehend data structures covered in Georgia
                Tech's DS&A course
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="info" size="xl">
                  React
                </Badge>
                <Badge color="info" size="xl">
                  JavaScript ES6
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://csvistool.com/"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/RodrigoDLPontes/visualization-tool"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>
          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/4MHbq2B/Screenshot-2024-11-28-at-5-17-48-PM.png"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Automata & FSM Designer
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Developed an open-source tool for students in Georgia Tech's Automata & Complexity course 
                to design, visualize, and export Finite State Machines and other types of automata
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="info" size="xl">
                  React
                </Badge>
                <Badge color="info" size="xl">
                  JavaScript
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://drawautomata.xyz/"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/ShmulTomer/automata"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/jL55NxY/My-project-1.png"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Volunteer Management System
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Developed a portal to manage events, attendance, rewards, and
                more for several non-profit organizations in Atlanta.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="purple" size="xl">
                  React
                </Badge>
                <Badge color="purple" size="xl">
                  Node
                </Badge>
                <Badge color="purple" size="xl">
                  MongoDB
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button outline={true} color="dark" disabled={true}>
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/GTBitsOfGood/helping-mamas"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/bBvTrpK/River-Sediment.jpg"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                River Sediment Satellite Detection
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Developed script to detect water in satellite imagery through
                clustering and overlay sediment metrics.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="info" size="xl">
                  Python
                </Badge>
                <Badge color="info" size="xl">
                  Twilio
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://devpost.com/software/impact-of-river-pollution"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/ShmulTomer/River-Sediment-Satellite-Detection"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/93JmJWz/Stockify.png"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stock Portfolio Optimization
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Built a stock beginner-friendly portfolio creation tool for the
                HackGT hackathon. Uses mean-variance optimization to determine
                investment with low risk based on past market volatility.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="indigo" size="xl">
                  React Native
                </Badge>
                <Badge color="indigo" size="xl">
                  Flask
                </Badge>
                <Badge color="indigo" size="xl">
                  Python
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://devpost.com/software/stockify-i9n674"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/erichdrawdy/HackGT2022"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>

          <div className="outerCard">
            <Card
              horizontal={true}
              imgSrc="https://i.ibb.co/c21V119/Website-Pic-1400x1000.jpg"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Hive Defense Game
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Android game where players place and upgrade defending or
                supporting towers to protect their hive against waves of enemies
                and a final boss.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="info" size="xl">
                  Android Studio
                </Badge>
                <Badge color="info" size="xl">
                  Java
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Button
                  outline={true}
                  gradientDuoTone="cyanToBlue"
                  href="https://drive.google.com/file/d/1Br5IE7uFe2fgmtrCi2HyVAF25e1YAu-n/view"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                  </div>
                </Button>
                <Button
                  outline={true}
                  gradientDuoTone="purpleToPink"
                  href="https://github.com/ShmulTomer/TowerDefense"
                  target="_blank"
                >
                  <div className="flex items-center gap-0.5">
                    <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                  </div>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
