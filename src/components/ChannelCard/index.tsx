import { FC } from "react";
import {
  Box,
  CardComponent,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "@/utils/Constants";

interface ChannelDetailProps {
  channelDetail: {
    statistics?:{
      subscriberCount:string
    }
    id: {
      channelId: string;
    };
    snippet: {
      title: string;
      thumbnails?: {
        high?: {
          url: string;
        };
      };
      channelId?: string;
      channelTitle?: string;
    };
  };
}

const ChannelCard: FC<ChannelDetailProps> = ({ channelDetail }) => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',  boxShadow: "none", borderRadius: "20px", width:{xs:'356px', md:'320px'}, height:'326px', margin:'auto' }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              border: "2px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
