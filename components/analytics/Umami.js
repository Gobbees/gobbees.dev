import Script from 'next/script';

import siteMetadata from '@/data/siteMetadata';

const UmamiScript = () => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={siteMetadata.analytics.umamiWebsiteId}
        src="/api/umami/whatever.js"
      />
    </>
  );
};

export default UmamiScript;
