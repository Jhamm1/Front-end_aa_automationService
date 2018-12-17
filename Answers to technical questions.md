# Technical questions
An automation test framework solution for testing Just Eat's consumer-facing website www.just-eat.co.uk, specifically to find takeaway restaurants in a postcode area.

**1. How long did you spend on the technical test?**

I spent the best part of 4 hours in total on the technical test including answering the technical questions. This mostly entailed setting up the infrastructure for the repository i.e. Readme file, creating the folder structure in accordance with the POM pattern, docker files and downloading dependencies…etc.

**1.1 What would you add to your solution if you had more time? If you didn't spend much time on the technical test then use this as an opportunity to explain what you would add.**

If I had more time, I would write some code to persist the test results to a DB. I would have also implemented a lot more user journeys.

**2. What do you think is the most interesting trend in test automation?**

- A multidisciplinary skillset required of a QA engineer. The need to understand business requirements (similiar to a business analyst in some cases), an understanding of the dev solution that responds to user stories/business requirements and devops – CI pipeline and how the tests are plugged into this pipeline for continous testing).
- **The evoling job titles:** tester, test analyst, QA engineer, SDT/SDET (Software Developer in Test/Software Developer Engineer in Test) and Test architect reflects the type of skillset required and the testing performed.
- Test automation tools for front-end and backend (APIs) – complying with the test pyramid standards (created by Martin Fowler). Also, software patterns created for and tools that enable clean code, resuability and reduce code duplication.
- Continous testing, via the use of automation, is also one that has sparked interest due to the continous and agile delivery and DevOps. This, therefore, results in a robust test framework that is automated to handle the demands of continous delivery, but also reflects typical user journeys as expected in the live environment and re-runs regression tests.
 

**3.How would you implement test automation in a legacy application? Have you ever had to do this?**

- Worked on a number of transformation projects that used APIs from the legacy systems to the newly developed system (microservice in most cases). I included a series of API GET requests from the legacy system in my automation tests to perform E2E tests.
- A few other projects that I also worked on included web-based/desktop front-end that interfaces with a legacy system, where I used a UI automation framework to test functionality from the UI. There were in some cases where some manual testing (which often involved moving a file from a different directory to complete the tests) that I automated by writing a script and integrated it into the test framework (which, in essence, would be a 'before feature' setup in testing terms).

**4. How would you improve the customer experience of the Just Eat website?**

**I would suggest the following to improve the user experience of the Just Eat website:**

- Enlarge the thumbnails of the restaurant options in the result list – reduce the white spacing
- Freeze the top banner of the page (i.e. the logo and login button)
- Improve the look and feel: Change the “Change Location” link to a UI control that shows the searched area with clickable functionality - giving the option for users to change the location.
- Needs a more sophisticated way of presenting the postcode area. At the moment, it's just a black text.
- Reduce the width of the boxes on the left-hand side of the results page. The text needs to be much bigger.
- Overall, more colours and pictures.

**Please see the annotated screenshot below for more context.**

![Annotated Just Eat screenshot](http://julianhamm.co.uk/img/Picture1.png)


**5. Please describe yourself using *JSON*.**

```
{  
   "Title":"Dr",
   "Firstname":"Julian",
   "Surname":"Hamm",
   "Age":28,
   "D.O.B":"19/06/1990",
   "Consultancy company":"Hamm solutions",
   "Interests":{  
      "1st":"Learning new tech",
      "2nd":"Combat sports",
      "3rd":"Travelling"
   },
   "About me":"I’m a massive technology enthusiast, love playing around with new tech and have a deep profound passion for learning. I recently completed a PhD in computer science at Brunel University, where I investigated the use of mobile 3D visualisation technology to address the limitations of the existing clinical guidance tools used by older patients to perform home-based assessments. Currently completing a number of tech and business focused certifications. I am extremely passionate about technology and enjoy developing technical solutions to solve complex problems. I also enjoy working in a team and collaborating with likeminded individuals."
}
```
I really enjoyed this! :-)
