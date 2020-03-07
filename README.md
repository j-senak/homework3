# Password Generator homework3
For this project, we are creating a random password generator that takes user input requests. The user will be prompted with several alerts that ask for what kind of characters they want and how long their password to be. Then the application will generate a password randomly from the selected criteria.

# Why?
Cyber security starts with a good password. With top used passwords being... well, "password", sometimes you need some help making something to keep your information safe. This is where a password generator comes in!


# The Process
I started with defining variables for the arrays we are using. The arrays contain all the characters that we have access to (Upper Case, Lower Case, Special Characters, and Numerals).

We then create the series of alerts using the "prompt" and "confirm" functions which we store in new variables that will call the original array if confirmed. These variables will then be placed in a new array that will have the previous selected arrays. This array is plugged into a Math.random function to pull random indexes in our array and provide a new password.

# Screenshot
![Alt text](/Users/john/Desktop/Screen Shot 2020-03-06 at 10.46.00 PM.png?raw=true "Password Generator")


