export async function onRequest(context) {
  const { params } = context

  // ⭐ 关键：如果是根路径，直接放行静态页面
  if (!params.path) {
    return context.next()
  }

  const GITHUB_USER = "Dudung1018"
  const REPO = "scripting"
  const BRANCH = "main"

  const path = params.path.join("/")

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
