import { redirect } from 'next/navigation'

// Individual issue pages redirect to thequantumletter.com
// When the Ghost Content API is wired, replace this with a full render using:
// GET /ghost/api/content/posts/slug/{slug}/?key={GHOST_CONTENT_API_KEY}&formats=html
export default async function IssuePage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  redirect(`https://thequantumletter.com/${slug}`)
}
