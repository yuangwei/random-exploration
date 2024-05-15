import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  created: string;
  description: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, '').trim();
  let frontMatterLines = frontMatterBlock.trim().split('\n');
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content: string) {
  let tweetMatches = content.match(/<Tweet\sid="[0-9]+"\s\/>/g);
  // @ts-ignore
  return tweetMatches?.map((tweet: string) => tweet?.match(/[0-9]+/g)[0]) || [];
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getPosts() {
  return getMDXData(path.join(process.cwd(), 'content'));
}

export function getPostsByYear() {
  const posts = getPosts(),
    data = {}
  for (const post of posts) {
    const { created } = post.metadata
    const year = new Date(created).getFullYear()
    data[year] = data[year] ? data[year].concat(post) : [post]
  }
  return data
}