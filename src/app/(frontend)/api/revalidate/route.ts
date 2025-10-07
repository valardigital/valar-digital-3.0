import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: Request) {
  try {
    const secretHeader = request.headers.get('x-revalidate-secret') || ''
    const configuredSecret = process.env.REVALIDATE_SECRET || ''

    if (configuredSecret && secretHeader !== configuredSecret) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const { paths = [], tags = [] }: { paths?: string[]; tags?: string[] } = await request.json().catch(() => ({ paths: [], tags: [] }))

    for (const p of paths) {
      if (typeof p === 'string' && p.startsWith('/')) {
        revalidatePath(p)
      }
    }

    for (const t of tags) {
      if (typeof t === 'string' && t.length > 0) {
        revalidateTag(t)
      }
    }

    return NextResponse.json({ revalidated: true, paths, tags })
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: (error as Error)?.message }, { status: 500 })
  }
}


