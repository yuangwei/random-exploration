import { getArticle } from "@/libs/articles"
import { notFound } from "next/navigation"

export default function Article({ params }: { params: { article: string } }) {
  const post = getArticle(params.article);
  if (!post) {
    notFound()
  }
  return (
    <>
      2
    </>
  )
}
