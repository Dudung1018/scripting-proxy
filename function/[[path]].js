export async function onRequest({ params }) {
  const GITHUB_USER = "Dudung1018"
  const REPO = "scripting"
  const BRANCH = "main"

  const path = params.path?.join("/") || ""
  if (!path) {
    return new Response("Usage: /file-path", { status: 400 })
  }

  const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO}/${BRANCH}/${path}`
  const res = await fetch(url)

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("Content-Type") || "application/octet-stream",
      "Cache-Control": "no-cache"
    }
  })
}
