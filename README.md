# Xmas Wish List
## Send your wishes to Santa

### **_Introduction_**
This fun side project needed to wait 6 months. I came up with the idea during Christmas in 2021, but that time my knowledge was really nowhere. I just started to dig in to web development deep. Luckily I always make a list filled up with plans and dreams for the future. This little project was on it and it came the day when it got ready. 

## **_Update_**
When I was making this project and show it to my husband, he complained that he did not get any notification or anything that his wishes actually sent to Santa. Now that my knowledge is growing and I know little NodeJS, my plan is implement an e-mail sender in this project. So after pushing the send button, you get a confirmation letter on your e-mail. 
### **_Project itself_** 
 I wanted to make a simple "To Do List" kind of thing, just in Xmas edition.
 
 ### **_Used Technologies_**
 1. HTML
 2. CSS/SASS
 3. Tailwind CSS
 4. Animate.css animation library
 5. JavaScript
 5. NodeJS and e-mail sending options

**Aim of the Project**

First goal was to get to know Tailwind CSS within this simple project. It offers way more options and classes than Bootstrap 5. 
Secondary goal was practice DOM manipulation with JS.
Thirdly refresh my CSS animation and get to know an animation library.
Lastly, get insight to e-mail sending option with NodeJS backend.

**Challenges within the Project**

1. Using Tailwind CSS. It is really different to shape an input field or a button just with "small" classes. Really different from Bootstrap 5, where there is a btn class and "that's it". I am looking forward to use Tailwind CSS more as it can offers more mixing option within the classes.
2. DOM manipulation. Always good and challenging to practice DOM manipulation with JS. The challenge was to add limit for adding item to the list. 

**_Update_**
3. Setting up Nodemailer felt actually pretty simple to set up. I had trouble more with Google Account... And that it let me send emails by an application. In the end the following steps help to unlock the mystery:
- Enable the 2-step verification on your account (Profile Picture -> Manage your Google Account -> Security -> Signing in to Google -> 2-step verification). So if it is off, click on it and follow the step to turn it on.
- After that go again to the same page - again under the Signing in to Google, click on App-passwords -> Follow the steps and get the 16 digit password.
- Use your e-mail and the 16-digit password when writing the code for the transporter.
Moreover I needed to install _dotenv_ package as well and add dotenv.config() in to the server.js
## **_What have I learned_**
Tailwind CSS and Tailwind CSS. Plus animation and DOM. 

**_Update_**
Setting up nodemailer to send e-mail via application.

## Deployed: 2022. July. / 2022.September

**Please Note**
The e-mail sending feature is only working in localhost and not through the deployed vercel app. 

