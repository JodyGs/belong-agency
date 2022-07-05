
import { SitemapStream, streamToPromise } from 'sitemap';

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const pubRadio = [];
    const pubPrint = [];
    const pubDigit = [];

    // Create each URL row
    pubRadio.forEach(post => {
      smStream.write({
        url: `/radioTv/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });
    pubPrint.forEach(post => {
      smStream.write({
        url: `/print/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });
    pubDigit.forEach(post => {
      smStream.write({
        url: `/digital/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }

}