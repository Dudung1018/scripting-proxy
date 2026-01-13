export async function onRequest(context) {
  const { params } = context

  // ⭐ 根路径：返回说明页（或放行 public/index.html）
  if (!params.path) {
    return new Response(
      "GitHub Raw Proxy is running.\nUsage: /your-file-path",
      { status: 200 }
    )
    // 如果你想用 public/index.html：
    // return context.next()
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
      "Content-Type":
        res.headers.get("Content-Type") || "application/octet-stream",
      "Cache-Control": "public, max-age=300"
    }
  })
}
