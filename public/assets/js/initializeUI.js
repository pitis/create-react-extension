;(async () => {
  const app = document.createElement('div')
  app.id = 'root'
  document.body.append(app)

  const src = chrome?.runtime?.getURL('/react/index.js')
  await import(src)
})()
