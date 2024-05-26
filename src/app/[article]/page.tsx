import { getArticle } from "@/libs/articles";
import siteConfig from "@/site.config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import MDX from "@/components/mdx";
import Link from "next/link";
import { format, formatDistance, subDays } from "date-fns";

type Props = {
  params: { article: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const config = siteConfig;
  const post = getArticle(params.article);
  if (!post) {
    notFound();
  }

  return {
    title: `${post.metadata.title} | ${config.title}`,
    description: post.metadata.description,
  };
}

export default function Article({ params }: Props) {
  const post = getArticle(params.article);
  if (!post) {
    notFound();
  }
  const createDate = new Date(post.metadata.created);
  return (
    <section>
      <h1 className="title font-medium text-3xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex gap-3 mb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        <Link href="/" className="text-sky-700 font-bold">
          {siteConfig.title}
        </Link>
        <span>
          {format(createDate, "MMMM dd, yyyy")} (
          {formatDistance(createDate, new Date(), {
            addSuffix: true,
          })}
          )
        </span>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <MDX source={post.content} />
      </article>
      <section>Recommand for you</section>
    </section>
  );
}
