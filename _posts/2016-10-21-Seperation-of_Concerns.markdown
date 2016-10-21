---
layout: post
title:  "Follow the Intern - Seperation of Concerns"
date:   2016-10-12 12:33:08 -0600
categories: Tech
---
### Seperation of Concerns

The first issue we are going to look at in our Follow the Intern series is a toughie because it is more conceptual than practical and because there is not total agreement
about what Separation of Concerns looks like. It is also tied to the idea of Single Responsibility. Rather than have two articles We'll talk about them together since that is how they are implemented.

#### One Item, One Action

In software development, you do not want a function or action within your software to serve as a jack of all trades. You want that one function to do one thing and you want it to do it as well as possible.

What is one thing though? You might think of one thing as logging into a website, or one thing might be a single page of a website. One thing could be loading requested information from a database.

The annoying answer is that there isn't a good definition for one thing, but I can say that none of those things are it. When designing software its actually easier to break things up into larger sections first, then break those down into smaller pieces to understand this idea. The most common version of this is called MVC or Model View Controller. MVC splits a program out into three parts:

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

<strong>Models:</strong> Models representing directly, the data we are storing, as it is stored in the database

<strong>View Model:</strong>  Models representing the data in the state we want it in for our views, translated from the way they are stored in the database.

<strong>View:</strong>  The base page and how we want to display things to users

<strong>Partial View:</strong>  A snippet of a page, rather than a complete page, that can be reused in other views.

<strong>Business Logic Controllers:</strong>  These controllers do your business logic, processing information and sending it off to our Data Layer, frequently this area is still just called Controllers

<strong>Data Layer:</strong>  The data layer is the code that directly interacts with your database. It connects to, requests data from, and inserts data into your database. It gives raw data to your business logic to process the information and format it correctly for a view.

Let's do a simple example of a customer loading their profile page after logging in to see how this might flow.

1. A controller knows it needs to send the Profile View to the customer's browser, to do this, it needs the Customer Profile Model populated so that there is information there.
2. The controller sends a request to the data layer to get the profile data
3. The data layer sends the information to the controller formatted the same way it is formatted in the database.
4. The controller takes this data and transforms it from being a Profile Model into a Profile ViewModel where the customer data we don't need for the profile is dropped, and the data we do want is formatted in a way that the customer can understand. 
5. The controller passes this information into a view that is going to be sent to the customer,
6. The view is then sent as a web page to the customer's browser displaying the Profile ViewModel information the way we have programmed it to. 

<object class="center" data="/media/images/MVCSingleViewFlow.svg" type="image/svg+xml">
</object>

Note we haven't even introduced partial views yet, but they work the same way as a view, they are just loaded inside another view before the main view is sent to the customer. 

So that's a very short summary of HOW separation of concerns can work. It can be done other ways, but as you can see, each section of your program is somewhat separated to do its job. Within each of those sections, you'll see the same thing, where each section is broken down into smaller pieces to do sections of work needed to accomplish each step. We could delve into that but it's not needed to understand the concept we are trying to learn here. 

The big question is WHY do we need to do this. 

There are a lot of reasons for doing things this way, but here are a few key ones:

Keeping jobs separate keeps code more organized. 

It is easier for someone coming in to work on the code behind you to support/maintain your work. When a piece of your code clearly has only one job, it's much easier to understand.

It is easier to make changes when you keep things separated. If I need to change the way names are formatted, I can change that in the business logic controller, without having to change the database layer, or the data in the database, or the view. If my table name changes, I can just update the data layer in one spot, even if that data is used by 15 different views. 

It limits how much work you have to do. Think about if you want to change how the data is displayed, maybe just a font or a color. all you have to change is the View. If you just want to change the way the data is formatted
all you do is update the controller and you don't have to worry about changing how the information is stored in the database.

The Code is more reusable. If I just want to have two different views to display the data I just have to update the controller a little and then add the view. If I want to do a totally different view 
with the data formatted and displayed differently I can still use the same data layer and possibly some of the existing controller. You can see how this would save a lot of time.

#### What did the intern do?
The Intern made an effort at this, but he didn't go far enough which is a common mistake. The views were specific to their role which was great, however, the controllers only did a minimal amount of work
in terms of processing the data and formatting. Unfortunately, our intern decided to put most of the formatting of data and business logic inside the data layer. So the data is manipulated in the same way it
was requested. If I want to fix a bug in data formatting it usually involves having to make quite a few changes in the data layer and the controller to get them working. This has caused bugs that could 
be fixed in hours to take over a day in some situations. Eventually, I will have to rewrite the data layer and move all that logic to the controllers but I haven't been able to budget the time yet. 

Hopefully, you can see why this is so important and how much time you can save by keeping your responsibilities and concerns separate in a program. There are a lot of great guides out there on this so if
you are taking on new work please look at how to best do this with whatever technology you are using, your future self will thank you.