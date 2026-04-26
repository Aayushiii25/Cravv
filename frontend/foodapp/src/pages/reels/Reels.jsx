import ReelsFeed from '../../components/reels/ReelsFeed';
import { mockReels } from '../../services/mockData';

export default function Reels() {
  return <ReelsFeed reels={mockReels} />;
}
