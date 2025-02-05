let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");

const eventsIcons = document
    .querySelectorAll(".calendar-dates li");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function addDatesFrom(title, color, jseventdate) {
    let jsondate = jseventdate.date.split("-");
    var my_ignored = [];
    if (IGNORED in localStorage) {
        let my_ignored_str = localStorage.getItem(IGNORED);
        my_ignored = JSON.parse(my_ignored_str);
    }

    if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
        var clsname = sluggify(title);
        if (my_ignored.indexOf(clsname) >= 0){
            clsname += " ignored";
        } else {
            console.log(clsname);
            console.log(my_ignored);
        }
        let jsonstart = jseventdate.time.start.replaceAll(":", "");
        let jsonend = jseventdate.time.end.replaceAll(":", "");
        let jsonloc = jseventdate.location;

        let span = document.getElementById("day-"+jsondate.join(""));
        if(span !== null) {

            span.innerHTML += `<i class="event-count-icon ${clsname}" style="background-color: ${color};" data-color="${color}"></i>`;
            var ul = span.getElementsByTagName("ul")[0];
            let event_li = `<li class="${clsname}"><a href="#anc_${clsname}">${title} : ${jsonstart} - ${jsonend} @ ${jsonloc}</a></li>`;
            ul.innerHTML += event_li;
        }
    }
}

function addEventsFrom(jsonStr) {
    let json = jsonStr;
    for (let e in json) {
        let jsonevent = json[e];

        let jsontitle = jsonevent.title;
        let jsoncolor = jsonevent.color || "#999";
        for (let jsd in jsonevent.dates) {
            jseventdate = jsonevent.dates[jsd];
            if (jseventdate instanceof Array) {
                for (let ev in jseventdate) {
                    addDatesFrom(jsontitle, jsoncolor, jseventdate[ev]);
                }
            } else {
                addDatesFrom(jsontitle, jsoncolor, jseventdate);
            }
            
        }
    }
};


/*
i = id
c = classes
v = radio value
l = label content i.e. list of events span > ul li && span > i
*/
function radioMe(i, c, v, l) {
    return `<input class="radio-date ${c}" type="radio" id="${i}" name="date" value="${v}" /><label for="${i}" class="date ${c}">${l}<input class="radio-close-date" type="radio" id="close-${i}" name="date" value="${v}" /><label for="close-${i}" class="close-date">X</label></label>`;
};

const SHORTLIST = "shortlisted" // SESSION KEY
const IGNORED = "ignored" // SESSION KEY

// Function to generate the calendar
const manipulate = () => {
    let week_start = 1;
    // Get the first day of the month
    let dayone = new Date(year, month, 0).getDay(); // === 0 ? 6 : new Date(year, month, 1).getDay() - week_start;

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay(); // === 0 ? 6 : new Date(year, month, lastdate).getDay() - week_start;

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    let lastDates = new Date(year, month, 0);
    let lastMonth = lastDates.getMonth();
    let lastYear = lastDates.getFullYear();
    for (let i = dayone; i > 0; i--) {
        let dataDate = ""+lastYear+numberPad(lastMonth+1, 2)+numberPad(monthlastdate - i + 1, 2);
        // lit += `<li class="inactive date" onclick="eventClicked(this)" data-date="${dataDate}">${monthlastdate - i + 1}</li>`;
        lit += radioMe("id-"+dataDate, "date inactive", dataDate,(monthlastdate - i + 1)+`<span id="day-${dataDate}" class="event-count" data-count="5"><ul></ul></span>`);

    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {

        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        let dataDate = ""+year+numberPad(month+1,2)+numberPad(i,2);
        // lit += `<li class="${isToday} date" onclick="eventClicked(this)" data-date="${dataDate}">${radioMe("id-"+dataDate,dataDate,i+`<span id="day-${dataDate}" class="event-count" data-count="5"></span></li>`)}`;
        lit += radioMe("id-"+dataDate, isToday, dataDate,i+`<span id="day-${dataDate}" class="event-count" data-count="5"><ul></ul></span>`);
    }

    // console.log(dayend);
    // Loop to add the first dates of the next month
    let nextDates = new Date(year, month+1, 1);
    let nextMonth = nextDates.getMonth();
    let nextYear = nextDates.getFullYear();
    if (dayend > 0) {
        for (let i = dayend; i < 7; i++) {
            let dataDate = ""+nextYear+numberPad(nextMonth+1, 2)+numberPad(i - dayend + 1, 2);
            // lit += `<li class="inactive date" onclick="eventClicked(this)" data-date="${dataDate}">${i - dayend + 1}</li>`
            lit += radioMe("id-"+dataDate, "date inactive", dataDate,(i - dayend + 1)+`<span id="day-${dataDate}" class="event-count" data-count="5"><ul></ul></span>`);
        }
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;

    addEventsFrom(event_data);
    loadSession();
}




// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {

        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {

            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());

            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {

            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});

function numberPad(num, targetLength) {

    let numStr = num.toString();
  
    while (numStr.length < targetLength) {
  
      numStr = '0' + numStr;
  
    }
  
    return numStr;
  
}




    function toggleEnrolmentPreference(i, tbl) {
        toggleSitting(i);
        document.getElementById(tbl).classList.toggle("shortlisted");
    }

    function loadSession() {
        if (SHORTLIST in localStorage) {
            var my_sittings_str = localStorage.getItem(SHORTLIST);
            var my_sittings = JSON.parse(my_sittings_str);

            for (var el in my_sittings) {
                console.log("Sitting...:");
                console.log(my_sittings[el]);
                let cb = document.getElementById(my_sittings[el].id);
                
                cb.checked = true;

                getParentOfType(cb, "table").classList.add("shortlisted")

                initCalendarEvent(my_sittings[el]);
            }
        }
    }

    function getParentOfType(haystack, needle) {
        var count = 0;
        child = haystack;
        while(child.parentElement.nodeName.toLowerCase() != needle.toLowerCase()) {
            child = child.parentElement;
            count++;
        }
        return child.parentElement;
    }
    function toggleTable(i, t) {
        console.log(t.innerHTML);
        document.getElementById(i).style.display = document.getElementById(i).style.display == "none" ? "table-row-group" : "none";
        t.innerHTML = t.innerHTML == "[Hide]" ? "[Show]" : "[Hide]";
    }

    function addShortlistItem(sitting) {
        let dates = JSON.parse(sitting.dates);
        for (let d in dates){
            let jsondate = dates[d][0].split('T')[0].split("-");

            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.add("shortlisted");
                }
            }
        }
    }
    function removeShortlistItem(sitting) {
        let dates = JSON.parse(sitting.dates);
        for (let d in dates){
            let jsondate = dates[d][0].split('T')[0].split("-");

            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.remove("shortlisted");
                }
            }
        }
    }

    function initCalendarEvent(sitting) {
        let dates = JSON.parse(sitting.dates);
        for (let d in dates){
            let jsondate = dates[d][0].split('T')[0].split("-");
            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.add("shortlisted");
                }
            }
        }
        

    }

    function toggleSitting(i) {
        
        var cb = document.getElementById(i);
        var sitting = {id: i, title: cb.getAttribute("data-title"), dates: cb.getAttribute("data-dates").replaceAll("--", ":")};

        // initCalendarEvent(sitting);
        
        if (SHORTLIST in localStorage) {
            var my_sittings_str = localStorage.getItem(SHORTLIST);
            var my_sittings = JSON.parse(my_sittings_str);

            var found = -1;
            for (let el = 0; el < my_sittings.length; el++) {
                if (my_sittings[el].id == i) {
                    found = el;
                    break;
                }
            }
            if ( found < 0 ) { // Not found so Add
                my_sittings.splice(0, 0, sitting);
                addShortlistItem(sitting);
            } else {
                my_sittings.splice(found,1);
                removeShortlistItem(sitting);
            }
            localStorage.setItem(SHORTLIST, JSON.stringify(my_sittings));
        } else {
            localStorage.setItem(SHORTLIST, JSON.stringify([sitting]));
            addShortlistItem(sitting);
        }
    }


    function toTitleCase(str) {
        return str.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
    }
    
    
    function downloadCalender() {
        if (SHORTLIST in localStorage) {
            var cal = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//bobbin v0.1//NONSGML iCal Writer//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\n";
            var my_sittings_str = localStorage.getItem(SHORTLIST);
            var my_sittings = JSON.parse(my_sittings_str);
            // console.log(my_sittings);
            var found = -1;
            for (let el = 0; el < my_sittings.length; el++) {
                item_dates = JSON.parse(my_sittings[el].dates);
                // console.log(item_dates);
                for (let d = 0; d < item_dates.length; d++) {
                    //var dtstart = item_dates[d].replaceAll("-", "").replaceAll(":","") + "00";
                    var dtstart = item_dates[d][0].replaceAll("-", "").replaceAll(":","") + "00";
                    var dtend = item_dates[d][1].replaceAll("-", "").replaceAll(":","") + "00";
                    cal += "BEGIN:VEVENT\n";
                    cal += "DTSTART:"+dtstart+"\n"
                    cal += "DTEND:"+dtend+"\n";
                    cal += "DTSTAMP:20250204T120000\n";
                    cal += "UID:" + my_sittings[el].title + dtstart + "@oniccah.com\n";
                    cal += "CREATED:" + currentDateTime() + "\n";
                    cal += "DESCRIPTION:Description: " + my_sittings[el].title + "\n"; // synopsis
                    cal += "LAST-MODIFIED:20250204T120000\n";
                    cal += "SEQUENCE:0\n";
                    cal += "STATUS:CONFIRMED\n";
                    cal += "SUMMARY:" + toTitleCase(my_sittings[el].title.split("-").join(" ")) + "\n"; // Title
                    cal += "TRANSP:OPAQUE\n";
                    cal += "END:VEVENT\n";
                }
            }
            cal += "END:VCALENDAR";
            // console.log(cal);
            window.open( "data:text/calendar;charset=utf8," + escape(cal));
        }
    }


/* EVENT LIST ANCHORS */
function toggleAllIgnore(id) {
    var tgl = document.getElementById("eal_all").checked;
    var ul_list = document.getElementById(id);
    var items = ul_list.getElementsByTagName("input");
    for (i = 0; i < items.length; i++) {
      items[i].checked = tgl;
      toggleEventIgnore(items[i].id);
    }
}

function currentDateTime() {
    return new Date().toJSON().replaceAll("-", "").replaceAll(":", "").split(".")[0];
}
function sluggify(str) {
    return slugify(str); //str.replaceAll(" ", "-").replaceAll("(", "").replaceAll(")", "").replaceAll(/'/g, "-").replaceAll("\&", "").replaceAll("--", "-").toLowerCase();
}

function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
    str = str.toLowerCase(); // convert string to lowercase
    str = str.replace("’", '-') // replace magic apostrophe with hyphen
             .replaceAll("é", "e")
             .replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
             .replace(/\s+/g, '-') // replace spaces with hyphens
             .replace(/-+/g, '-'); // remove consecutive hyphens
    return str;
}
  
function toggleEventIgnore(id) {
  // Get the checkbox
  var checkBox = document.getElementById(id);
  let clsname = sluggify(id.replace("cb_", ""));

  // console.log(clsname);
  let els = document.getElementsByClassName(clsname);
  // Get the output text
  var targ_tbl = document.getElementById(id.replace("cb_", "anc_"));
  var targ_ln = document.getElementById(id.replace("cb_", "ln_"));
  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    targ_ln.classList.remove("ignored");
    targ_tbl.classList.remove("ignored");
    for (el in els){
        if (! isNaN(el)) {
            els[el].classList.remove("ignored");
        } else {
        //    console.log(el);
        }
    }
   targ_tbl.classList.remove("ignored");
   targ_ln.classList.remove("ignored");
  } else {
    for (el in els){
        if (! isNaN(el)) {
            els[el].classList.add("ignored");
        } else {
        //    console.log(el);
        }
    }
   targ_tbl.classList.add("ignored");
   targ_ln.classList.add("ignored");
  }

    if (IGNORED in localStorage) {
        let my_ignored_str = localStorage.getItem(IGNORED);
        var my_ignored = JSON.parse(my_ignored_str);

        var found = -1;
        for (let el = 0; el < my_ignored.length; el++) {
            if (my_ignored[el] == clsname) {
                found = el;
                break;
            }
        }
        if (checkBox.checked == false && found < 0){
            my_ignored.splice(0, 0, clsname);
        } else if (checkBox.checked == true && found >= 0){
            my_ignored.splice(found,1); // Found so remove
        }
        localStorage.setItem(IGNORED, JSON.stringify(my_ignored));
    } else {
        localStorage.setItem(IGNORED, JSON.stringify([clsname]));
    }
}

function loadIgnored() {
    let my_ignored_str = localStorage.getItem(IGNORED);
    var my_ignored = JSON.parse(my_ignored_str);
    for (i in my_ignored) {
        let cl = my_ignored[i];
        // console.log(cl);
        document.getElementById("ln_" + cl).classList.add("ignored");
        document.getElementById("anc_" + cl).classList.add("ignored");
        document.getElementById("cb_" + cl).checked = false;
    }
}

function renderShortlistText() {
    if (SHORTLIST in localStorage) {
        var my_sittings_str = localStorage.getItem(SHORTLIST);
        var my_sittings = JSON.parse(my_sittings_str);
        console.log("Sittings...:");
        console.log(my_sittings);
        var output = [];
        for (let i = 0; i < my_sittings.length; i++) {
            let s = my_sittings[i];
            let t = toTitleCase(s.title.replaceAll("-", " "));
            let dates = JSON.parse(s.dates);
            for (let j = 0; j < dates.length; j++) {
                let d = dates[j][0]; // We only care about the start time
                let time = d.split("T")[1];

                let date = new Date(dates[j][0]);
                let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
                let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
                let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);

                output.push(`\"${t}\" ( ${day}-${month}-${year} ${time} )`);
            }
        }
        alert(output.join("\n"));
    }
}


function clearLocalStorage() {
    localStorage.clear();
}
manipulate();
loadSession();
loadIgnored();