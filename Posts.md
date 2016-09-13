---
layout: page
title: Posts
permalink: /Posts/
---
<ul class="postlist">
  {% for post in site.posts %}
    <li class="postlist-listitem">
      <a class="postlist-link" href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>