import React from "react";
import "./App.css";
import { Timeline, Button, Card, Badge } from "flowbite-react";
import { Card as CardX } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { ThemeProvider } from "@mui/material";
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
        <div className="title">ME</div>

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
                      <Badge color="purple" size="sm" >
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
                      <Badge color="pink" size="sm" >
                        Flying Planes & Helicopters 🚁
                      </Badge>
                      <Badge color="pink" size="sm" >
                        Skydiving 🪂
                      </Badge>
                      <Badge color="pink" size="sm" >
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
                      <Badge color="info" size="sm" >
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

          <div className="space-y-6">
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
            Forum for Georgia Tech students to create accounts, submit posts, reply
              and vote on others, and resolve threads on request.
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
              <Button outline={true} gradientDuoTone="cyanToBlue" href="https://www.talkgt.com/" target="_blank">
                <div className="flex items-center gap-0.5">
                  <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                </div>
              </Button>
              <Button outline={true} gradientDuoTone="purpleToPink">
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
            imgSrc="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
            className="innerCard"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Talk GT
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Forum for Georgia Tech students to create accounts, submit posts, reply
              and vote on others, and resolve threads on request.
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
              <Button outline={true} gradientDuoTone="cyanToBlue" href="https://www.talkgt.com/" target="_blank">
                <div className="flex items-center gap-0.5">
                  <HiHand className="mr-2 h-4 w-4"></HiHand>Demo
                </div>
              </Button>
              <Button outline={true} gradientDuoTone="purpleToPink">
                <div className="flex items-center gap-0.5">
                  <FaGithub className="mr-2 h-4 w-4"></FaGithub>GitHub
                </div>
              </Button>
            </div>
          </Card>
        </div>
        </div>







        <div className="cards">
          <ThemeProvider theme={siz}>
            <div className="card">
              <CardX 
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              >
                <CardActionArea
                  href="https://github.com/GTBitsOfGood/helping-mamas"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/jL55NxY/My-project-1.png"
                    alt="helping mamas image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Volunteer Resource Manangement
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Developing a website to manage events, volunteers,
                        applications, and more for several non-profit
                        organizations; Backed by React, Node, and MongoDB
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>
            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "485px",
                }}
              >
                <CardActionArea
                  href="https://devpost.com/software/stockify-i9n674"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/93JmJWz/Stockify.png"
                    alt="stockify"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Stock Portfolio Optimization
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Built a stock market beginner-friendly portfolio
                        creation tool for the HackGT hackathon. Application uses
                        mean-variance optimization algorithm to determine
                        investment with low risk based on past market
                        volatility. Backed using React Native front-end, Flask,
                        and Python libraries
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>

            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "430px",
                }}
              >
                <CardActionArea href="https://www.talkgt.com/" target="_blank">
                  <CardMedia
                    component="img"
                    height="100"
                    image="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
                    alt="talk gt image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Talk GT Website
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Website that allows users to create accounts, submit
                        posts, reply and vote on others, and resolve threads on
                        request. Built using React JS, PostgreSQL, and hosted
                        through AWS
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>

            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "430px",
                }}
              >
                <CardActionArea
                  href="https://github.com/ShmulTomer/TowerDefense"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image="https://i.ibb.co/c21V119/Website-Pic-1400x1000.jpg"
                    alt="hive defense image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Hive Defense Game
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Android game where players place and upgrade defending
                        or supporting towers around a path to protect against
                        waves of enemies and a final boss. Game ends when hive
                        loses all health. Built in Android Studio, used Agile
                        for sprints
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>

            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                }}
              >
                <CardActionArea
                  href="https://drive.google.com/file/d/1-Y2mvSFgJndwJv7-wK5FUIJ07K0udZHo/view?usp=sharing"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/ByhF2tB/Drive-Way-Web-Image-1047x798.jpg"
                    alt="driveway prototype image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        DriveWay Prototype
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Conducted market research on distracted driving through
                        20+ interviews with experts and analysis of present
                        solutions. Designed a dashboard smart phone mount
                        through 3D model and Figma prototype of mobile app.
                        Pitched product to professors, winning top 5 out of 20
                        teams
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>

            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "475px",
                }}
              >
                <CardActionArea
                  href="https://drive.google.com/drive/folders/1HOu6kWE9X-zFD3FvdBqjHPRHMX0AhQDU?usp=sharing"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/fC0Fq7x/BCNPNG-2-1.png"
                    alt="barcelona metro kiosk image"
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Metro Kiosk UI
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Surveyed, interviews, and observed users of the
                        Barcelona metro kiosk and designed a new zone selection
                        interaction for the metro system. Created low-fidelity
                        design through paper prototype and tested based on
                        usability heuristics; working on high fidelity prototype
                        through Figma
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>
            <div className="card">
              <CardX
                sx={{
                  maxWidth: {
                    sm: 300,
                    lg: 345,
                  },
                  minHeight: "440px",
                }}
              >
                <CardActionArea
                  href="https://github.com/ShmulTomer/GBA-Color-Picker"
                  target="_blank"
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i.ibb.co/x2rRz55/Color-Picker.png"
                    alt="color picker image "
                  />
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography gutterBottom variant="h5" component="div">
                        Game Boy Advance Color Picker
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Created a color picker in Game Boy Advance, using Direct
                        Memory Access and state machine principles; for CS 2110
                        Computer Organization coursework
                      </Typography>
                    </ThemeProvider>
                  </CardContent>
                </CardActionArea>
              </CardX>
            </div>
          </ThemeProvider>
          {/* <div className="max-w-sm">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card 
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                sss 
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
