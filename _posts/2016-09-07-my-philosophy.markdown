---
layout: post
title:  "My Philosophy in Technical Work"
date:   2016-09-07 10:15:08 -0600
categories: Tech 
---

To help frame my work, give reference to how decisions are made in projects, and to share my views on what is important in a software development project I thought I would share my top considerations once I've accepted a project. 

### Key Considerations in a project

<ul>
    <li class="parent-list-style2">The Customer
        <ul>
            <li class="child-list-style2">The Customer is the most important consideration in any project. My work, is almost always, ultimate intended for someone else.  If I am doing a project at work, the department, manager, or individual asking for the software and/or using the software is the customer. If the results of a project don't meet the needs of a customer then the project has failed. I could make the most sophisticated software on the planet but if it was useless to the person I made it for I would consider the project a failure. Note that the customer coming first doesn't always mean the customer is always right. If the customer doesn't really know what they want things can quickly get complicated.
            </li>
        </ul>
    </li>
    <li class="parent-list-style2">Security
        <ul>
            <li class="child-list-style2">Security has to be the top technical consideration. What security means might vary based on a project but it's always the first technical consideration in a project. Security needs to be such a high priority because if it is not considered at every stage of the project and if it is not counted as important it will fall to the wayside. Security can be expensive, time-consuming, and many times to many people, unimportant. It's not uncommon to hear a customer or manager say that the data doesn't seem sensitive so we must not need to secure it. While it's possible that could be true, the server itself might be valuable enough without any software on it. If an attacker breaches your super simple website but in the process can execute code on your server they could turn it into a botnet controller or a spam/virus distribution point. I'll post considerably on this topic and on ways to get those around you to take security seriously and why it is so important to keep a high priority.</li>
        </ul>
    </li>
    <li class="parent-list-style2">Simplicity
        <ul>
            <li class="child-list-style2">
            Simple is always best. This is firmly my opinion but it is just that. I prefer in how I code, how I write, and how I design projects that the simplest solution is usually the best. Keeping in mind my top 2 principles I feel like I can more easily adapt to my customer's need and keep my app secure by eliminating the complexity that is not needed. What is or is not needed complexity is certainly debatable and one of the harder decisions to make.
            </li>
        </ul>
    </li>
    <li class="parent-list-style2">Integrity
        <ul>
            <li class="child-list-style2">This comes in at #4, not because of its 4th important but because once you get used to doing it, it's not that hard. Integrity is simple. Do what you say you will do, own your mistakes, and don't take credit for other peoples work. If you have to qualify your behavior after the fact, you might have failed here. Unexpected delays happen. Problems that increase cost come up. Integrity is letting the customer know ASAP and doing your best to prevent them. The other side of this is not stealing others people work. It's sometimes just glossed over but software piracy, reusing someone else's code or using non-commercial software commercially are all things that signal an integrity issue. If the moral part of this isn't important to you, this is still key due to the liability that could be introduced into your organization by violating this principle.</li>
        </ul>
    </li>
    <li class="parent-list-style2">Reliability
        <ul>
            <li class="child-list-style2">Work should be done reliably. This means that features should generally work on release, although bugs certainly happen. It also means that the same set of actions should get the same result from a piece of code or software. Software that is unpredictable isn't usable. Code and software should also be reliable for developers. If someone comes in behind me to work on my code, they should have at least an idea of what I was doing. Comments and documentation are never perfect as there is never enough time,  but enough should be done that someone else could take over the project.</li>
        </ul>
    </li>
</ul>
