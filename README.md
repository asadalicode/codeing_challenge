# Code-Challenge - Angular

This is a Test project built using Angular 11+ and contains all the steps needed to run this project.


## Get started

### Pre-requisites
```shell
Install Latest CLI version as specified below. 

In order to install Angular CLI, You need to install node.js from 
https://nodejs.org/en/download/. 

To Install Angular CLI, In your favourite cmd type 
npm install -g @angular/cli and hit Enter.

After successfull installation, type ng --version and verify with below specifications. 

Angular CLI: 11.1.4
Node: 14.15.5
OS: win32 x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect   0.1101.4 (cli-only)
@angular-devkit/core        11.1.4 (cli-only)
@angular-devkit/schematics  11.1.4 (cli-only)
@schematics/update          0.1101.4 (cli-only)
``` 

## Next


## Install npm packages

Go into the root directory and Install the `npm` packages described in the `package.json` and verify that it works through your favourite cmd:

```shell
npm install
npm start
```

The `npm start` command compiles the source code (TypeScript) and runs the application`, By default the application will run on http://localhost:4200/. Visit this link on your browser.

You can shut it down manually with `Ctrl-C` in cmd.

## Architecture Design

Inside the src/app folder, There is a services folder which is used to manage the API Services. 

Next, There is a component named ```not-found``` which acts as a wild card component for showing page not found.

There is a seperate module named ```artists```
which contains 3 components, The artist home component acts as a main component which has two child components artist search and artist events.

Finally, There are two re-usable components inside shared directry to minimize the html code inside the components. They are used for displaying cards. 


## Deployment

The Application is deployed to firebase. Please visit the url to have an overview of the application
https://code-assignment-4848a.web.app/