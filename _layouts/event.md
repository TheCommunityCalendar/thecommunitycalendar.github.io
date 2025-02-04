---
layout: page
---

<div>
{% for item_hash in site.data.orgs.brc.events %}
  {% assign item = item_hash[1] %}
  {% if item.dates.first.date %}
    {% for date in item.dates %}
        {% assign loc = date.location %}
        {% assign x = site.data.orgs.brc.meta.locations[loc] %}
        Location: {{ x.title }}
        Icon: {{ x.icon }}
        URL: {{ x.url }}
    {% endfor %}
  {% else %}
      {% for date_group in item.dates %}
        {% for date in date_group %}
            {% assign loc = date.location %}
            {% assign x = site.data.orgs.brc.meta.locations[loc] %}
            Location: {{ x.title }}
            Icon: {{ x.icon }}
            URL: {{ x.url }}
        {% endfor %}
      {% endfor %}
  {% endif %} 
{% endfor %}
</div>