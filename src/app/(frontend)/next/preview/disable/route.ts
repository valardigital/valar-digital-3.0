import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const draft = await draftMode()
  draft.disable()

  const referer = request.headers.get('referer')
  const redirectTo = referer && referer.startsWith('http') ? referer : '/'

  return NextResponse.redirect(redirectTo)
}