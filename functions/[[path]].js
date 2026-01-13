export async function onRequest(context) {
  const { params } = context

  // ⭐ 根路径：交给 public/index.html
  if (!params.path) {
    return context.next()
  }

  const GITHUB_USER = "Dudung1018"
  const REPO = "scripting"
  const BRANCH = "main"

  const path = params.path.join("/")

  // 基础安全：防止路径穿越
  if (path.includes("..")) {
    return new Response("Invalid path", { status: 400 })
  }

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
