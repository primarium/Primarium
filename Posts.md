---
layout: page
title: Posts
permalink: /Posts/
---
<div class="postNav">
    <a class='postclick' data-target="allposts">All posts</a>
    {% for category in site.categories %}
        <a class='postclick' data-target="{{ category | first | remove:' ' }}">{{ category | first }}</a> 
    {% endfor %}
</div>
<hr class='hr1' />
<div class="catbloc allposts">
    <h2>All posts</h2>
        <ul class="postlist">
            {% for post in site.posts %}
                <li class="postlist-listitem">
                    <a class="postlist-link" href="{{ post.url }}">
                    {{ post.title }}
                    </a>
                </li>
            {% endfor %}
        </ul>
</div>
<div>
{% for category in site.categories %}
    <div class="catbloc {{ category | first | remove:' ' }}">
        <h2>{{ category | first }}</h2>
        <ul class="postlist">
           {% for posts in category %}
             {% for post in posts %}
               {% if post.url %}
                 <li class="postlist-listitem">
                   <a class="postlist-link" href="{{ post.url }}">
                     {{ post.title }}
                   </a>
                 </li>
               {% endif %}
             {% endfor %}
           {% endfor %}
        </ul>
    </div>
{% endfor %}
</div>
