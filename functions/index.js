export async function onRequest() {
  const html = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>Scripting Proxy</title>
</head>
<body>
  <h1>📦 Scripting Scripts</h1>
  <p>这是脚本代理站点</p>

  <ul>
    <li><a href="/example.js">example.js</a></li>
  </ul>
</body>
</html>
`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8"
    }
  });
}
