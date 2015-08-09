# Webpack & React - Skeleton

This is just the basic skeleton that I use to create a new react apps.  I've included all of the things that I like:

* React
* Webpack
* PostCSS
* React-Router
* Babel support
* Hot reloading and push state
* ESLint

and more!

## Getting started

To get started you just need to run the following:

    $ npm install
    $ webpack
    $ npm start

Running `npm start` will start webpack and the webpack hot reload server.

## Production Builds

If you want to deploy your assets then run this:

    $ npm run deploy

You'll now have a minified and hashed version of all of your assets.  By default vendor files and css are split out of the main bundle and cached separately.  If you add more vendor files and want them to be split out then make sure you add them to the vendor entrypoint.

## Todo

* Create a better folder structure
* Add testing framework
* Choose a flux framework to include

## Contributing

If you have something that you think goes in here then feel free to open an issue, PR, or message me directly at @ChrisKeathley.
