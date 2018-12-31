# Front-end as an automation service

### Install dependencies
Run the following command to install all dependencies specified in the *package.json* file in order to run the tests.

```
$ npm install
```
### Run tests
Run the tests with npm:

```
$ cd AaaS_webDriverIO_1
$ npm test
```

**Or** run the tests inside a ***docker container***:

```
$ cd AaaS_webDriverIO_1
$ docker-compose build && docker-compose up
```

### Folder structure
> Please see the folder structure below.

```bash
├── AaaS_webDriverIO_1
├── lib
	├── /*.js
├── node_modules
├── test
	├── homepage.js
├── test-results
	├── report
		├── index.html
├── docker-compose.yml
├── Dockerfile
├── Makefile
├── package.json
├── README.md
└── wdio.conf.js (configuration setup)
```
##### Open the test report directly from the terminal (without having to navigate unknowingly). The test reports can be found by using the following command.
```
$ open test-results/reports/index.html
```
**Note:** screenshots of the UIs being tested should appear on the root of the directory after the tests have been executed.
