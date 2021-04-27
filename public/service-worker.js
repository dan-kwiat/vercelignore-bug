self.addEventListener("install", function (e) {
  console.log("sw skipWaiting()")
  try {
    self.skipWaiting()
  } catch (err) {
    console.error(err)
  }
})

self.addEventListener("activate", function (e) {
  console.log("sw unregister()")
  try {
    self.registration
      .unregister()
      .then(function () {
        return self.clients.matchAll()
      })
      .then(function (clients) {
        clients.forEach((client) => client.navigate(client.url))
      })
  } catch (err) {
    console.error(err)
  }
})
