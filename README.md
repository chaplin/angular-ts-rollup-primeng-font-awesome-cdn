# Introduction

Simple angular2 app that uses menubar from ngprime. AOT and rollup are used to build the application.

AOT is done by angular's compiler "ngc" so that @angular/compiler does not have to be packaged with the app. This helps to reduce the app size significantly.

rollup is being used to tree-shake the app code i.e. it removes unused functions from the app bundle. This too helps reduce the app size significantly.


# Steps

Make sure you have typescript, typings and npm installed globally.

Clone this repo.

The following commands must be performed in order.

Run "npm install" from project root.

Run "npm run build" from project root. You should see newly created app.js in dist folder.

Run "npm run serve" from project root to serve the app from dist folder using lite-server locally.

