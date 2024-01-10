# 0x04-TypeScript  
<p><img alt="" src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240110%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20240110T080519Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f58f38508795934f64b632606cccef7ffdb76d35a4c61d330ea9a89654ada510" /></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
	<li><a href="https://intranet.alxswe.com/rltoken/waTSa9Mguj912pel9On57w" target="_blank" title="TypeScript in 5 minutes">TypeScript in 5 minutes</a></li>
	<li><a href="https://intranet.alxswe.com/rltoken/iPO8DlHCGzc1jnojLoP9HA" target="_blank" title="TypeScript documentation">TypeScript documentation</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to&nbsp;<a href="https://intranet.alxswe.com/rltoken/PM-5MDItTT0M8Aaa2QIEyQ" target="_blank" title="explain to anyone">explain to anyone</a>,&nbsp;<strong>without the help of Google</strong>:</p>

<ul>
	<li>Basic types in Typescript</li>
	<li>Interfaces, Classes, and functions</li>
	<li>How to work with the DOM and Typescript</li>
	<li>Generic types</li>
	<li>How to use namespaces</li>
	<li>How to merge declarations</li>
	<li>How to use an ambient Namespace to import an external library</li>
	<li>Basic nominal typing with Typescript</li>
</ul>

<h2>Requirements</h2>

<ul>
	<li>Allowed editors:&nbsp;<code>vi</code>,&nbsp;<code>vim</code>,&nbsp;<code>emacs</code>,&nbsp;<code>Visual Studio Code</code></li>
	<li>All your files should end with a new line</li>
	<li>All your files will be transpiled on Ubuntu 18.04</li>
	<li>Your TS scripts will be checked with&nbsp;<code>jest</code>&nbsp;(version 24.9.* )</li>
	<li>A&nbsp;<code>README.md</code>&nbsp;file, at the root of the folder of the project, is mandatory</li>
	<li>Your code should use the&nbsp;<code>ts</code>&nbsp;extension when possible</li>
	<li>The Typescript compiler should not show any warning or error when compiling your code</li>
</ul>

<h2>Configuration Files</h2>

<p>Please use these files for the following tasks</p>

<h3><code>package.json</code></h3>

<p>Click to show/hide file contents</p>

<pre>
<code>
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
</code>
</pre>

<h3><code>.eslintrc.js</code></h3>

<p>Click to show/hide file contents</p>

<pre>
<code>
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
</code>
</pre>

<h3><code>tsconfig.json</code></h3>

<p>Click to show/hide file contents</p>

<pre>
<code>
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}
</code>
</pre>

<h3><code>webpack.config.js</code></h3>

<p>Click to show/hide file contents</p>

<pre>
<code>
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
</code>
</pre>

<h2>Tasks</h2>

<h3>0. Creating an interface for a student</h3>

<p>mandatory</p>

<p>Copy the following configuration files (provided above) into the&nbsp;<code>task_0</code>&nbsp;directory:&nbsp;<code>package.json</code>,&nbsp;<code>.eslintrc.js</code>,&nbsp;<code>tsconfig.json</code>,&nbsp;<code>webpack.config.js</code></p>

<p>Write your code in the&nbsp;<code>main.ts</code>&nbsp;file:</p>

<ul>
	<li>Write an interface named Student that accepts the following elements:&nbsp;<code>firstName(string)</code>,&nbsp;<code>lastName(string)</code>,&nbsp;<code>age(number)</code>, and&nbsp;<code>location(string)</code></li>
	<li>Create two students, and create an array named&nbsp;<code>studentsList</code>&nbsp;containing the two variables</li>
	<li>Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table</li>
	<li>Each row should contain the first name of the student and the location</li>
</ul>

<p>Requirements:</p>

<ul>
	<li>When running, Webpack should return&nbsp;<code>No type errors found</code>.</li>
	<li>Every variable should use TypeScript when possible.</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_0/js/main.ts, task_0/package.json, task_0/.eslintrc.js, task_0/tsconfig.json, task_0/webpack.config.js</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help&nbsp;Get a sandbox</p>

<h3>1. Let&#39;s build a Teacher interface</h3>

<p>mandatory</p>

<p>Create a directory&nbsp;<code>task_1</code>&nbsp;and copy these configuration files into this folder:&nbsp;<code>package.json</code>,&nbsp;<code>tsconfig.json</code>,&nbsp;<code>webpack.config.js</code></p>

<ul>
	<li><code>firstName(string)</code>&nbsp;and&nbsp;<code>lastName(string)</code>. These two attributes should only be modifiable when a Teacher is first initialized</li>
	<li><code>fullTimeEmployee(boolean)</code>&nbsp;this attribute should always be defined</li>
	<li><code>yearsOfExperience(number)</code>&nbsp;this attribute is optional</li>
	<li><code>location(string)</code>&nbsp;this attribute should always be defined</li>
	<li>Add the possibility to add any attribute to the Object like&nbsp;<code>contract(boolean)</code>&nbsp;without specifying the name of the attribute</li>
</ul>

<p>Example:</p>

<pre>
<code>const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
</code></pre>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_1/js/main.ts, task_1/webpack.config.js, task_1/tsconfig.json, task_1/package.json</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>2. Extending the Teacher class</h3>

<p>mandatory</p>

<p>Write an interface named&nbsp;<code>Directors</code>&nbsp;that extends&nbsp;<code>Teacher</code>. It requires an attribute named&nbsp;<code>numberOfReports(number)</code></p>

<p>Example:</p>

<pre>
<code>const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
</code></pre>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_1/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>3. Printing teachers</h3>

<p>mandatory</p>

<p>Write a function&nbsp;<code>printTeacher</code>:</p>

<ul>
	<li>It accepts two arguments&nbsp;<code>firstName</code>&nbsp;and&nbsp;<code>lastName</code></li>
	<li>It returns the first letter of the firstName and the full lastName</li>
	<li>Example:&nbsp;<code>printTeacher(&quot;John&quot;, &quot;Doe&quot;) -&gt; J. Doe</code></li>
</ul>

<p>Write an interface for the function named&nbsp;<code>printTeacherFunction</code>.</p>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_1/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>4. Writing a class</h3>

<p>mandatory</p>

<p>Write a Class named&nbsp;<code>StudentClass</code>:</p>

<ul>
	<li>The constructor accepts&nbsp;<code>firstName(string)</code>&nbsp;and&nbsp;<code>lastName(string)</code>&nbsp;arguments</li>
	<li>The class has a method named&nbsp;<code>workOnHomework</code>&nbsp;that return the string&nbsp;<code>Currently working</code></li>
	<li>The class has a method named&nbsp;<code>displayName</code>. It returns the firstName of the student</li>
	<li>The constructor of the class should be described through an Interface</li>
	<li>The class should be described through an Interface</li>
</ul>

<p>Requirements:</p>

<ul>
	<li>You can reuse the Webpack configuration from the previous exercise to compile the code.</li>
	<li>When running&nbsp;<code>npm run build</code>, no TypeScript error should be displayed.</li>
	<li>Every variable should use TypeScript when possible.</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_1/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>5. Advanced types Part 1</h3>

<p>mandatory</p>

<p>Create the&nbsp;<code>DirectorInterface</code>&nbsp;interface with the 3 expected methods:</p>

<ul>
	<li><code>workFromHome()</code>&nbsp;returning a string</li>
	<li><code>getCoffeeBreak()</code>&nbsp;returning a string</li>
	<li><code>workDirectorTasks()</code>&nbsp;returning a string</li>
</ul>

<p>Create the&nbsp;<code>TeacherInterface</code>&nbsp;interface with the 3 expected methods:</p>

<ul>
	<li><code>workFromHome()</code>&nbsp;returning a string</li>
	<li><code>getCoffeeBreak()</code>&nbsp;returning a string</li>
	<li><code>workTeacherTasks()</code>&nbsp;returning a string</li>
</ul>

<p>Create a class&nbsp;<code>Director</code>&nbsp;that will implement&nbsp;<code>DirectorInterface</code></p>

<ul>
	<li><code>workFromHome</code>&nbsp;should return the string&nbsp;<code>Working from home</code></li>
	<li><code>getToWork</code>&nbsp;should return the string&nbsp;<code>Getting a coffee break</code></li>
	<li><code>workDirectorTasks</code>&nbsp;should return the string&nbsp;<code>Getting to director tasks</code></li>
</ul>

<p>Create a class&nbsp;<code>Teacher</code>&nbsp;that will implement&nbsp;<code>TeacherInterface</code></p>

<ul>
	<li><code>workFromHome</code>&nbsp;should return the string&nbsp;<code>Cannot work from home</code></li>
	<li><code>getCoffeeBreak</code>&nbsp;should return the string&nbsp;<code>Cannot have a break</code></li>
	<li><code>workTeacherTasks</code>&nbsp;should return the string&nbsp;<code>Getting to work</code></li>
</ul>

<p>Create a function&nbsp;<code>createEmployee</code>&nbsp;with the following requirements:</p>

<ul>
	<li>It can return either a&nbsp;<code>Director</code>&nbsp;or a&nbsp;<code>Teacher</code>&nbsp;instance</li>
	<li>It accepts 1 arguments:
	<ul>
		<li><code>salary</code>(either number or string)</li>
	</ul>
	</li>
	<li>if&nbsp;<code>salary</code>&nbsp;is a number and less than 500 - It should return a new&nbsp;<code>Teacher</code>. Otherwise it should return a&nbsp;<code>Director</code></li>
</ul>

<p>Expected result:</p>

<pre>
<code>console.log(createEmployee(200));
Teacher
console.log(createEmployee(1000));
Director
console.log(createEmployee('$500'));
Director
</code></pre>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_2/js/main.ts, task_2/webpack.config.js, task_2/tsconfig.json, task_2/package.json</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>6. Creating functions specific to employees</h3>

<p>mandatory</p>

<p>Write a function&nbsp;<code>isDirector</code>:</p>

<ul>
	<li>it accepts&nbsp;<code>employee</code>&nbsp;as an argument</li>
	<li>it will be used as a type predicate and if the employee is a director</li>
</ul>

<p>Write a function&nbsp;<code>executeWork</code>:</p>

<ul>
	<li>it accepts&nbsp;<code>employee</code>&nbsp;as an argument</li>
	<li>if the employee is a Director, it will call&nbsp;<code>workDirectorTasks</code></li>
	<li>if the employee is a Teacher, it will call&nbsp;<code>workTeacherTasks</code></li>
</ul>

<p>Expected result:</p>

<pre>
<code>executeWork(createEmployee(200));
Getting to work
executeWork(createEmployee(1000));
Getting to director tasks
</code></pre>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_2/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>7. String literal types</h3>

<p>mandatory</p>

<p>Write a String literal type named&nbsp;<code>Subjects</code>&nbsp;allowing a variable to have the value&nbsp;<code>Math</code>&nbsp;or&nbsp;<code>History</code>&nbsp;only. Write a function named&nbsp;<code>teachClass</code>:</p>

<ul>
	<li>it takes&nbsp;<code>todayClass</code>&nbsp;as an argument</li>
	<li>it will return the string&nbsp;<code>Teaching Math</code>&nbsp;if&nbsp;<code>todayClass</code>&nbsp;is&nbsp;<code>Math</code></li>
	<li>it will return the string&nbsp;<code>Teaching History</code>&nbsp;if&nbsp;<code>todayClass</code>&nbsp;is&nbsp;<code>History</code></li>
</ul>

<p>Expected result:</p>

<pre>
<code>teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
</code></pre>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_2/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help&nbsp;Get a sandbox</p>

<h3>8. Ambient Namespaces</h3>

<p>mandatory</p>

<p>Create a directory called&nbsp;<code>task_3</code>&nbsp;and copy these configuration files into it:&nbsp;<code>package.json</code>,&nbsp;<code>webpack.config.js</code>,&nbsp;<code>tsconfig.json</code>.</p>

<p>The first part of will require that you build an&nbsp;<code>interface</code>&nbsp;and a&nbsp;<code>type</code>. Inside a file named&nbsp;<code>interface.ts</code>:</p>

<ul>
	<li>Create a type&nbsp;<code>RowID</code>&nbsp;and set it equal to&nbsp;<code>number</code></li>
	<li>Create an interface&nbsp;<code>RowElement</code>&nbsp;that contains these 3 fields:
	<ul>
		<li><code>firstName</code>:&nbsp;<code>string</code></li>
		<li><code>lastName</code>:&nbsp;<code>string</code></li>
		<li><code>age?</code>:&nbsp;<code>number</code></li>
	</ul>
	</li>
</ul>

<p>You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can&rsquo;t write a connector to the database, and you decided to download a library called&nbsp;<code>crud.js</code>. Copy this file into the&nbsp;<code>task_3/js</code>&nbsp;directory.</p>

<p>Here it is</p>

<pre>
<code>export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
</code></pre>

<p>Write an ambient file within&nbsp;<code>task_3/js</code>, named&nbsp;<code>crud.d.ts</code>&nbsp;containing the type declarations for each crud function. At the top of the file import&nbsp;<code>RowID</code>&nbsp;and&nbsp;<code>RowElement</code>&nbsp;from&nbsp;<code>interface.ts</code>.</p>

<p>In&nbsp;<code>main.ts</code></p>

<ul>
	<li>At the top of the file create a&nbsp;<a href="https://intranet.alxswe.com/rltoken/91U8IZgcc9cmk216FFy0-Q" target="_blank" title="triple slash directive">triple slash directive</a>&nbsp;that includes all the dependencies from&nbsp;<code>crud.d.ts</code></li>
	<li>Import the&nbsp;<code>rowID</code>&nbsp;type and&nbsp;<code>rowElement</code>&nbsp;from&nbsp;<code>interface.ts</code></li>
	<li>Import everything from&nbsp;<code>crud.js</code>&nbsp;as&nbsp;<code>CRUD</code></li>
</ul>

<p>Create an object called&nbsp;<code>row</code>&nbsp;with the type&nbsp;<code>RowElement</code>&nbsp;with the fields set to these values:</p>

<ul>
	<li><code>firstName</code>:&nbsp;<code>Guillaume</code></li>
	<li><code>lastName</code>:&nbsp;<code>Salva</code></li>
</ul>

<p>Create a&nbsp;<code>const</code>&nbsp;variable named&nbsp;<code>newRowID</code>&nbsp;with the type&nbsp;<code>RowID</code>&nbsp;and assign the value the&nbsp;<code>insertRow</code>&nbsp;command.</p>

<p>Next, create a&nbsp;<code>const</code>&nbsp;variable named&nbsp;<code>updatedRow</code>&nbsp;with the type&nbsp;<code>RowElement</code>&nbsp;and update&nbsp;<code>row</code>&nbsp;with an age field set to&nbsp;<code>23</code></p>

<p>Finally, call the&nbsp;<code>updateRow</code>&nbsp;and&nbsp;<code>deleteRow</code>&nbsp;commands.</p>

<p>Expected result:</p>

<pre>
<code>const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125
</code></pre>

<p>Requirements:</p>

<ul>
	<li>When running&nbsp;<code>npm run build</code>, no TypeScript error should be displayed.</li>
	<li>Every variable should use TypeScript when possible.</li>
	<li>The main file and the ambient file should both import the types defined in the interface file.</li>
	<li>You can easily test your ambient file by looking at the intellisense of your IDE when using the 3rd party functions.</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_3/js/main.ts, task_3/js/interface.ts, task_3/js/crud.d.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>9. Namespace &amp; Declaration merging</h3>

<p>mandatory</p>

<p>Create a new directory&nbsp;<code>task_4</code>&nbsp;and copy the above&nbsp;<code>tsconfig.json</code>&nbsp;and put this&nbsp;<code>package.json</code>&nbsp;in there</p>

<pre>
<code>{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
</code></pre>

<p>In&nbsp;<code>task_4/js/subjects</code>:</p>

<ul>
	<li>
	<p>Create a file&nbsp;<code>Teacher.ts</code>&nbsp;and write a&nbsp;<code>Teacher</code>&nbsp;interface in a namespace named&nbsp;<code>Subjects</code>.</p>

	<ul>
		<li>the interface requires&nbsp;<code>firstName</code>&nbsp;and&nbsp;<code>lastName</code>&nbsp;as string</li>
	</ul>
	</li>
	<li>
	<p>Create a file&nbsp;<code>Subject.ts</code>&nbsp;and write a&nbsp;<code>Subject</code>&nbsp;class in the same namespace named&nbsp;<code>Subjects</code>.</p>

	<ul>
		<li>the class has one attribute&nbsp;<code>teacher</code>&nbsp;that implements the&nbsp;<code>Teacher</code>&nbsp;interface</li>
		<li>the class has one setter method&nbsp;<code>setTeacher</code>&nbsp;that accepts a&nbsp;<code>teacher</code>&nbsp;in argument (and as setter, set the instance attribute&nbsp;<code>teacher</code>&nbsp;with it)</li>
	</ul>
	</li>
	<li>
	<p>Create a file&nbsp;<code>Cpp.ts</code>&nbsp;and make the following modifications in the same namespace.</p>

	<ul>
		<li>Using declaration merging, add a new optional attribute&nbsp;<code>experienceTeachingC</code>&nbsp;(number) to the&nbsp;<code>Teacher</code>&nbsp;interface</li>
		<li>Create a class&nbsp;<code>Cpp</code>&nbsp;extending from&nbsp;<code>Subject</code></li>
		<li>Write a method named&nbsp;<code>getRequirements</code>&nbsp;that will return a string&nbsp;<code>Here is the list of requirements for Cpp</code></li>
		<li>Write a method named&nbsp;<code>getAvailableTeacher</code>&nbsp;that will return a string&nbsp;<code>Available Teacher: &lt;first name of teacher&gt;</code></li>
		<li>If the teacher doesn&rsquo;t have any experience in teaching C, then the method should return a string&nbsp;<code>No available teacher</code></li>
	</ul>
	</li>
	<li>
	<p>Create a file&nbsp;<code>React.ts</code>&nbsp;and write a&nbsp;<code>React Class</code>&nbsp;in the same namespace.</p>

	<ul>
		<li>Add a new attribute&nbsp;<code>experienceTeachingReact?</code>&nbsp;(number) to the&nbsp;<code>Teacher</code>&nbsp;interface</li>
		<li>In the class, write a method named&nbsp;<code>getRequirements</code>&nbsp;that will return a string&nbsp;<code>Here is the list of requirements for React</code></li>
		<li>Write a method named&nbsp;<code>getAvailableTeacher</code>&nbsp;that will return a string&nbsp;<code>Available Teacher: &lt;first name of teacher&gt;</code></li>
		<li>If the teacher doesn&rsquo;t have any experience in teaching React, then the method should return a string&nbsp;<code>No available teacher</code></li>
	</ul>
	</li>
	<li>
	<p>Create a file&nbsp;<code>Java.ts</code>&nbsp;and write a&nbsp;<code>Java Class</code>&nbsp;in the same namespace.</p>

	<ul>
		<li>Add a new attribute&nbsp;<code>experienceTeachingJava?</code>&nbsp;(number) to the&nbsp;<code>Teacher</code>&nbsp;interface</li>
		<li>In the class, write a method named&nbsp;<code>getRequirements</code>&nbsp;that will return a string&nbsp;<code>Here is the list of requirements for Java</code></li>
		<li>Write a method named&nbsp;<code>getAvailableTeacher</code>&nbsp;that will return a string&nbsp;<code>Available Teacher: &lt;first name of teacher&gt;</code></li>
		<li>If the teacher doesn&rsquo;t have any experience in teaching Java, then the method should return a string&nbsp;<code>No available teacher</code></li>
	</ul>
	</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_4/package.json, task_4/tsconfig.json, task_4/js/subjects/Cpp.ts, task_4/js/subjects/Java.ts, task_4/js/subjects/React.ts, task_4/js/subjects/Subject.ts, task_4/js/subjects/Teacher.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>10. Update task_4/js/main.ts</h3>

<p>mandatory</p>

<ul>
	<li>create and export a constant&nbsp;<code>cpp</code>&nbsp;for Cpp Subjects</li>
	<li>create and export a constant&nbsp;<code>java</code>&nbsp;for Java Subjects</li>
	<li>create and export a constant&nbsp;<code>react</code>&nbsp;for React Subjects</li>
	<li>create and export one Teacher object&nbsp;<code>cTeacher</code>&nbsp;with&nbsp;<code>experienceTeachingC = 10</code></li>
	<li>for Cpp subject, log to the console&nbsp;<code>C++</code>, set&nbsp;<code>cTeacher</code>&nbsp;as the teacher, call the two methods&nbsp;<code>getRequirements</code>&nbsp;and&nbsp;<code>getAvailableTeacher</code>&nbsp;and print the strings they return</li>
	<li>for Java subject, log to the console&nbsp;<code>Java</code>, set&nbsp;<code>cTeacher</code>&nbsp;as the teacher, call the two methods&nbsp;<code>getRequirements</code>&nbsp;and&nbsp;<code>getAvailableTeacher</code>, and print the strings they return</li>
	<li>for React subject, log to the console&nbsp;<code>React</code>, set&nbsp;<code>cTeacher</code>&nbsp;as the teacher, call the two methods&nbsp;<code>getRequirements</code>&nbsp;and&nbsp;<code>getAvailableTeacher</code>, and print the strings they return</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_4/js/main.ts</code></li>
</ul>

<p>&nbsp;Done?&nbsp;Help</p>

<h3>11. Brand convention &amp; Nominal typing</h3>

<p>mandatory</p>

<p>Create a directory&nbsp;<code>task_5</code>&nbsp;and copy these configuration files into the root of&nbsp;<code>task_5</code>:&nbsp;<code>package.json</code>,&nbsp;<code>tsconfig.json</code>,&nbsp;<code>webpack.config.js</code></p>

<p>Create two interfaces&nbsp;<code>MajorCredits</code>&nbsp;and&nbsp;<code>MinorCredits</code>&nbsp;in&nbsp;<code>task_5/js/main.ts</code>:</p>

<ul>
	<li>Each interface defines a number named&nbsp;<code>credits</code></li>
	<li>Add a brand property to each interface in order to uniquely identify each of them</li>
</ul>

<p>Create two functions named&nbsp;<code>sumMajorCredits</code>&nbsp;and&nbsp;<code>sumMinorCredits</code>&nbsp;in&nbsp;<code>task_5/js/main.ts</code>:</p>

<ul>
	<li>Each function takes two arguments&nbsp;<code>subject1</code>&nbsp;and&nbsp;<code>subject2</code></li>
	<li><code>sumMajorCredits</code>&nbsp;returns&nbsp;<code>MajorCredits</code>&nbsp;value and&nbsp;<code>sumMinorCredits</code>&nbsp;returns&nbsp;<code>MinorCredits</code>&nbsp;value</li>
	<li>Each function sums the credits of the two subjects</li>
</ul>

<p><strong>Repo:</strong></p>

<ul>
	<li>GitHub repository:&nbsp;<code>alx-backend-javascript</code></li>
	<li>Directory:&nbsp;<code>0x04-TypeScript</code></li>
	<li>File:&nbsp;<code>task_5/js/main.ts, task_5/package.json, task_5/webpack.config.js, task_5/tsconfig.json</code></li>
</ul>

<p>&nbsp;Done?&nbsp;</p>

