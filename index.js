import html from './html.js'

const contentTypes = {
  html: 'text/html;charset=UTF-8',
  json: 'application/json'
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  if (url.pathname === '/' || url.pathname === '') {
    return new Response(html, {
      headers: { 'content-type': contentTypes.html }
    })
  }

  if (url.pathname === '/generate') {
    // Handle resume generation
    // This is where you'd process the form data and generate the PDF
    // For now, we'll just return a placeholder response
    return new Response(JSON.stringify({ message: 'Resume generation not implemented yet' }), {
      headers: { 'content-type': contentTypes.json }
    })
  }

  return new Response('Not found', { status: 404 })
}
