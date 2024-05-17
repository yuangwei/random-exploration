import RSS from 'rss'
import { getAllArticles } from '@/libs/articles';
import siteConfig from '@/site.config';

export function GET() {
  const { title, description, domain } = siteConfig;
  const feed = new RSS({
    title,
    description,
    site_url: domain,
    feed_url: `${domain}/rss.xml`,
    language: 'en-US',
    image_url: `${domain}/og/rss.png`,
  })
  const articles = getAllArticles().sort(
    (a, b) => new Date(b.metadata.created).getTime() - new Date(a.metadata.created).getTime()
  )
  articles.forEach(article => {
    feed.item({
      title: article.metadata.title,
      url: `${domain}/${article.slug}`,
      description: article.metadata.description ?? '',
      date: new Date(article.metadata.created),
      enclosure: {
        url: `${domain}/og.png?title=${article.metadata.title}&lang=${article.metadata.lang}`,
      },
    })
  })
  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}