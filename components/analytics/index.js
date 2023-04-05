import Umami from './Umami';
import siteMetadata from '@/data/siteMetadata';

const isProduction = true; //process.env.NODE_ENV === 'production';

const Analytics = () => {
  return isProduction && siteMetadata.analytics.umamiWebsiteId ? <Umami /> : null;
};

export default Analytics;
