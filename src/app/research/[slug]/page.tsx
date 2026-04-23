import { redirect } from 'next/navigation'

// Redirects to the Quantum Letter homepage until Ghost Content API is wired.
// Once wired, replace with:
//   GET /ghost/api/content/posts/slug/{slug}/?key={GHOST_CONTENT_API_KEY}
// and render the post content directly, or redirect to the canonical Ghost URL.
export default async function IssuePage() {
  redirect('https://thequantumletter.com')
}
