export type GhostPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  published_at: string
  reading_time: number
  url: string
  feature_image: string | null
}

type GhostResponse = {
  posts: GhostPost[]
  meta: {
    pagination: {
      page: number
      limit: number
      pages: number
      total: number
    }
  }
}

const GHOST_API_URL = process.env.GHOST_API_URL
const GHOST_CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY

export function isGhostConfigured(): boolean {
  return Boolean(GHOST_API_URL && GHOST_CONTENT_API_KEY)
}

export async function getPosts(limit: number = 6): Promise<GhostPost[]> {
  if (!isGhostConfigured()) return []

  const url = `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&limit=${limit}&fields=id,slug,title,excerpt,published_at,reading_time,url,feature_image&order=published_at%20desc`

  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 }, // revalidate every hour
    })
    if (!res.ok) return []
    const data: GhostResponse = await res.json()
    return data.posts ?? []
  } catch {
    return []
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function issueLabel(index: number, total: number): string {
  return `Issue ${total - index}`
}
