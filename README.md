# Introduction

Simple angular2 app that uses menubar from ngprime. AOT and rollup are used to build the application.

AOT is done by angular's compiler "ngc" so that @angular/compiler does not have to be packaged with the app. This helps to reduce the app size significantly.

rollup is being used to tree-shake the app code i.e. it removes unused functions from the app bundle. This too helps reduce the app size significantly.


# Steps

Make sure you have typescript, typings and npm installed globally.

Clone this repo.

The following commands must be performed in order.

Run "npm install" from project root.

Run "npm run build" from project root. If there are no build errors, you should see newly created app.js in dist folder. If there are errors, you can run this in 2 parts - "npm run ngc" followed by "npm run rollup" and see which command is generating errors.

Run "npm run serve" from project root to serve the app from dist folder using lite-server locally.


# Known Issues

aot compilation is not working for ngprime

Following files have code references to ngprime and they are currently commented out where ngprime is used.

app.module.ts

app.component.ts

header.component.ts

header.component.html

I don't know if this is because ngprime has not updated their library or because aot has a bug or because I have missed something here. 

When this issue is resolved, I will uncomment the code related to primeng and make the app to work as originally intended.

Here are some related discussions on this topic.

AOT compiler doesn't generate *.ngfactory.ts files for 3rd party components in node_modules #11889: https://github.com/angular/angular/issues/11889

AOT compiler failed with Primeng Modules #871: https://github.com/primefaces/primeng/issues/871

angular2-compiler-bug: https://github.com/mattlewis92/angular2-compiler-bug



