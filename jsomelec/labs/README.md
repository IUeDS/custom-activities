# Labs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## NOTES FROM M. MALLON:

### Setup
The lab pages are in the custom-activities repo, under jsomelec/labs. After downloading from the repo, there are a few commands you need to run.

First, on the command line, run `npm install -g angular-cli` to install the Angular CLI (command-line interface).

Next, navigate to custom-activities/jsomelec/labs on the command line, and run `npm install` to install dependencies.

After that, run `ng build` to compile the code from src to dist.

Finally, run `ng serve` to fire up a local development server. Changes to the code will automatically build when developing locally, and the page will reload automatically in the browser. Navigate to http://localhost:4200/ in your browser of choice to make sure that everything worked -- you should see lab 15, page 1 as the default lab that appears.

If you are pushing code to the production server on webserve, you will need to run the build command manually (see below). This is only necessary when the pages are ready to be used by students, and not needed while developing.

### Routing structure (how to format your URL when developing)
The routing structure is the following: #/lab/:labNum/page/:pageNum

Example when developing locally: http://localhost:4200/#/lab/15/page/1

Example when pushing to the production server: https://quickcheck.eds.iu.edu/customActivities/jsomelec/labs/dist/#/lab/15/page/1

The default route is lab 15 page 1, in case there is some sort of error in the URL formatting.

(Note that we're using hash-bang route syntax by including a # character rather than a standard html5 url with slashes. This is necessary for Quick Check, as we do not have custom redirects set up in Laravel for these labs if the route within Quick Check is a 404. Custom activities should not be part of the Quick Check application logic.)

### Pushing to the production server
If you didn't catch it earlier, here's the command to build this for production for use in Quick Check:

`ng build --prod --base-href="/customActivities/jsomelec/labs/dist/"`

After that, run rsync from the root of the custom-activities folder to push the changes to the server. This process is detailed in the readme for the custom-activities repo.

### CSS and Image assets
Besides component-isolated CSS, all other CSS is located in ~jsomelec/A111/styles.css. We should try to not update that CSS, since it is required by all of the A111 html pages. If you need to make changes to the CSS for any reason, contact Matt Mallon.

If you need to link to a relative URL within the course for an image, link, or other resource, replace '../../img' with js variable interpolation of the A111 root url, and then add the name of the course. Example for A112: ${this.a111RootUrl}/A112/img/unit7/testing.html

### General lab page/question structure in JSON

First off, we are using ES6 syntax, so multi-line strings can be included between backticks: \`\` This will make copying and pasting HTML way easier than concatenating with plus signs between lines. You can also use single or double quotes in the HTML at will!

Not sure which routes/labs are included? Check the massive JSON tree in src/app/services/question.service.ts. The structure of the JSON is:

```
labName: {
	pageName: [
		{
			//question data goes here
		},
		{
			//question data goes here
		}
	]
}
```

Need to create more questions? The following are copy-and-pasteable examples of lab questions/options:

### Question

```
{
	'htmlBeforeQuestion': ``,
	'questionText': ``,
	'questionType': '',
	'options': [

	]
}
```

The question types are: 'multiple-choice', 'numerical', 'dropdown', and 'table' (which can include a number of the former question types within a single table, more on that later).

Optionally, you can include 'htmlAfterQuestion' if it is the last question on the page, or if it makes more sense to group the html with the question above it.

For numerical questions, you can optionally include 'textBeforeInput' and 'textAfterInput' in case units of measurement or equations are needed for labelling purposes.

### Multiple choice option

```
{
	'text': ``,
	'correct': false,
	'feedback': ``
}
```

Obviously, set correct to true for a correct option.

Optionally, you can include 'altText' as an additional object key, in the case that pictures are used for the answer options, such as in lab 15-1. In that case, the altText value will be what is displayed in the data tracker for that answer option.

### Numerical option

```
{
	'low': 1,
	'high': 2,
	'correct': false,
	'feedback': ``
}
```

Replace low/high with your numbers. Low and high can be the same if it's an exact answer.

### Single dropdown option
```
{
	'text': ``,
	'correct': ,
	'feedback': ``
},
```

Pretty self-explanatory.


### Tables
These are a little tricky. Unfortunately, I was not able to incorporate tables with questions in them into the typical JSON structure, because the template html for a question requires that whenever [innerHtml] is used, it has to be bound to an html tag, and thus, any tag that I create would break the structure of an html table. If that doesn't make sense to you, just know that I spent a couple days trying to get these to work, and the only way I found to do it was to create a table component. There are only 3 pages where there is a table of questions, so this is a niche case.

So in the case of a table, in the question JSON, include questionType as 'table' and optionally include a 'tableClass' component if the table needs to be of a certain class. Then, rather than include an 'options' key on the question object, include a 'questions' key instead, and nest all the questions contained in there.

Within each of the nested questions, you can include a 'tableProps' key in case there is an image in the right-side column of the table, or there are custom styles applied to the column with the question in it. Within 'tableProps' you can include:

```
hasImageColumn: true,
imageColumnRowspan: [some integer],
imageColumnStyles: [inline CSS for the image column],
imageColumnHtml: [define what appears in that column],
questionColumnStyles: [inline CSS for the question column],
hasLeftColumn: true, [this adds a column to the left of the question; used for labelling the row]
leftColumnHtml: [define the html that appears in that column]
```

The table questions aren't the most intuitive, but these were a reeeeeally sticky wicket since basically each table of questions that appears in the course has a million attributes/styles/columns that were different from all the other tables of questions. Had to get a little creative, especially since each instantiation of a table in the labs is pretty much unique.

## (Boilerplate readme info from Angular CLI)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
