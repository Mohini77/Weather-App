import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

const InfoBox = ({info}) => {
    const IMG_URL='https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww'
    const HOT_URL='https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D'
    const COLD_URL='https://images.unsplash.com/photo-1564314966935-6c2f60eb32a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww';
    const RAIN_URL='https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww';
 
    return (
    <div className='InfoBox'>
     
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 400,maxHeight:450,mt:'20px' }} >
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color='success'>
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'}>
          <p style={{fontSize:'18px',fontWeight:'600'}}>Temperature={info.temp}&deg;C</p>
          <p style={{fontSize:'18px',fontWeight:'600'}}>Min Temp={info.min}&deg;C</p>
          <p style={{fontSize:'18px',fontWeight:'600'}}>Max Temp={info.max}&deg;C</p>
          <p style={{fontSize:'18px',fontWeight:'600'}}>Humidity={info.humidity}&deg;C</p>
          <p style={{fontSize:'18px',fontWeight:'600'}}>The weather can be described as <i>{info.weather} </i>and feels like <i>{info.feelsLike}&deg;C</i>
          </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox
