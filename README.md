# US Crime Shows Quiz
The aim of the US Crime Shows Quiz is to test the knowledge of popular crime shows fanatic in a fun, interactive and simple way.
<br>

The site is aimed people interested in testing their knowledge of popular fiction crime shows with questions related to specific episodes, characters and actors. The site includes an instructions page ensuring end users understand how to play the quiz and what to expect as they enter the quiz area. 

You will see on the website the use of typical crime show colours and fonts learnt through my own experiences watching crime shows and partaking in similar quizes as research towards this project. 

<br>

The site has a clean, simple design with a green, black and white colour pallete to match the asthetic of crime shows like CSI: Miami.

![mockup] (readme.images/mockup_ui.dev.png)

## FEATURES

Existing Features
### Navigation bar
* For simplicity and ease there is no specific navigation bar, users enter the website at the instructions page where they then click 'Start Quiz'. This ensures users are well informed before choosing to start the quiz on key aspects such as, the number of questions, the topics that the quiz will test and where to go should they forget the instructions. 
* In trying to create a simple interactive website, the three buttons available for users to click are the following, 'Start Quiz', 'Submit Answer' and 'Go back to instructions page'. Due to the simple html 'a' ref code written the three navigation buttons link together the two html documents and the data set. 


![Instructions] ('readme.images/instructions-page.png')

### Landing page 
* The landing page includes an overlay of a typical CSI:Miami lab based background with a green instructions container overlay. This allows users to connect the quiz to typical crome shows with the aim of creating an enhanced UX as they connect the colour scheme and fonts chosen to various popular crime shows. 

* As the user enters the site they see the instructions at first glance and are able to avoid spoilers of the questions. The text on this instruction page is simple and kept to a minimum which is done through using bullet points.

* The landing page required very minimal html code using a combination of divs to ensure the instructions were kept separate from the rest of the code, paragraphs to provide the inital overview of the quiz, before using an ordered list to ensure concise and clear instructions with a break in between each instruction so as to not overcrowd the page.


### Javascript and Quiz Page 
* The quiz page uses the majority of the JS coding in this project ensuring users are able to submit answers using the checkAnswer function, inserting the specific quiz questions through the quizdata variable allowing for users to go through the 7 questions and their different options. 

* The initial DPM which allows us to manipuate the data and pull the various worksheets together allowing for a cohesive and easy linkage between the various pages. The JS code written also allows us to create a quiz that has an ending allowing users through the event listeners to click the last submit button then invoking the check answer function again brining us back to the beginning of the quiz. 

* The overall usage of javascript is explained above in the quiz section but to go through some of the functionality not mentioned, I included a pop up in the window which prompts users to pick an answer before submitting as they won't be able to movw on without doing so. This is done hrough the document query selector which ensures users click one of the radio buttons first. 

![Quiz] (readme.images/quiz-page.png)
![Quiz] (readme.images/end-of-quiz.png)


### CSS Styling
* The overall CSS styling as mentioned above took inspiration from typical crime shows including those in the quiz. Due to the simple nature of the quiz and website, css styling for this project was kept to a minimum, essentially limited to the quiz/instructions container, it's contents and the background image. As the main focus was on the interactivity of the quiz this simplicity and the styling chosen such as different font styles imported from google fonts and inserted in css makes for an 'easy to look at' page.


### Features left to implement 
* Another feature idea I would like to implement after final review is an otpion for users to see what the correct questions are. This allows for a more interactive and pleasing experience further enhacing general UX and enticing users to come back. 
* Users also may like a pop up page which shows a congratulatory message at completion of their completion which may encourage users to stay on the website to try the quiz again in anticipating of receiving full marks.

* It could also be useful to add a timeout option at the end of the quiz where a user will be automatically redirected to the landing/instructions page after a certain time, e.g. 2 minutes which adds a certain element of fun but also a cleaner UI and UX overall as it signifies the end of the quiz.

### Validator testing
* HTML - No errors were found when passing through the official WSC Validator

* CSS - No errors were found when passing through the official Jigsaw W3 Validator

### Unfixed bugs
* Media queries do not solve the issue of the background imaging filling the ful page in some sizes, however in the standard page sizes the background image fills the page as required 

## Version Control
To ensure version control the following commands were used to ensure all features were deployed into the live site:

* git add . - adds files reay for 'git commit -m'
* git commit -m "message" - to commit the code to local repository ready for 'git push'
* git push - final command used to push code to repository.


## DEPLOYMENT
The site was deployed to GitHub Pages. Please follow the steps below to deploy:
* Go to Github repo > "Settings" > "Code and automation" > "Pages" > "Source" to be set to 'Deploy from Branch' > "Main branch" to be selected > "folder" set to root 
* Click "Save"
* Wait until you can see a link for deployed page within Github Page section, this can take a while. In the 'Environments' section then click "View Deployment. The URL will look similar to my website below.

https://safiaj.github.io/Crime-Show-Quiz/

## TECHNOLOGIES
* Favicon.io - used to create favicon for the page
* Visual Studio Code - used to develop the website
* Github - used to host source code and deploy on Github Pages
* Gitpod - used to write, commit and push code 
* HTML - used to create main content of the website
* CSS- used for website styling
* Tiny PNG- used to compress the size of images
* UI.Dev- used for creating mockup image
* W3C Validator- used for checking HTML and CSS for errors
* Site24x7 - used for checking JS for errors
* Funtrivia. com - used to pull quiz data from, signposted within code.

## CREDITS
* Google fonts
* pexels.com - for all open source images used.
* W3C Validator - to check all code was correct.
* Site24x7 - to check all code was correct.
* Following youtube videos on creating an interactive site - https://www.youtube.com/watch?v=rFWbAj40JrQ&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
* Student support on Slack.
* Personal mentor support in general but specifically on JS code.
* Love Maths project - for general help
* Funtrivia.com for all quiz related questions.
* Font Awesome - for all icons used.
* Code insitute course to supplement my understanding of JS alongside outside sources mentioned above.