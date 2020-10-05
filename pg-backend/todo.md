### YT-Subscribers Endpoint
[ ] Add Cache system for 5 minutes using MongoDB
  [ ] Search for good ORM. Research before going with mongoose
[ ] Add ?cacheFree=true parameter to avoid use of cache
[ ] Add `isCached` property in response
[ ] Remove channel details in reponse. We do not need that in this endpoint
[ ] Add Slow Mode for max 3 requests per minute
  [ ] Use proper response. Check if there is any errorCode for it
[ ] Create different folder for this endpoint if needed
[ ] Write Tests for this endpoint
  [ ] Write tests with jest and supertest 

--- Stretched
[ ] Move endpoints to youtube.router.ts file under youtube folder
  [ ] keep index.router file in api folder. It will import other routers like twitch, discord or patreon
[ ] Set up some API Documentation
[ ] Add helmet and compression library
[ ] Add response for `/` and for `/api/v1/`
  [ ] write test for this as well

[ ] Setup Docker as well