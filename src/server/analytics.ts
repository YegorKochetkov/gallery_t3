import "server-only";
import { PostHog } from 'posthog-node'

function PostHogServerSide() {
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0
  })
  
  return posthogClient;
}

const analyticsServerClient = PostHogServerSide(); 

export default analyticsServerClient;