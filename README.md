.env file on root directory : {
MONGO_URI=
JWT_SECRET=admin
NODE_ENV=production/productionnot
}

Socket io endpoint on : frontend/src/components/chat/SingleChat.js:12

To start:
-change MONGO_URI (MongoDB url)
-NODE_ENV=production (start app in root folder by: npm start) PORT:8080
-NODE_ENV=productionnot (start app in root and frontend folder by: npm start) PORT:3000 and PORT:8080
-Socket endpoint is set to http://localhost:8080

(To apply changes on production mode delete build folder in /frontend and type npm run build)

Messjs is a real-time messaging app. Backend was fully done by myself, it is my first API so for frontend
side i used chakra ui to make things easier. It is not perfect such as bad responsivity or esthetic things,
but i did not focus on that. App database is running on mongodb. To create web tokens i used jsonwebtoken.
Passwords are hashed by bcryptjs. Lastly for real-time messaging i used socket.io. App is ready to be
deployed but i decided not to because of the free hostings delays socket io does not work perfectly and
real-time messages are breaking. On the local network everything works just fine.
