---
layout: default
title: Event Generator
permalink: /generator/
custom_js:
  - generator
---

<input type="text" id="event_title" /><label for="event_title">Event Title</label><br>
<input type="text" id="event_location" /><label for="event_location">Event Location</label><br>
<textarea id="event_desc"></textarea><label for="event_desc">Event Description</label><br>
<input type="date" id="event_date" /><label for="event_date">Event Date</label><br>
<input type="time" id="event_start_time" /><label for="event_start_time">Event Start Time</label><br>
<input type="time" id="event_end_time" /><label for="event_end_time">Event Finish Time</label><br>
<select id="event_repeat">
<option value="none">No Repeat</option>
<option value="daily">Repeat Daily</option>
<option value="weekly">Repeat Weekly</option>
<option value="fortnightly">Repeat Fortnightly</option>
<option value="monthly">Repeat Monthly</option>
</select><label for="event_repeat">Event Repeats</label><br>
<select id="event_repeat_count">
<option value=0>0</option>
<option value=1>1</option>
<option value=2>2</option>
<option value=3>3</option>
<option value=4>4</option>
<option value=5>5</option>
<option value=6>6</option>
<option value=7>7</option>
<option value=8>8</option>
<option value=9>9</option>
<option value=10>10</option>
<option value=11>11</option>
<option value=12>12</option>
<option value=13>13</option>
<option value=14>14</option>
<option value=15>15</option>
</select><label for="event_repeat_count">Number of Repeats</label><br>

<button onclick="generateEvents('event_', 'title', 'location', 'desc', 'date', 'start_time', 'end_time', 'repeat', 'repeat_count', 'generatorOutput')">Generate</button>

<pre id="generatorOutput"></pre>