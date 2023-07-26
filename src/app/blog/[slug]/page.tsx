import { FC } from 'react'
import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Mdx } from '@/components/Mdx'
interface pageProps {
  params: {
    slug: string
  }
}

async function getDocFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) return notFound;
  return doc;
}
const page: FC<pageProps> = async ({ params }) => {
  const doc = await getDocFromParams(params.slug);
  return (
    <div>
      <Mdx code={doc.body.code} />
    </div>
  )
}

export default page;
