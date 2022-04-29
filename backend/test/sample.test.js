const supertest = require('supertest')
const app = require('../server')
const requestWithSupertest =  supertest(app)

describe('user Endpoints', () => {

  it('should create a new post', async () => {
   
    const res = await requestWithSupertest.get('/api/qoute')
    console.log(res)
    
    // expect(requestWithSupertest.statusCode).toEqual(201)
    // expect(requestWithSupertest.body).toHaveProperty('user')
    
  })
})

afterAll(as)