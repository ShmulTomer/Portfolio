import React from 'react'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



const Projects = () => {
  return (
    <div className="proj">
        <div className="title">
            Projects
        </div>
        <div className="cards">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea href="https://www.gtcomplaint.com/" target="_blank">
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://i.ibb.co/yRJLq0M/GT-Complaint-MUP.jpg"
                        alt="project image"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GT Complaint Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        I created a website that allows users to create accounts using their school email,
                        submit complaints, respond to other complaints, and resolve when they are addressed.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Hive Defense Game
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        An Android game where you can place defending towers around a path where different enemies will 
                        try to approach and destroy the hive at the end. Towers can be upgraded, which is needed to defeat the final boss.
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        DriveSafe Prototype
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        XXX
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    </div>
  )
}

export default Projects