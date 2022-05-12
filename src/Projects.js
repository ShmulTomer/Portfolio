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
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GT Complaint Website
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
                        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GT Complaint Website
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
                        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GT Complaint Website
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
                        image="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                        alt="green iguana"
                        />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GT Complaint Website
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