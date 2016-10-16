---
layout: post
title:  "Seperation of Concerns"
date:   2016-10-12 12:33:08 -0600
categories: intern
---
### Seperation of Concerns

The first issue we are going to look at in our Follow the Intern series is a toughie because it is more conceptual than a lot of concepts and because there is not total agreement
about what Seperation of Concerns looks like. It is also tied to the idea of Single Responsibility. Rather than have two articles We'll talk about them together, since that is how they are implemented.

#### Once Item, One Action

In software development you do not want a function or action within your software to serve as a jack of all trades. You want that one function to do one thing and you want it to do it as well as possible.

What is one thing though? You might think of one thing as logging into a website, or one thing might be a single page of a website. One thing could be loading requested information from a database.

The annoying answer is that there isn't a good definition for one thing, but I can say that none of those things are it. When desgning software its actually easier to break things up into larges sections first, then break those down into smaller pieces to understand this idea. The most common version of this is called MVC or Model View Controller. MVC splits a program out into three parts:

<ul>
    <li class="parent-list-style1">The Model
        <ul>
            <li class="child-list-style1">The Model is the information and objects your program will use. If you have a set of data that makes up a customer, things like address and name, you make a model represetning what this information looks like and how its formatted. </li>
        </ul>
    </li>
    <li class="parent-list-style1">The View
        <ul>
            <li class="child-list-style1">The view is how we display this data, what should it look like on our customers screen. What elements do we need other than data, such as images, fonts, etc to make our page look the way we want. </li>
        </ul>
    </li>
    <li class="parent-list-style1">The Controller
        <ul>
            <li class="child-list-style1">The Controller section of our program is the workhorse, it loads the information, process input from a View that has a form on it, or any other "logic" you want to apply.</li>
        </ul>
    </li>
</ul>

Realistically this is NOT always, or even often, how you will see software written. You often times see something like:
Models: Models representing directly, the data we are storing, as it is stored in the database
View Model: Models representing the data in the state we want it in for our views, translated form the way they are stored in the database.
View: The base page and how we want to display things to users
Partial View: A snippet of a page, rather than a complete page, that can be resued in other views.
Business Logic Controllers: These controllers do your business logic, processing information and sending it off to our Data Layer, frequently this area is still just called Controllers
Data Layer: The data layer is the code that directly interacts with your database. It connects to, requests data from, and inserts data into your database. It gives raw data to your business logic to process the information and format it correctly for a view.

Lets do a simple example of a customer loading their profile page after logging in to see how this might flow.

1. A controller knows it needs to send the Profile View to the customers browser, to do this, it needs the Customer Profile Model populated so that there is information there.
2. The controller sends a request to the data layer to get the profile data
3. The data layer sends the information to the controller formatted the same way it is formatted in the database.
4. The controller takes this data and transforms it from being a Profile Model into a Profile ViewModel where the customer data we dont need for the profile is dropped, and the data we do want is formatted in a way that the customer can understand. 
5. The controller passes this information into a view that is going to be sent to the customer,
6. The view is then sent as a web page to the customers browser displaying the Profile ViewModel information the way we have programmed it to. 

Note we havent even introduced partial views yet, but they work the same way as a view, they are just loaded inside another view before the main view is sent to the customer. 

So thats a very short summary of HOW seperation of concerns can work. It can be done other ways, but as you can see, each section of your program is somewhat seperated to do its job. Within each of those section youll see the same thing, where each section is broken down into smaller peices to do sections of work needed to accomplish each step. We could delve into that but its not needed to understand the concept we are trying to learn here. 

The big question is WHY do we need to do this. 

There are a lot of reasons for doing things this way, but here are a few key ones:
Keeping jobs seperate keeps code more organized. 
It is easier for someone coming in to work on the code behind you to support/maintain your work. When a peice of your code clearly has only one job, its much easier to understand.

It is easier to make changes when you keep things seperated. If I need to change the way names are formatted, I can change that in the business logic controller, without having to change the database layer, or the data in the database, or the view. If my table name changes, I can just update the data layer in one spot, even if that data is used by 15 different views. 

I only have to write things once. If I didn't use this principle and I had my data access, my business logic, and my models, all in the same funcnction then in that same database table name change, I would have 15 places I have to update that table name. 

#### What did the intern do?