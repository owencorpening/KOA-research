# Example app showing json-schema validation in KOA routes (POST's). It is deemed unnecessary to demonstrate PUT's, assuming if it works on post it works on PUT.
# This example began using the yo generator: react-webpack-babel, then was modified as needed. There may be some unnecessary files as a result. The main action is in the src directory.

```
> $ git clone https://github.com/owencorpening/KOA-research.git
```


Then install the dependencies:

```
> $ npm install
```

Install webpack and the development server (globally):

```
> $ npm i webpack-dev-server webpack -g
```

You can simply run webpack build using this command: 

```
> $ npm run build
```

If you want to run with webpack-dev-server simply run this command: 

```
> $ node src/server.js
```

Open the web browser to `http://localhost:3000/`

To use Postman to hit the POST route first install Postman, it can eithe be installed as a Chrome/Firefox plugin or native app, here is the native app installed:
https://www.getpostman.com/app/postman-osx

Then command-space and type postman and hit enter to launch it.

There is a protocol dropdown near the top left, select the POST verb. In the field next to it put this url:
 
 http://localhost:3000/myname

And press the blue 'send' button. No params, noauth, maybe put some text in the body below so there is a legitamate 'payload'. Examine the console output in the terminal you launched from, should be this:

slmbp1510:KOA-research owencorpening$ node src/server.js
  <-- GET /
In get for /
  --> GET / 200 10ms 37b
  <-- POST /myname
In post for /myname
post = {
    'firstName': 'owen',
    'lastName': 'c',
    'age': 29
}
User data is valid
  --> POST /myname 200 41ms 8b
