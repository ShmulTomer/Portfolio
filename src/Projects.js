import React from "react";
import "./App.css";
import { Timeline, Button, Card, Badge } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import { HiHand } from "react-icons/hi";
import {
  HiAcademicCap,
  HiArrowSmRight,
  HiBriefcase,
  HiLightBulb,
  HiBeaker,
} from "react-icons/hi";
import { createTheme } from "@mui/material/styles";

const Projects = () => {
  const font = "'Rubik', sans-serif";

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
                      <Badge color="dark" icon={HiArrowSmRight}>
                        BS in Computer Science
                      </Badge>
                      <Badge color="dark" icon={HiArrowSmRight}>
                        Minor in Technology & Manangement
                      </Badge>
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
                      <Badge color="purple" size="sm">
                        Data Structures & Algorithms TA
                      </Badge>
                      <Badge color="purple" size="sm">
                        Software Developer - Bits of Good
                      </Badge>
                      <Badge color="purple" size="sm">
                        Board Member - Startup Exchange
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
                      <HiBeaker />
                      &nbsp;Interests
                    </Timeline.Title>
                    <div className="flex flex-wrap items-end gap-2 ">
                      <Badge color="pink" size="sm">
                        Flying Planes & Helicopters 🚁
                      </Badge>
                      <Badge color="pink" size="sm">
                        Skydiving 🪂
                      </Badge>
                      <Badge color="pink" size="sm">
                        Electric Skateboarding 🛹
                      </Badge>
                    </div>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title className="flex items-center pb-1">
                    <HiLightBulb />
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
                        MongoDB
                      </Badge>
                      <Badge color="purple" size="sm">
                        Git
                      </Badge>
                      <Badge color="pink" size="sm">
                        AWS
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
                Forum for Georgia Tech students to create accounts, submit
                posts, reply and vote on others, and resolve threads on request.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="warning" size="xl">
                  React
                </Badge>
                <Badge color="warning" size="xl">
                  PostgreSQL
                </Badge>
                <Badge color="warning" size="xl">
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
              imgSrc="https://i.ibb.co/jL55NxY/My-project-1.png"
              className="innerCard"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Volunteer Management System
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Developing a portal to manage events, attendance, rewards,
                and more for several non-profit organizations.
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
                Developed script to detect water in satellite imagery through clustering and overlay sediment metrics.
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
              Built a stock beginner-friendly portfolio
                        creation tool for the HackGT hackathon. Uses
                        mean-variance optimization to determine
                        investment with low risk based on past market
                        volatility.
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
              Android game where players place and upgrade defending
                        or supporting towers to protect their hive against
                        waves of enemies and a final boss.
              </p>
              <div className="flex flex-wrap gap-2 max-w-lg ">
                <Badge color="warning" size="xl">
                  Android Studio
                </Badge>
                <Badge color="warning" size="xl">
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
