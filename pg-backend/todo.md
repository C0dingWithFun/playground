### YT-Subscribers Endpoint
* [x] Add Cache system for 15 minutes using Redis
* [ ] Add ?cacheFree=true parameter to avoid use of cache
* [ ] Add `isCached` property in response
* [ ] Remove channel details in reponse. We do not need that in this endpoint
* [ ] Create different folder for this endpoint if needed
* [ ] make constants for redis keys
* [ ] Write Tests for this endpoint
  * [ ] Write tests with jest and supertest 

--- Stretched
* [ ] Move endpoints to youtube.router.ts file under youtube folder
  * [x] keep index.router file in api folder. It will import other routers like twitch, discord or patreon
* [ ] Set up some API Documentation
* [ ] Add helmet and compression library
* [ ] Add response for `/` and for `/api/v1/`
  * [ ] write test for this as well

-- Other
* [ ] Setup Docker as well
* [ ] Make sure you close connections on error handling cases