Food Pick-up and Ordering - without Twilio
=========

## Summary
This is a fork of the '2 Sam's and a Rohan" website found here (https://github.com/open-meadow/food-pickup-ordering). While functional, the website requires the 'twilio' module to operate. This module requires user authentication to work, which is extremely difficult to set up if we have to deploy to multiple computers (you have to create and authenticate your own Twilio account).

This version removes Twilio from the project. While this removes the SMS capabilities, it allows the program to be deployed more easily.

## Final Product
Screenshot of Client Page
!["Screenshot of Client Page"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_%20(1).png)

Screenshot of Menu Pane in Mobile View
!["Screenshot of Menu Pane in Mobile View"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_%20(3).png)

Screenshot of Confirm Prompt
!["Screenshot of Confirm Prompt"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_%20(5).png)

Screenshot of Restaurant Orders
!["Screenshot of Restaurant Orders"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_restaurant%20(3).png)

Screenshot of Restaurant Pending Orders
!["Screenshot of Restaurant Pending Orders"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_restaurant%20(4).png)

Screenshot of Restaurant Order before Completion
!["Screenshot of Restaurant Order before Completion"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_restaurant%20(6).png)

Screenshot of Finished Orders
!["Screenshot of Finished Orders"](https://github.com/open-meadow/food-pickup-ordering/blob/70006b0aabb33e4856bc05c40aef3c6bd41b8041/docs/localhost_8080_restaurant%20(7).png)

## Getting Started

- You need to have Node JS installed on your computer. You can download it at (https://nodejs.org/en/).
- Once you have Node JS, go to your desired folder, open the terminal or command prompt, and type <code>git@github.com:open-meadow/food-pickup-ordering.git</code>, if you have git. Alternatively, you can download the ZIP file and extract it to your desired folder.
- Once done, navigate to the folder containing the downloaded code, and open your terminal or command prompt in the same folder ( Windows users, click on the empty space on the box beside the search bar and type 'cmd'). Type `npm install` Windows users may need to run cmd as administrator.
- Rename the '.env.example' file to '.env'
- Once installed, type `npm run local` and click `Enter`.
- Go to your favourite web browser, and type `localhost:8080` in the address bar. Hit `Enter`. You should be able to access the client website.
- To access the restaurant website, go to `localhost:8080/restaurant`.

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Express
- Nodemon
- Sass
- EJS
- Dotenv
- Morgan
- Chalk

## Known bugs

- There may be an issue where the timer in `localhost:8080/restaurant` does not work, and immediately shows "Time Up". This has only affected <i>my</i> computer <i>sometimes</i>, and I have not been able to reliably reproduce it.
- The timer in `localhost:8080/restaurant` may show `NaN:NaN:NaN` upon first loading. This usually goes away after a refresh or after inserting a value and submitting.
