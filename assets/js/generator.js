function generateEvents(pre, t, l, des, d, st, et, r, rc, out) {
    let title = document.getElementById(pre+t).value;
    let location = document.getElementById(pre+l).value;
    let desc = document.getElementById(pre+des).value.split('\n').join("\n  ");
    let date = document.getElementById(pre+d).value || new Date();
    let start = document.getElementById(pre+st).value;
    let end = document.getElementById(pre+et).value;
    let repeat = document.getElementById(pre+r).value;
    let repeat_count = document.getElementById(pre+rc).value || 0
    // console.log(title.value);
    // console.log(desc.value);
    // console.log(date.value);
    // console.log(start.value);
    // console.log(end.value);
    // console.log(repeat.value);

    var date_out = ""
    if ( repeat == "none" ) {
        date_out = `  - { date: "${new Date(date).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
    } else {
        let date_iter = new Date(date);
        for (let i = 0; i <= repeat_count; i++) {
            switch (repeat) {
                case 'daily':
                    date_out += `  - { date: "${new Date(date).addDays(i).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                case 'weekly':
                    date_out += `  - { date: "${new Date(date).addDays(i*7).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                case 'fortnightly':
                    date_out += `  - { date: "${new Date(date).addDays(i*14).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
                    break;
                case 'monthly':
                    date_out += `  - { date: "${new Date(date).addMonths(i).formattedString()}", time: { start: "${start}", end: "${end}" }, location: ${location} }\n`; 
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
    output += `synopsis: |\n  ${desc}\n`
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