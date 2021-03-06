# Hello World React

This is a hello world example in React for SPAs with a [Material-UI](http://www.material-ui.com/) design. 

- [x] React
- [x] React-Router
- [x] Material-UI
- [x] ES6
- [x] Babel
- [x] Less
- [x] Displaying Images
- [x] Nginx explanation

React-Redux is left out intentionally--not all projects need it.


## Install

```
git clone https://github.com/rms1000watt/hello-world-react.git
cd hello-world-react
npm install
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/) 


## Build

```
npm run build
```

Can verify with:

```
cd dist/ && python -m SimpleHTTPServer
```

Visit [http://localhost:8000/](http://localhost:8000/) 


## Todo

- [ ] Clean up package imports


## Notes

For dev, you have to edit `server.js` and `main.js` when adding routes.

I use Nginx to serve the static files. See notes below for React-Router.


## Nginx

Here is part of an Nginx configuration. This is used so when you go to http://app.site.com/screen1, it returns /index.html opposed to trying to return /screen1.html.

```
server {
       listen 80 default_server;
       listen [::]:80 default_server;
       root /var/www/public;
       index index.html
       location / {
               try_files $uri /index.html;
       }
       ..
}
```


## Credit

- [Calvin Froedge](https://github.com/calvinfroedge) for a lot of the [boilerplate](https://github.com/calvinfroedge/webpack-express-react-redux-kitchen-sink). 
- [Jason Format](http://www.jasonformat.com/my-webpack-boilerplate/]) for webpack+less integration in the build process.


## License

MIT