'use strict'

const { test, trait } = use('Test/Suite')('User')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('should response code 200', async ({ client }) => {
  const response = await client.get('/api/v1/user').end()
  response.assertStatus(200)
})
