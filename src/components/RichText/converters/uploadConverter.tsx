import type { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type UploadDoc = {
  url?: string | null
  filename?: string | null
  mimeType?: string | null
  width?: number | null
  height?: number | null
  alt?: string | null
}

/** Renders Lexical uploads: images as <img>, videos as centered <video>. */
export const uploadConverter = {
  upload: ({ node }: { node: SerializedUploadNode }) => {
    if (typeof node.value !== 'object' || node.value === null) return null

    const uploadDoc = node.value as UploadDoc
    const rawUrl = uploadDoc.url
    if (!rawUrl) return null

    const url = getMediaUrl(rawUrl)
    const mime = uploadDoc.mimeType || ''

    if (mime.startsWith('video')) {
      // Constrain portrait/testimonial-style videos and center when narrower than the column
      const maxWidth = 376
      const intrinsicWidth = uploadDoc.width || maxWidth
      const displayWidth = Math.min(intrinsicWidth, maxWidth)

      return (
        <div className="not-prose my-6 flex w-full justify-center">
          <video
            controls
            playsInline
            preload="metadata"
            className="h-auto max-h-[528px] w-full rounded-3xl object-cover shadow-[0px_4px_0px_0px_#F0F5FC]"
            style={{ maxWidth: `${displayWidth}px` }}
            src={url}
          >
            <source src={url} type={mime} />
          </video>
        </div>
      )
    }

    if (mime.startsWith('image')) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={uploadDoc.alt || uploadDoc.filename || ''}
          height={uploadDoc.height || undefined}
          src={url}
          width={uploadDoc.width || undefined}
          className="h-auto max-w-full"
        />
      )
    }

    return (
      <a href={url} rel="noopener noreferrer" target="_blank">
        {uploadDoc.filename || 'Download file'}
      </a>
    )
  },
}
