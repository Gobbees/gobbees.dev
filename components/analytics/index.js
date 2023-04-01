import Umami from './Umami';
import siteMetadata from '@/data/siteMetadata';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return siteMetadata.analytics.umamiWebsiteId ? <Umami /> : null;
};

export default Analytics;
