 import { Storage } from 'https://unpkg.com/megajs/dist/main.browser-es.mjs'

const storage = new Storage({
  email: 'user@example.com',
  password: 'correct horse battery example',
  userAgent: 'ExampleApplication/1.0'
})

// Will resolve once the user is logged in
// or reject if some error happens
await storage.ready 