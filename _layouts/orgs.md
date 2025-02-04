---
layout: page
---

<div>
<ul>
{% for item_hash in site.data.orgs %}
  {% assign item = item_hash[1] %}
  <li>
  <a href="{{item.meta.slug}}">{{item.meta.title}}</a>
  </li>
{% endfor %}
</ul>
</div>