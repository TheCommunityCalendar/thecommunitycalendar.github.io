const LOCATIONS = "locations_key";
const LOCATION_SLUGS = "location_slugs"

function addLocation(pre, t, s, em, te, add, des, ln, w3, icn, out) {
    let title = document.getElementById(pre+t).value;
    let slug = document.getElementById(pre+s).value.toLowerCase().replaceAll(" ", "") || title.toLowerCase().replaceAll(" ", "");
    let desc = document.getElementById(pre+des).value.split('\n').join("\n    ");
    let email = document.getElementById(pre+em).value;
    let tel = document.getElementById(pre+te).value;
    let addr = document.getElementById(pre+add).value.split('\n').join("\n      ");
    let url = document.getElementById(pre+ln).value;
    var w3w = document.getElementById(pre+w3).value;
    let icon = document.getElementById(pre+icn).value || "fa-map";
    if (title == "") {
        alert("title required");
        return;
    }
    var output = `\n${slug}:\n`;
    output += `  title: ${title}\n`;
    if (desc != "") {
        output += `  description: |\n    ${desc}\n`;
    }
    if (tel + email + addr != "") {
        output += `  contact: \n`
        if (tel != "") {
            output += `    telephone: ${tel}\n`
        }
        if (email != "") {
            output += `    email: ${email}\n`
        }
        if (addr != "") {
            output += `    address: |\n    ${addr}\n`;
        }
    }
    if(url != "") {
        output += `  url: ${url}\n`;
    }
    if (w3w != ""){
        var words = w3w.split("/");
        words = words[words.length - 1].split(".");
        if (words.length == 3) {
            output += `  map: https://what3words.com/${words.join(".")}\n`
        } else {
            alert(w3w);
            return;
        }
        
    }
    if (icon != ""){
        output += `  icon: ${icon}\n`
    }
    
    var location_slugs = [];
    
    if(LOCATION_SLUGS in window.sessionStorage) {
        location_slugs = JSON.parse(window.sessionStorage.getItem(LOCATION_SLUGS));
    }

    if (location_slugs.indexOf(slug) >= 0) {
        alert(`A location already exists with slug: ${slug}`);
    } else {
        location_slugs.push(slug);
        window.sessionStorage.setItem(LOCATION_SLUGS, JSON.stringify(location_slugs));
        var locations = [];
        if(LOCATIONS in window.sessionStorage) {
            locations = JSON.parse(window.sessionStorage.getItem(LOCATIONS));
        }
        locations.push(output);
        window.sessionStorage.setItem(LOCATIONS, JSON.stringify(locations));
        console.log(JSON.parse(window.sessionStorage.getItem(LOCATIONS)));
        document.getElementById(out).innerHTML += output + "\n";
        updateRendering('event_location', 'meta_locations');
    }
}

function updateRendering(loc_slugs, locations) {
    if(LOCATION_SLUGS in window.sessionStorage) {
        location_slugs = JSON.parse(window.sessionStorage.getItem(LOCATION_SLUGS));
        var opts = "";
        for(let i = 0; i < location_slugs.length; i++) {
            opts += `<option value=${location_slugs[i]}>${location_slugs[i]}</option>`;
        }
        document.getElementById(loc_slugs).innerHTML = opts;
    }
    if(LOCATIONS in window.sessionStorage) {
        locs = JSON.parse(window.sessionStorage.getItem(LOCATIONS)).join("");
        document.getElementById(locations).innerHTML = locs;
    }
}

function generateMeta(pre, t, s, des, em, te, add, ln, locs, out) {
    let title = document.getElementById(pre+t).value;
    let slug = document.getElementById(pre+s).value.toLowerCase().replaceAll(" ", "-") || title.toLowerCase().replaceAll(" ", "-");
    let desc = document.getElementById(pre+des).value.split('\n').join("\n    ");
    let email = document.getElementById(pre+em).value;
    let tel = document.getElementById(pre+te).value;
    let addr = document.getElementById(pre+add).value.split('\n').join("\n    ");
    let links = document.getElementById(pre+ln).value.split('\n').join("\n  ");
    let locations = document.getElementById(pre+locs).value.split('\n').join("\n  ");

    var output = "---\n";
    output += `title: ${title}\n`;
    output += `slug: ${slug}\n`;
    output += `contact: \n  telephone: ${tel}\n  email: ${email}\n  address: |\n  ${addr}\n`;
    output += `links: \n  ${links}\n`;
    output += `locations:\n  ${locations}\n`
    output += `content: \n  blurb: |\n    ${desc}\n`;
    output += "---\n";

    document.getElementById(out).innerHTML = output;
}

Date.prototype.addMonths = function(months) {
    var date = new Date(this.valueOf());
    date.setMonth(date.getMonth() + months);
    return date;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
Date.prototype.formattedString = function() {
    var date = new Date(this.valueOf());
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date);
    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return `${year}-${month}-${day}`;
}






function generateEvents(pre, t, l, des, d, st, et, re, r, rc, out) {
    let title = document.getElementById(pre+t).value;
    let location = document.getElementById(pre+l).value;
    let desc = document.getElementById(pre+des).value.split('\n').join("\n  ");
    let date = document.getElementById(pre+d).value || new Date();
    let start = document.getElementById(pre+st).value;
    let end = document.getElementById(pre+et).value;
    let repeat_every = document.getElementById(pre+re).value || 0;
    let repeat = document.getElementById(pre+r).value;
    let repeat_count = document.getElementById(pre+rc).value || 0;
    // console.log(title.value);
    // console.log(desc.value);
    // console.log(date.value);
    // console.log(start.value);
    // console.log(end.value);
    // console.log(repeat.value);

    var date_out = "";
    if ( repeat == "none" ) {
        date_out = `  - { date: "${new Date(date).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
    } else {
        let date_iter = new Date(date);
        for (let i = 0; i <= repeat_count; i++) {
            switch (repeat) {
                case 'days':
                    date_out += `  - { date: "${new Date(date).addDays(i*repeat_every).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                case 'weeks':
                    date_out += `  - { date: "${new Date(date).addDays(i*7*repeat_every).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                // case 'fortnightly':
                //     date_out += `  - { date: "${new Date(date).addDays(i*14).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                //     break;
                case 'months':
                    date_out += `  - { date: "${new Date(date).addMonths(i*repeat_every).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                default:
                    console.log(`Unknown value for repeat: ${repeat}.`);
            }
        }

    }

    var output = "---\n";
    output += `title: ${title}\n`;
    output += "dates:\n";
    let date_iter = new Date(date);
    // for (let i = 0; i < 5; i++) {
    //     output += `  - { date: "${date_iter.addDays(7*i).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
    // }
    output += date_out;
    output += `synopsis: |\n  ${desc}\n`;
    output += "---\n";

    document.getElementById(out).innerHTML = output;
}
