import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '@/utils/Constants';

// Определение интерфейса для пропсов компонента VideoCard
interface VideoCardProps {
  video: {
    id: {
      videoId: string;
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

const VideoCard: FC<VideoCardProps> = ({ video:{id:{videoId}, snippet} }) => {

  return (
    <Card sx={{ width: { md: '320px', xs: '100%', borderRadius: 0, boxShadow: 'none' } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{ width: 358, height: 180 }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>{snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
