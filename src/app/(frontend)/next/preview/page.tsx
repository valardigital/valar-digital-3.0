import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const { slug, collection, path, previewSecret } = params

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  if (!slug || !collection || !path) {
    return new Response('Missing required parameters', { status: 400 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path as string)
}

