---
layout: default
custom_css:
  - calendar
custom_js:
  - calendar
---
<script>const LOCATIONS = {{ site.data.orgs[page.org].meta.locations | jsonify }}</script>
<div class="disclaimer">
<strong>This page is not endorsed, nor affilliated with <em>{{ site.data.orgs[page.org].meta.title | escape }}</em>.</br>Please refer to their resources in case of uncertainty.</br>This site is merely a side-project.</strong>
</div>
<article class="post">

  <header class="post-header">
    <h1 class="post-title">{{ site.data.orgs[page.org].meta.title | escape }}</h1>
  </header>

  <a href="#event-calendar-brc">Skip to Event Calendar...</a>

  <div class="intro-text">
  <div class="blurb">
    {{ site.data.orgs[page.org].meta.content.blurb  | mardownify  | newline_to_br }}
  </div>

  <div class="address">
    {{ site.data.orgs[page.org].meta.contact.address | escape | mardownify  | newline_to_br  }}
    <a href="{{ site.data.orgs[page.org].meta.locations.college.url | escape }}">View on a Map</a>
  </div>
  <div class="tel">
    <a href="tel:{{ site.data.orgs[page.org].meta.contact.telephone | escape }}">Telephone: {{ site.data.orgs[page.org].meta.contact.telephone | escape }}</a>
  </div>
  <div class="email">
    <a href="mailto:{{ site.data.orgs[page.org].meta.contact.email | escape }}">Email: {{ site.data.orgs[page.org].meta.contact.email | escape }}</a>
  </div>

  <div class="www">
    <a href="{{ site.data.orgs[page.org].meta.links.www | escape }}">{{ site.data.orgs[page.org].meta.title | escape }} Homepage</a>
  </div>
  <div class="enrol">
    <a href="{{ site.data.orgs[page.org].meta.links.enrol | escape }}">Enrol Here!</a>
  </div>
</div>
</article>

<h3 id="event-calendar-brc">Event Calendar:</h3>
  {%- include custom/calendar.html -%}
<div>
{% assign events = site.data.orgs[page.org].events %}
<a href="#dl-cal" onclick="downloadCalender()" id="dl-cal" class="btn green">Download Shortlisted Events Calendar</a></br>
<a href="#renshortls" onclick="renderShortlistText('renshortls')" class="btn green">Get Shortlisted Items as Text</a></br>
<textarea id="renshortls"></textarea>
{% include events/event_list_anchors.html events=events %}
{% include events/event_list.html events=events %}
</div>