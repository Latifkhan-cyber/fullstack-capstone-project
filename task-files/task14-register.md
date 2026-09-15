Task 14: cURL register (registers user)
$ curl -X POST https://api.fullstack-project.com/api/auth/register -H 'Content-Type: application/json' -d '{"email":"test@test.com","password":"pass123"}'
201 Created | User registered
