import CheckroomIcon from '@mui/icons-material/Checkroom';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { SvgIcon } from '@mui/material';

export const logo: string = 'https://i.ibb.co/s9Qys2j/logo.png';

interface Category {
  name: string;
  icon: typeof SvgIcon;
}

export const categories: Category[] = [
  { name: 'New', icon: HomeIcon },
  { name: 'JS Mastery', icon: CodeIcon },
  { name: 'Coding', icon: CodeIcon },
  { name: 'ReactJS', icon: CodeIcon },
  { name: 'NextJS', icon: CodeIcon },
  { name: 'Music', icon: MusicNoteIcon },
  { name: 'Education', icon: SchoolIcon },
  { name: 'Podcast', icon: GraphicEqIcon },
  { name: 'Movie', icon: OndemandVideoIcon },
  { name: 'Gaming', icon: SportsEsportsIcon },
  { name: 'Live', icon: LiveTvIcon },
  { name: 'Sport', icon: FitnessCenterIcon },
  { name: 'Fashion', icon: CheckroomIcon },
  { name: 'Beauty', icon: FaceRetouchingNaturalIcon },
  { name: 'Comedy', icon: TheaterComedyIcon },
  { name: 'Gym', icon: FitnessCenterIcon },
  { name: 'Crypto', icon: DeveloperModeIcon },
];

export const demoThumbnailUrl: string = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl: string = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl: string = '/video/GDa8kZLNhJ4';
export const demoChannelTitle: string = 'JavaScript Mastery';
export const demoVideoTitle: string =
  'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture: string =
  'http://dergipark.org.tr/assets/app/images/buddy_sample.png';
