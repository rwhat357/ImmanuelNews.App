
ImmanuelNews
============

ImmanuelNews is a site that displays the latest news according to your location.

### Overview
This project is composed of two projects the frontend and the backend. Each project has its own GitHub repo.
The front-end is build with AngularJS and the backend is build with C# WebApi.

Both projects run in Azure here:
- Frontend SPA: [http://immanuelnewsapp.azurewebsites.net](http://immanuelnewsapp.azurewebsites.net)
- Backend API: [http://immanuelnewswebapi.azurewebsites.net/swagger](http://immanuelnewswebapi.azurewebsites.net/swagger)

### Suggested Software for Development
- Visual Studio 2013+
- [SourceTree](https://www.sourcetreeapp.com/)
- [VS Code](https://code.visualstudio.com/b?utm_expid=101350005-21.ckupCbvGQMiML5eJsxWmxw.1) 

### Set up front-end dev env

1. Clone `git clone https://github.com/rwhat357/ImmanuelNews.App.git`.
2. Run
	- `npm install`
	- `bower install`
	- `grunt dev`
		- Kicks off the site at [https://localhost:3000](https://localhost:3000).

### Set up back-end dev env

1. Clone `git clone https://github.com/rwhat357/ImmanuelNews.WebApi.git`.
2. Open the solution in Visual Studio.

### Miscellaneous

- For out Frontend, we use [John Papa's AngularJS style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md). 
- For our SCM, we use [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow). So, all pull requests must be done to `develop` branch.