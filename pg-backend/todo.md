### YT-Subscribers Endpoint
* [x] Add Cache system for 15 minutes using Redis
* [x] Add `isCached` property in response
* [x] Remove channel details in reponse. We do not need that in this endpoint
* [x] Create different folder for this endpoint if needed
* [x] make constants for redis keys
* [x] Write Tests for this endpoint
  * [x] Write tests with jest and supertest 

--- Stretched
* [x] Move endpoints to youtube.router.ts file under youtube folder
  * [x] keep index.router file in api folder. It will import other routers like twitch, discord or patreon
* [x] Add helmet and compression library
* [x] Add response for `/` and for `/api/v1/`
  * [x] write test for this as well
* [x] Make sure you are testings for headers you set up in helmet
  * [x] Write some util function to test the basic settings
* [ ] Set up some API Documentation with Swagger JSDoc and Swagger-ui-express

-- Other
* [ ] Setup Docker as well
* [ ] Make sure you close connections on error handling cases