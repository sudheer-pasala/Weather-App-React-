
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    let INIT_URL="https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    let HOT_URL="https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHN1bW1lcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

    return (
        <div className= " IndoBox">
                <h1>
                    Weather Info 
                </h1>
    <div className="info-card">
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:(info.temp>15)?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity ={info.humidity}</p>
          <p>Min Temp ={info.tempMin}</p>
          <p>Max Temp ={info.tempMax}</p>
          <p>The Weather feels like {info.weather} ,{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
</div>
        </div>
    )
}