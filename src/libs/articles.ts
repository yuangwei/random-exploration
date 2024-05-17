import path from 'path';
import { getMDXData } from './mdx';

export function getAllArticles() {
  return getMDXData(path.join(process.cwd(), 'articles'));
}

export function getArticlesByYear() {
  const posts = getAllArticles(),
    data = {}
  for (const post of posts) {
    const { created } = post.metadata
    const year = new Date(created).getFullYear()
    data[year] = data[year] ? data[year].concat(post) : [post]
  }
  return data
}

export function getArticlesByTopic() {
  const posts = getAllArticles(),
    data = {}
  for (const post of posts) {
    const { topic } = post.metadata
    data[topic] = data[topic] ? data[topic].concat(post) : [post]
  }
  return data
}

export function getArticleRecommends(slug: string) {
  const posts = getAllArticles(),
    currentPost = posts.find(post => post.slug === slug),
    topicArticles = posts.filter(post => post.metadata.topic === currentPost.metadata.topic && post.slug !== slug);
  return topicArticles;
}

export function getArticle(slug: string) {
  const posts = getAllArticles(),
    currentPost = posts.find(post => post.slug === slug);
  return currentPost
}