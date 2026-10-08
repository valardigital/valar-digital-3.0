'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import play from '@/assets/images/home/play.svg'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type MediaRef = {
  url?: string | null
  alt?: string | null
  width?: number | null
  height?: number | null
  mimeType?: string | null
} | string | null

export type VideoTestimonialProps = {
  id?: string
  video?: MediaRef
  thumbnail?: MediaRef
  label?: string | null
  quote?: string | null
  supportingLine?: string | null
  speakerName?: string | null
  speakerRole?: string | null
  company?: string | null
  companyLogo?: MediaRef
  className?: string
}

const mediaUrl = (media?: MediaRef): string | null => {
  if (!media) return null
  if (typeof media === 'string') return null
  return media.url ? getMediaUrl(media.url) : null
}

const mediaAlt = (media: MediaRef | undefined, fallback: string) => {
  if (!media || typeof media === 'string') return fallback
  return media.alt || fallback
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = (block) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const videoSrc = mediaUrl(block.video)
  const thumbSrc = mediaUrl(block.thumbnail)
  const logoSrc = mediaUrl(block.companyLogo)

  if (!videoSrc || !block.quote || !block.speakerName) return null

  const label = block.label || 'Client testimonial'
  const roleLine = [block.speakerRole, block.company].filter(Boolean).join(', ')

  const togglePlay = async () => {
    const el = videoRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
      return
    }
    try {
      await el.play()
      setPlaying(true)
    } catch {
      setPlaying(false)
    }
  }

  return (
    <section className={`not-prose my-8 md:my-10 ${block.className || ''}`}>
      <div className="rounded-3xl border border-border bg-white p-5 md:p-8 shadow-[0px_4px_0px_0px_#F0F5FC]">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
          {/* Left: video */}
          <div className="mx-auto md:mx-0 w-full max-w-[340px] shrink-0">
            <div className="relative overflow-hidden rounded-3xl shadow-[0px_4px_0px_0px_#F0F5FC]">
              <video
                ref={videoRef}
                className="aspect-[3/4] h-auto w-full object-cover"
                poster={thumbSrc || undefined}
                preload="metadata"
                playsInline
                controls={false}
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
              >
                <source
                  src={videoSrc}
                  type={
                    typeof block.video === 'object' && block.video?.mimeType
                      ? block.video.mimeType
                      : 'video/mp4'
                  }
                />
              </video>

              {!playing && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)),linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.35)_100%)]"
                    aria-hidden
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label="Play testimonial video"
                      className="cursor-pointer rounded-2xl bg-[linear-gradient(0deg,rgba(255,255,255,0.2),rgba(255,255,255,0.2)),linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] p-4 text-white backdrop-blur-3xl transition hover:scale-[1.03]"
                    >
                      <Image src={play} className="size-6" alt="" />
                    </button>
                  </div>
                </>
              )}

              {playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Pause video"
                  className="absolute inset-0 z-10 cursor-pointer bg-transparent"
                />
              )}
            </div>
          </div>

          {/* Right: copy */}
          <div className="min-w-0 flex-1 text-text-dark">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-primary">
              {label}
            </p>
            <blockquote className="text-xl md:text-2xl font-medium leading-[1.35] tracking-[0.02rem] text-text-dark">
              “{block.quote}”
            </blockquote>

            {block.supportingLine ? (
              <p className="mt-4 text-base md:text-lg leading-[1.55] tracking-[0.04rem] text-text-light">
                {block.supportingLine}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {logoSrc ? (
                <div className="relative h-10 w-24 shrink-0">
                  <Image
                    src={logoSrc}
                    alt={mediaAlt(block.companyLogo, block.company || 'Company logo')}
                    fill
                    className="object-contain object-left"
                    sizes="96px"
                  />
                </div>
              ) : null}
              <div>
                <p className="text-base font-medium text-text-dark">{block.speakerName}</p>
                {roleLine ? (
                  <p className="mt-0.5 text-sm tracking-[0.04rem] text-text-light">{roleLine}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
