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

// Array of month names
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
// function addEvents() {
//     let eventCount = document.getElementsByClassName("event-count");
//     for (el in eventCount) {
//     eventCount[el].innerHTML += "<ul></ul>";
//     }
//     // for (el in eventCount) {
//     //     var ul = "<ul>";
//     //     for (let c = 1; c <= 0; c++) { // eventCount[el].getAttribute("data-count"); c++) {
//     //         eventCount[el].innerHTML += `<i class="event-count-icon" style="background-color: #${numberPad(Math.round(Math.min(Math.max(2*(255/(c*3)), 30), 255)).toString(16),2)}${numberPad(Math.round(Math.min(Math.max(2*(255/(c*2)), 30), 255)).toString(16),2)}${numberPad(Math.round(Math.min(Math.max(2*(255/(c+1)), 30), 255)).toString(16),2)};" data-color="#${numberPad((Math.round(255/c)).toString(16),2)}${numberPad((Math.round(128/c)).toString(16),2)}${numberPad((Math.round(255/c)).toString(16),2)}"></i>`; //${eventCount[el].getAttribute("data-count")}</i>`; //`<span class="event-count-icon">${c+1}</span>`;
//     //         ul += `<li>Event: ${c}</li>`;
//     //     }
//     //     ul += "</ul";
        
//     //     eventCount[el].innerHTML += ul;
//     // }
// };


// let jsonSamp = JSON.stringify([
// // {
// //     date: "20250205",
// //     startTime: "1000",
// //     endTime: "1300",
// //     title: "A new Event!",
// //     color: "#669"
// // },
// // {
// //     date: "20250206",
// //     startTime: "1400",
// //     endTime: "1600",
// //     title: "A second new Event!",
// //     color: "#696"
// // },
// // {
// //     dates: [ {
// //             date: "20250206",
// //             startTime: "1500",
// //             endTime: "1700",
// //             subtitle: "Day 1"
// //         },{
// //             date: "20250207",
// //             startTime: "0900",
// //             endTime: "1230",
// //             subtitle: "Day 2"
// //         }
// //     ],
// //     title: "A multi Event!",
// //     color: "#696"
// // },
// // {
// //     dates: [ {
// //             date: "20250208",
// //             startTime: "2000",
// //             enddate: "20250210",
// //             endTime: "1100",
// //             subtitle: "Whoooaaaa!"
// //         }
// //     ],
// //     title: "A spanning (multi-day) Event!",
// //     color: "#696"
// // },
// {
//     title: "Compassionate Journaling",
//     dates: [ 
//         { date: "20250313", time: { start: "1000", end: "1230" }, location: "college" },
//         { date: "20250320", time: { start: "1000", end: "1230" }, location: "college" },
//         { date: "20250327", time: { start: "1000", end: "1230" }, location: "college" },
//         { date: "20250403", time: { start: "1000", end: "1230" }, location: "college" }
//     ],
//     color: "#696"
// }
// ]);

/* // jsonSamp ---
 let jsonSamp = JSON.stringify([{"title":"Building Resilience","layout":"post","tags":["Mental Health","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-19","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-04-30","time":{"start":"10:00\"","end":"13:00"},"location":"teams"}],"author":{"name":"Belfast Recovery College","url":"https://oniccah.com"},"synopsis":"Resilience is how we adapt in the face of adversity, trauma, tragedy, threats or sources of stress. By working out what we find stressful and by building on our inner strength we are more likely to be able to adapt to these sources of stress. Someone who is resilient has the knowledge, skills and attitude that help maintain their wellbeing. This course explores the benefits and barriers to becoming more resilient and how we can support ourselves."},{"title":"Building Self Esteem","tags":["Mental Health","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-26","time":{"start":"14:00","end":"16:00"},"location":"college"},{"date":"2025-04-02","time":{"start":"14:00","end":"15:30"},"location":"teams"},{"date":"2025-06-18","time":{"start":"14:00","end":"16:00"},"location":"college"}],"synopsis":"Many of us struggle with self-esteem issues and self-confidence daily. This can hold us back and keep us stuck in a very isolated place. We tend to take our self-worth from others and their opinion of us instead of believing in our own value and worth as a unique individual. Please join us where we can all learn and develop skills and knowledge. You will be involved in conversations where you will feel comfortable in the course to understand how important it is to value yourself and not let judgement of others hold us back."},{"title":"Chair Pilates","tags":["Fitness","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-03-24","time":{"start":"10:00\"","end":"11:00"},"location":"college"},{"date":"2025-03-31","time":{"start":"10:00\"","end":"11:00"},"location":"college"},{"date":"2025-04-07","time":{"start":"10:00\"","end":"11:00"},"location":"college"},{"date":"2025-04-14","time":{"start":"10:00\"","end":"11:00"},"location":"college"}],"synopsis":"We all know that being physically active is good for us, but not everyone finds it easy to move. Chair Pilates sessions are modified to suit everyone, including individuals with limited mobility. \n\nThe sessions help to strengthen and tones muscles, improve flexibility and joint mobility, improving overall wellbeing. Even small amounts of activity can be a great boost to our health. So, why not give it a go? You might be surprised at just how good it makes you feel."},{"title":"Communication and Assertiveness","tags":["Mental Health","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-20","time":{"start":"10:00","end":"14:00"},"location":"college"},{"date":"2025-05-22","time":{"start":"10:00","end":"14:00"},"location":"college"}],"synopsis":"Do you ever feel as though your opinions aren’t heard, or that people readily dismiss or undermine your views? Maybe you have a habit of handling\n\nSituations aggressively, lack the confidence to speak up or find it hard to express your needs and wishes.\n\nThis course aims to help you develop skills to communicate better with others respectfully and with compassion. We will explore appropriate assertiveness techniques to enable students to engage in better conversations and achieve better outcomes for yourself and others."},{"title":"Compassion Fatigue","tags":["Mental Health","Carers","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-18","time":{"start":"14:00","end":"16:00"},"location":"teams"},{"date":"2025-04-28","time":{"start":"13:30","end":"16:00"},"location":"college"}],"synopsis":"Compassion fatigue is an emotional and physical burden created by the trauma of helping others in distress, which leads to a reduced capacity for empathy towards suffering in the future. This is especially common in front line workers, however, we are all vulnerable. This course looks at the symptoms and stages in Compassion Fatigue, and highlights self-management strategies that can be employed to maintain wellness."},{"title":"Compassionate Journaling","tags":["Mental Health","Carers","Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[[{"date":"2025-03-13","time":{"start":"10:00","end":"12:30"},"location":"college"},{"date":"2025-03-20","time":{"start":"10:00","end":"12:30"},"location":"college"},{"date":"2025-03-27","time":{"start":"10:00","end":"12:30"},"location":"college"},{"date":"2025-04-03","time":{"start":"10:00","end":"12:30"},"location":"college"}],[{"date":"2025-03-19","time":{"start":"10:00","end":"12:30"},"location":"college"},{"date":"2025-03-26","time":{"start":"10:00","end":"12:30"},"location":"college"},{"date":"2025-04-02","time":{"start":"10:00","end":"12:30"},"location":"college"}]],"synopsis":"This is a 3 week course where you will learn various styles of journaling to help you engage with your wellbeing. Focusing on how a journal can be as unique as you are with some simple tips along the way, such as habit tracking, medication and mood trackers. This course provides creativity and structure to your journaling styles.\n\nThursday 13th March – 3rd April (each Wednesday)10am – 12:30pm \n\nAttendance each week required"},{"title":"Disclosing Your Mental Health Condition","tags":["Mental Health","Work","Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-12","time":{"start":"14:00","end":"16:00"},"location":"college"}],"synopsis":"Deciding whether to tell your employer about your mental health can be a difficult choice and a dilemma for some people. This useful practical course is a guide to advocating for yourself in the workplace. It makes you aware of your rights and responsibilities, as well as weighing up the pros and cons to help you decide the right course of action for you."},{"title":"Discover the Recovery College","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-20","time":{"start":"12:00","end":"13:00"},"location":"college"},{"date":"2025-05-22","time":{"start":"14:30","end":"15:30"},"location":"college"}],"synopsis":"Have you heard of the Recovery College? Why not come along to our Discover the Recovery College taster session, to find out about all the free wellbeing and mental health education courses which are open to everyone. You will learn all about who we are and what we do. Mental health can impact on us all so maintaining wellness to live well is key for us all. In this session you will have the opportunity to hear real life stories of how others have used the Recovery College to help them in their recovery journey. Peer Educators will be there on hand to help explain the range of short courses, how they may be helpful to you and help you choose what is right for you. Don’t worry about filling in enrolment forms as we can help with all of this. The session like all our courses are informal. So please come along and bring along a friend."},{"title":"Embedding Hope and Recovery In Our Day to Day Lives","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-12","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-05-21","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"We all have hopes and dreams and sometimes life can get in the way of making these dreams a reality. When you have been diagnosed with a mental health condition the impact can be overwhelming for you and a loved one. Too often people think they will not fulfil their hopes, ambitions or aspirations. This course gives the opportunity to explore the concept of recovery in our day to day lives as it unique to them. It will provide space for you to reflect on what might help you grow beyond what has happened and take a step on your recovery journey to rebuild a satisfying, valued and purposeful life. The course can also help us think about embedding hope in our lives and learn about opportunities available to us that can assist us in making that that step to living well with or without the symptoms of mental ill health."},{"title":"Employment Support Allowance (ESA) & Universal Credit","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-04-01","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-06-10","time":{"start":"10:00","end":"13:00"},"location":"teams"}],"synopsis":"Are you or someone you care for in receipt of ESA? Have you claimed this benefit and been turned down? Are you considering a claim for this benefit?\n\nAre you aware of what Universal Credit involves? Do you know how it will affect Employment Support Allowance?\n\nIf you have answered yes to any of these questions and you would like to know more about these benefits then this course is for you. This course will explain the criteria of entitlement to these benefits, the process for claiming and the appeals process if you are turned down. It will also outline the support that is available from advice services."},{"title":"Food and Mood","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-11","time":{"start":"10:00","end":"14:00"},"location":"college"},{"date":"2025-06-03","time":{"start":"10:00","end":"13:00"},"location":"college"}],"synopsis":"The relationship between our diet and our mental health is complex. However, research shows a link between what we eat and how we feel. Certain foods and nutrients help your brain to make chemicals that can impact your mood, attention and focus, while other foods can zap your energy. Eating well can help you feel better.\n\nDuring this course we explore the relationship between what you eat and how you feel, including tips on how to introduce healthy eating into your life."},{"title":"Getting A Good Night’s Sleep","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-19","time":{"start":"13:00","end":"15:30"},"location":"college"},{"date":"2025-05-28","time":{"start":"14:00","end":"16:00"},"location":"teams"}],"synopsis":"Getting a good night’s sleep is an important part of mental health recovery. This course will explore the benefits of getting a good night’s sleep, what can prevent us from getting a good night’s sleep and practical tips to help you get a good night’s sleep."},{"title":"Getting the Most From Your Appointments","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-18","time":{"start":"10:00","end":"12:00"},"location":"teams"},{"date":"2025-05-20","time":{"start":"10:00","end":"12:00"},"location":"college"}],"synopsis":"This course will enable service users, carers and mental health practitioners to effectively prepare for and manage appointments, both face to face and virtual. We explore what we can do before, during and after the stages of the appointment process and to gain the knowledge of what may contribute or hinder effective appointments. The course will also explore such areas as anxiety, confidence and assertiveness and how these can impact the success of appointments."},{"title":"Group Skills, Starting and Maintaining a Group","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-03-10","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"“Do you want to set up a group? Are you wondering where to start? This session will help you to decide on your groups purpose and help you understand how groups work and will be delivered from a lived and learned perspective. The session will also look at some of the skills needed to get a group started and keep it going."},{"title":"IT for the Terrified","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-05-06","time":{"start":"14:00","end":"16:00"},"location":"college"},{"date":"2025-05-13","time":{"start":"14:00","end":"16:00"},"location":"college"},{"date":"2025-05-20","time":{"start":"14:00","end":"16:00"},"location":"college"}],"synopsis":"Do you feel left behind by computers and the internet? Are you afraid of using computers and smart phones? As the world of the internet expands, not having access to computers and an understanding of the internet can limit our life opportunities. This 3 week course is geared towards complete beginners looking to take their first steps into the world of Information Technology. This course will explain in easy to understand language the basics of IT. We will explore Microsoft Word, E-mail, and Microsoft Teams as well as computer security and keeping yourself safe online. Join us for this gentle introduction to computers."},{"title":"Introduction to Psychological Therapies","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-19","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-05-07","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"Different styles of therapy can suit different individuals, situations and times, so further information may help to make the best choice. Staff who attend may want a better understanding of psychological therapies for themselves, or to help when considering a referral to psychological therapies for someone they are working with."},{"title":"Introduction to Self-Care","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-26","time":{"start":"10:00","end":"14:00"},"location":"college"},{"date":"2025-04-30","time":{"start":"14:00","end":"16:00"},"location":"college"},{"date":"2025-06-18","time":{"start":"10:00","end":"12:00"},"location":"college"}],"synopsis":"In today’s fast paced world it can be easy to forget about the little things we need to do each day to maintain our wellbeing. This workshop looks at the culture of Self Care; its values and benefits and suggests ways in which it can be incorporated in your daily life. Students will gain a deeper understanding of why self care is so important in our lives."},{"title":"Job Skills for Everyone","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-04-16","time":{"start":"13:30","end":"16:00"},"location":"college"}],"synopsis":"This practical, fun and interactive course will help prepare students for job searching. You may feel overwhelmed at the thought of the application process and nervous at the prospect of an interview. We will cover techniques and tips in writing job applications, interview skills and communication."},{"title":"Living with Anxiety","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-05","time":{"start":"10:00","end":"13:00"},"location":"teams"},{"date":"2025-03-12","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-04-16","time":{"start":"10:00","end":"13:00"},"location":"teams"},{"date":"2025-05-07","time":{"start":"13:30","end":"16:00"},"location":"college"},{"date":"2025-06-04","time":{"start":"10:00","end":"13:00"},"location":"college"}],"synopsis":"This course will help you develop an understanding of what anxiety is, why we experience it, and how it may affect us. We also explore practical strategies to manage anxiety, including basic cognitive behavioural and relaxation techniques. If you or someone you know struggles with anxiety or panic, including as a result of the Covid-19 pandemic, this course may be useful for you."},{"title":"Living with Bi Polar Disorder","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-05","time":{"start":"13:30","end":"16:30"},"location":"college"}],"synopsis":"Bipolar Affective Disorder is not just about experiencing the ups and downs of everyday life. It’s about experiencing extreme highs and lows that seems to take on a life of their own, independent of events around you. This course will discuss the experience of living with Bi-Polar for students; its causes, triggers, treatment options and ways of preventing relapse. The aim is to help students to deal with the impact of this disorder on one’s daily life."},{"title":"Living with Depression","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-25","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-03-25","time":{"start":"10:00","end":""},"location":"college"},{"date":"2025-04-29","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-05-27","time":{"start":"10:00","end":""},"location":"college"},{"date":"2025-06-17","time":{"start":"10:00","end":""},"location":"teams"}],"synopsis":"This course explores the topic of depression, a common mental health condition that can affect people of all ages. It looks at the signs and common symptoms of depression as well as the different types that people can experience. We aim to dispel some of the myths around depression and stigma associated with it. Depression can often make you feel helpless. The course helps to make you aware of tools to help you take action and feel more in control which will have a positive effect and make a difference. So, the course looks at developing your understanding of living with depression and the many things that you can do to help you identify signs and manage your symptoms. The aim is to increase your knowledge of the wide range of treatments, services and lifestyle opportunities that are available and how to find further help and support."},{"title":"Living with Personality Disorder","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-13","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-05-08","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"If you have heard the term Personality Disorder from a Doctor, Psychiatrist or Community Psychiatric Nurse (CPN) you might be left wondering what it actually means. This workshop is aimed at helping service users, mental health practitioners and carers understand what is meant by “personality disorder”. We will look at some of the myths and misconceptions we might have as well as increasing awareness of the struggles of living with a personality disorder. We also want to give people a chance to learn about some of the treatment options for people who have a diagnosis and how to help someone you know with a personality disorder."},{"title":"Living with Psychosis","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-21","time":{"start":"14:00","end":""},"location":"teams"},{"date":"2025-05-23","time":{"start":"12:00","end":""},"location":"college"}],"synopsis":"This course will explore what psychosis is. It will discuss the symptoms and causes of psychosis as well as the range of treatment options available for this mental health condition. Psychosis will be discussed from both a lived experience and an educational perspective. The aim of the session is to gain or revise knowledge and understanding of psychosis, so that students will reflect and engage positively in an individual’s recovery journey."},{"title":"Living with Schizophrenia","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-05-14","time":{"start":"13:30","end":""},"location":"teams"}],"synopsis":"Despite an estimated 1 in 100 people experiencing the disorder called schizophrenia it is still misunderstood and surrounded by stigma. Through this course we will explore the definitions, the different impacts it may have and challenge the stigma around it. This course will address the experience of Living with Schizophrenia, causes, treatments and how to prevent relapse. It will be discussed from lived and educational perspectives."},{"title":"Living with Self Harm","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-27","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-06-05","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"This course aims to raise awareness and increase better understanding of Self-harm. This course aims to raise awareness and increase better understanding of self-harm. We will specifically consider myths and misconceptions around Self-harm, explore the idea of self-harm as a communication of thoughts and feelings and what can be helpful to those who self-harm. The course will also look at the motivation for changing self-harming behaviours including developing alternative coping strategies."},{"title":"Meeting People and Making Friends","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-04-08","time":{"start":"13:00","end":""},"location":"college"}],"synopsis":"Getting the confidence to meet new people can be difficult for anyone. This informal course aims to build your skills and learn tips to help meet new people and make new friends. You will learn some approaches for developing your conversation skills and managing your worries about going into a group for the first time. We will explore opportunities that can help you find people and places in your community to meet that might interest you. Come along and enjoy the craic in a friendly and supportive place."},{"title":"Movement & Mood","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-03-06","time":{"start":"14:00","end":"15:30"},"location":"teams"},{"date":"2025-05-29","time":{"start":"10:00","end":"12:00"},"location":"college"}],"synopsis":"We are all told to exercise daily, but why? This course aims to explore the positive effects of physical activity on your mental wellbeing. The course will provide information on incorporating movement into our daily routine and provide signposting on how to get yourself involved in physical activity both in your own home and in the community. This course is informative, interactive and we look forward to seeing you there."},{"title":"Movie Club","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-28","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-03-28","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-04-25","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-05-30","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-06-27","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-07-25","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-08-29","time":{"start":"13:00","end":"16:00"},"location":"college"}],"synopsis":"Its movie time at the Belfast Recovery College! Take a movie journey with Belfast Recovery College (films rated PG and above).\n\nWe've got a wide range of movies being shown for all tastes. So enjoy a great time with fellow cinema lovers.  There will be a movie showing every month. The group can being ideas for the movie of the month. Feel free to bring your popcorn "},{"title":"Music and Wellbeing","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[[{"date":"2025-06-02","time":{"start":"10:00","end":""},"location":"college"},{"date":"2025-06-09","time":{"start":"10:00","end":""},"location":"college"},{"date":"2025-06-16","time":{"start":"10:00","end":""},"location":"college"}]],"synopsis":"Music and Wellbeing Studies on mood and music reports suggest that music and wellbeing programmes can be designed to achieve goals such as managing stress, enhancing memory, and alleviating pain. Music helps us engage with our emotions, it helps with our memories, reunites, and can create neural connections in our brains. Music has the power to draw our attention away from adversities which in turn gives us hope."},{"title":"My Menopause Matters","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-05-01","time":{"start":"09:30","end":"13:30"},"location":"college"}],"synopsis":"Menopause is a major physical, mental and emotional transitional time in a woman’s life. Some women find the transition fairly straightforward, whilst for others it can be a time of intense challenges. The key message is that no woman experiences the transition the same. It is a unique and personal journey. This programme aims to provide you with up to date information on the menopause, its signs, symptoms, and ways to manage it. It will focus on the physical and mental health aspects of menopause and aims to inform and empower you as you navigate your own very unique menopausal journey. \n\nIt will help you understand and manage your psychological and emotional reactions to help live well with the menopause, know that there are things we can do and how to access support. \n\nThe course is open to everyone as we all need to learn more about this area to give ourselves compassion and give compassion to others."},{"title":"Peer Educator Role Information Session","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-05-16","time":{"start":"14:00","end":"15:30"},"location":"college"}],"synopsis":"Are you interested in learning more about a peer educator role in the Belfast Trust Recovery College in mental health services? You may be interested in applying to become a peer educator when jobs are advertised but would like to find out more about this type of role first. This 1.5hr session will explore what the role of a peer educator is, the application process and give an opportunity to explore whether or not you may be ready for the job role. You will also look at what you can do to develop the training and experience you may need. You can also decide if this role is for you. The session will be of interest to those applying for job opportunities advertised for full-time, part-time or Bank roles in the Belfast HSC Trust. The Recovery College prospectus also provides Job Skills and IT for the Terrified courses which are aimed at developing skills in completing job applications including on-line and preparation for interviews."},{"title":"Peer Support Worker Role Information Session","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-05-16","time":{"start":"12:00","end":"13:30"},"location":"college"}],"synopsis":"Peer Support Worker Role Awareness Session \tAre you interested in learning more about a peer support worker role in mental health services? You may be interested in applying to become a peer support worker when jobs are advertised but would like to find out more about this type of role first. This 1.5hr session will explore what the role of a peer support worker is, the application process and give an opportunity to explore whether or not you may be ready for the job role. You will also look at what you can do to develop the training and experience you may need. You can also decide if this role is for you. The session will be of interest to those applying for job opportunities advertised for full-time, part-time within the Belfast HSC Trust. The Recovery College prospectus also provides Job Skills and IT for the Terrified courses which are aimed at developing skills in completing job applications including on-line and preparation for interviews."},{"title":"Personal Independence Payments (PIP)","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-04","time":{"start":"14:00","end":"16:00"},"location":"teams"},{"date":"2025-05-06","time":{"start":"10:00","end":"13:00"},"location":"college"}],"synopsis":"This course is co-produced in partnership with the East Belfast Independent Advice Centre (EBIAC). Do you think that you might have an entitlement to PIPS? PIPS IS A payment for those who live with disabilities. There have been many changes to benefits in recent years. This interactive up-to-date workshop will explain the criteria of entitlement to this benefit, the process for claiming and the appeals process if you are turned down. It will also outline the support that is available from advice services."},{"title":"Postnatal Depression","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-04","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-06-02","time":{"start":"13:30","end":"16:30"},"location":"college"}],"synopsis":"After having a baby it is normal to feel overwhelmed with the responsibility of this little person totally dependent on you. This course will explore when it is more than the ‘baby blues’ and is potentially leading to a more serious mental health condition. It will help you develop an understanding of what postnatal depression is (PND). It will also explore the symptoms of PND and the various treatment options and support networks available. If you or someone you know may be struggling with PND this course may be useful for you."},{"title":"Return to Work with Care","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-20","time":{"start":"14:00","end":"15:30"},"location":"teams"},{"date":"2025-06-03","time":{"start":"14:00","end":"16:00"},"location":"college"}],"synopsis":"Are you considering returning to the world of work or volunteering? Have you taken an absence from work because of mental illness or considering a new job? Or, are you in the role of manager and looking for more information? The course includes things to consider before looking for employment, benefits of work, choosing your career, gaining qualifications, volunteering, your rights and what supports are needed to maintain wellness in work."},{"title":"Stress Management","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-03-10","time":{"start":"13:30","end":""},"location":"college"},{"date":"2025-06-04","time":{"start":"14:00","end":""},"location":"teams"}],"synopsis":"Stress affects us all and in very different ways. The right amount of stress can be a motivating factor for change or to keep us stimulated. But too much stress can be debilitating and adversely affect our mental and physical health and wellbeing. This course will explore what stress is, its causes and how it can affect us. Students will examine ways of overcoming stress should it become too much and identify different coping strategies for managing stress."},{"title":"Take Control of Your Own Wellbeing","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-11","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-05-19","time":{"start":"13:00","end":""},"location":"teams"}],"synopsis":"Many of us lead very busy lives. Often, finding the right balance is a challenge and it is all too easy for our own health and wellbeing to take a back seat. It can be hard to know where to begin if you want to make a change for the better. This course is designed for those who want help to think about their own wellbeing and to take the practical steps to improve it. Learn new skills and techniques, create a realistic plan for the future and put it into practice."},{"title":"The Art of Creativity and Wellbeing","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[[{"date":"2025-02-03","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-02-10","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-02-17","time":{"start":"10:00","end":"13:00"},"location":"college"}],[{"date":"2025-04-28","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-05-12","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-05-19","time":{"start":"10:00","end":"13:00"},"location":"college"}]],"synopsis":"The aim of this course is to welcome and encourage curiosity through exploring how art and creative energy can improve your mental and physical health and wellbeing. The course provides a learning opportunity to dip your toe in the water and try art and creativity as a wellbeing tool and see if it is for you. Mental health is not always about being happy all the time. It is about developing resilience, recovering from the peaks and valleys that are inevitable in life and gaining personal growth in learning and experiencing different ways to keep well. You do not have to be a professional artist or have any prior experience in art or crafts. You are invited to enrol in a class with a relaxed and informal atmosphere, have a bit of fun and the opportunity to make new connections with other students learning together.\n\n**please note 5th May is a Bank Holiday**\n\nAttendance each week required"},{"title":"Top Tips for Looking After Yourself","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-18","time":{"start":"10:00","end":""},"location":"teams"},{"date":"2025-06-10","time":{"start":"13:00","end":""},"location":"college"}],"synopsis":"The Top Tips for Looking after yourself programme is co-delivered in partnership with the Belfast Trust Health Improvement Team. It is an interactive workshop to enable and empower students to understand their mental health, manage stress and build resilience. In this practical course you will become more aware of your own stress levels. You will explore skills and self-help strategies to promote and protect your own emotional wellbeing. You will gain an increased awareness and knowledge of support organisations available to individuals within the community."},{"title":"Understanding Advocacy","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-03-03","time":{"start":"10:00","end":"15:00"},"location":"college"}],"synopsis":"This course aims to help students understand the basic principles and the process of advocacy and how it can be beneficial to service users, carers/ supporters and mental health practitioners. The workshop will explore the effect of disempowering experiences on an individual’s life and discuss the positive impact the advocacy process has had for those who availed of advocacy services. In this course you will also learn communication and assertiveness skills that will assist you in self-advocacy. You will explore the importance of an advocacy partnership and examine how it differs from other relationships. Please note that this workshop does not train or qualify individuals as Independent Advocates. It aims to build knowledge and confidence to participate in the advocacy process either as a mental health practitioner, service user, carer or supporter. The course may also be of interest to those who wish to learn more about the field of advocacy."},{"title":"Understanding Gratitude","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-06","time":{"start":"10:00","end":"12:00"},"location":"college"},{"date":"2025-05-08","time":{"start":"14:00","end":"16:00"},"location":"college"}],"synopsis":"Gratitude can be a powerful thought or feeling. In this course you will get to develop a greater understanding of gratitude and learn practical tips you can use on a daily basis to bring about an attitude of gratitude in your life. In this practical course we will share how gratitude can have a positive effect on your mental health, happiness and wellbeing."},{"title":"Understanding Medications","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-21","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-05-09","time":{"start":"10:00","end":"12:00"},"location":"teams"}],"synopsis":"Are you or someone you know or help affected by medications for treating mental health issues? Would you like to know more about common side effects and what may help? If you have answered yes, or would simply like to increase your knowledge of this area you are invited to come along to our course on understanding medications."},{"title":"Understanding Substance Misuse","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-24","time":{"start":"10:00","end":"13:00"},"location":"college"},{"date":"2025-05-12","time":{"start":"13:30","end":"16:30"},"location":"college"}],"synopsis":"This introductory course aims to raise awareness and build their knowledge around the area of Substance Misuse / Addictions. The course is open to anyone including service users, carers, health professionals and the community and voluntary sector, families or friends. You do not have to have any knowledge of drugs or alcohol to attend."},{"title":"Understanding Trauma","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-05-13","time":{"start":"10:00","end":""},"location":"college"}],"synopsis":"In our everyday lives any of us can experience events that are overwhelming, frightening and beyond our control. We could find ourselves the victim of a personal assault or witness to a tragic event. This course will help you understand. The normal responses to trauma and Post Traumatic Stress Disorder (PTSD). It will explore ways to help yourself cope or to help others by providing relevant support."},{"title":"Volunteering, Wellbeing and Me","tags":["Belfast Recovery College","Belfast","BHSCT","Work"],"dates":[{"date":"2025-05-21","time":{"start":"14:00","end":""},"location":"college"}],"synopsis":"Have you ever wondered about volunteering? This course helps you develop the confidence and knowledge of how and where to start. You will learn all about the different types of volunteering there are, explore the benefits of volunteering for you personally, and for the wider world around you. You will see how volunteering can boost and support your overall wellbeing and provide you with the chance to give back and connect more to your local community. You’ll be amazed to discover the huge variety of roles that there are available, and you’ll discover how to find roles that suit your abilities and interests, and roles that can help you learn new skills too! This practical, fun, and interactive course has been designed with input from Belfast Recovery College, Volunteer Now, and the Volunteering Department in the Belfast HSC Trust. It will guide you through the process of finding and securing rewarding volunteering opportunities for yourself. Come along and learn how to put your time, effort and unique talents into a role that supports everyone!"},{"title":"Walking Group","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[[{"date":"2025-02-28","time":{"start":"13:30","end":"15:30"},"location":"college"},{"date":"2025-03-07","time":{"start":"13:30","end":"15:30"},"location":"college"},{"date":"2025-03-14","time":{"start":"13:30","end":"15:30"},"location":"college"},{"date":"2025-03-21","time":{"start":"13:30","end":"15:30"},"location":"college"},{"date":"2025-03-28","time":{"start":"13:30","end":"15:30"},"location":"college"},{"date":"2025-04-04","time":{"start":"13:30","end":"15:30"},"location":"college"}]],"synopsis":"Are you interested in a new walking activity for the new year? \nPlease come along to our weekly walking group in partnership with Belfast Recovery College & Health Improvement Team starting from the 19th January 2024. This is a six week programme aimed at beginner to moderate ability for a led walking group. \nThe weekly group will be from 1:30pm to 3:30pm and includes travel time to and from locations. The walks will take place at different locations across Belfast.\nThe group will start at the Recovery College and onto the each walking location and back to the Recovery College for a coffee and chat. Taxis will be available to and from the College and walking location. If the walking location is near to where you live also an opportunity to meet the group there. \n\nRegistration is essential via 02895043059 or recoverycollege@belfasttrust.hscni.net \n\nPlease bring suitable footwear and clothing for walking activity when outdoors. \n\n\nAttendance each week required"},{"title":"Wellbeing Café","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[{"date":"2025-02-14","time":{"start":"10:00","end":"11:30"},"location":"college"},{"date":"2025-03-14","time":{"start":"10:00","end":"11:30"},"location":"college"},{"date":"2025-05-09","time":{"start":"10:00","end":"11:30"},"location":"college"},{"date":"2025-06-06","time":{"start":"10:00","end":"11:30"},"location":"college"},{"date":"2025-07-04","time":{"start":"10:00","end":"11:30"},"location":"college"},{"date":"2025-08-15","time":{"start":"10:00","end":"11:30"},"location":"college"}],"synopsis":"The Wellbeing Café will run every month and warmly welcomes anyone over the age of 16 to come along relax, chat, have a cuppa and find out more about the Belfast Recovery College. There is no fee to join and the coffee is free.\n\nA peer educator will also be there to help explain the courses available.\n\nIf you so wish feel free to bring your favourite book or a board game you enjoy (optional) or if you just prefer a coffee/tea and a natter in a warm welcoming environment we offer that too!"},{"title":"Wellness Recovery Action Plan (WRAP)","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[[{"date":"2025-02-12","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-02-13","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-03-05","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-03-06","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-05-14","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-05-15","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-06-11","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-06-12","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-06-25","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-06-26","time":{"start":"09:30","end":"16:30"},"location":"college"}]],"synopsis":"WRAP is a self-management tool, designed to support people to understand and manage their mental health. WRAP can be used to help support people deal with challenging situations. This course will assist you to identify what wellness tools work best for you and help you establish your own personalised Wellness Recovery Action Plan. Through a series of tools and action plans students can make their life more the way they want it to be. This is ideal for anyone who wants to make positive changes in the way they feel and live.\nAttendance on both days required."},{"title":"Writing for Self Expression","tags":["Belfast Recovery College","Belfast","BHSCT","Dates Incorrect?"],"dates":[[{"date":"2025-02-03","time":{"start":"14:00","end":"15:30"},"location":"college"},{"date":"2025-02-10","time":{"start":"14:00","end":"15:30"},"location":"college"},{"date":"2025-02-17","time":{"start":"14:00","end":"15:30"},"location":"college"},{"date":"2025-02-24","time":{"start":"14:00","end":"15:30"},"location":"college"}]],"synopsis":"On this course, co-produced in partnership with the Royal Literary Fund, we reflect on how words affect us, how we use them and how they can help us to explain ourselves to ourselves. Through the shared reading and discussion of a poem or short piece of prose, we look at how writing can capture a mood, feeling or memory. We then encourage participants to do their own writing, often based on ideas from the poem or prose. And finally, we listen to what participants have written, if they want to share, and tease out how writing can produce enlightening new insights and change the way we think about ourselves and each other. \n\nYou don’t need any experience of writing to do this course.\n\nAttendance each week required"},{"title":"Building Resilience","synopsis":"Resilience is how we adapt in the face of adversity, trauma, tragedy, threats or sources of stress. By working out what we find stressful and by building on our inner strength we are more likely to be able to adapt to these sources of stress. Someone who is resilient has the knowledge, skills and attitude that help maintain their wellbeing. This course explores the benefits and barriers to becoming more resilient and how we can support ourselves.","tags":["Mental Health","Belfast Recovery College","Belfast","BHSCT"],"dates":[{"date":"2025-02-19","time":{"start":"13:00","end":"16:00"},"location":"college"},{"date":"2025-04-30","time":{"start":"10:00\"","end":"13:00"},"location":"teams"}]},{"title":"Wellness Recovery Action Plan (WRAP)","synopsis":"WRAP is a self-management tool, designed to support people to understand and manage their mental health. WRAP can be used to help support people deal with challenging situations. This course will assist you to identify what wellness tools work best for you and help you establish your own personalised Wellness Recovery Action Plan. Through a series of tools and action plans students can make their life more the way they want it to be. This is ideal for anyone who wants to make positive changes in the way they feel and live.\n\nAttendance on both days required.","tags":["Belfast Recovery College","Belfast","BHSCT"],"dates":[[{"date":"2025-02-12","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-02-13","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-03-05","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-03-06","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-05-14","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-05-15","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-06-11","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-06-12","time":{"start":"09:30","end":"16:30"},"location":"college"}],[{"date":"2025-06-25","time":{"start":"09:30","end":"16:30"},"location":"college"},{"date":"2025-06-26","time":{"start":"09:30","end":"16:30"},"location":"college"}]]}]
);
*/
function addDatesFrom(title, color, jseventdate) {
    let jsondate = jseventdate.date.split("-");
    // console.log(jsondate);
    var my_ignored = [];
    if (IGNORED in localStorage) {
        let my_ignored_str = localStorage.getItem(IGNORED);
        my_ignored = JSON.parse(my_ignored_str);
    }

    if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
        // console.log(title + ": " + jsondate.join(""));
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
    // let eventCount = document.getElementsByClassName("event-count");
    //let json = JSON.parse(jsonStr);
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
        
        // let span = document.getElementById("day-"+jsondate);
        // span.innerHTML += `<i class="event-count-icon" style="background-color: ${jsoncolor};" data-color="${jsoncolor}"></i>`; //${eventCount[el].getAttribute("data-count")}</i>`; //`<span class="event-count-icon">${c+1}</span>`;

        // var ul = span.getElementsByTagName("ul")[0];
        // // var dots = span.getElementsByClassName("event-count-icon");
        // // let event_dots = "";
        // let event_li = `<li>${jsontitle} : ${jsonstart} - ${jsonend}</li>`;
        // ul.innerHTML += event_li;
        // for (let c = 1; c <= 16; c++) { // eventCount[el].getAttribute("data-count"); c++) {
            
        //     event_dots += `<i class="event-count-icon" style="background-color: " data-color="#${numberPad((Math.round(255/c)).toString(16),2)}${numberPad((Math.round(128/c)).toString(16),2)}${numberPad((Math.round(255/c)).toString(16),2)}"></i>`; //${eventCount[el].getAttribute("data-count")}</i>`; //`<span class="event-count-icon">${c+1}</span>`;
        //     ul += `<li>Event: ${c}</li>`;
        // }
        // ul += "</ul";
        // span.innerHTML = event_dots + ul;
    }
    
    // for (el in eventCount) {
    //     var ul = "<ul>";
    //     for (let c = 1; c <= 16; c++) { // eventCount[el].getAttribute("data-count"); c++) {
    //         eventCount[el].innerHTML += `<i class="event-count-icon" style="background-color: #${numberPad(Math.round(Math.min(Math.max(2*(255/(c*3)), 30), 255)).toString(16),2)}${numberPad(Math.round(Math.min(Math.max(2*(255/(c*2)), 30), 255)).toString(16),2)}${numberPad(Math.round(Math.min(Math.max(2*(255/(c+1)), 30), 255)).toString(16),2)};" data-color="#${numberPad((Math.round(255/c)).toString(16),2)}${numberPad((Math.round(128/c)).toString(16),2)}${numberPad((Math.round(255/c)).toString(16),2)}"></i>`; //${eventCount[el].getAttribute("data-count")}</i>`; //`<span class="event-count-icon">${c+1}</span>`;
    //         ul += `<li>Event: ${c}</li>`;
    //     }
    //     ul += "</ul";
    //     eventCount[el].innerHTML += ul;
    // }
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


manipulate();

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


// function eventClicked(el) {
//     console.log(el.innerHTML);
//     console.log(el.getAttribute("data-date"));
// }


function numberPad(num, targetLength) {

    let numStr = num.toString();
  
    while (numStr.length < targetLength) {
  
      numStr = '0' + numStr;
  
    }
  
    return numStr;
  
}


loadSession();
loadIgnored();

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
                // console.log(my_sittings[el].dates);

                
                // let sitting = {id: i, title: cb.getAttribute("data-title"), dates: cb.getAttribute("data-dates").replaceAll("--", ":")};

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
            // console.log(`${child.nodeName} != ${needle}`);
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
        // console.log(dates);
        for (let d in dates){
            let jsondate = dates[d][0].split('T')[0].split("-");
            // console.log(jsondate);

            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                // console.log(sitting.title + ": " + jsondate.join(""));

                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.add("shortlisted");
                }
                // let ul = span.getElementsByTagName("ul")[0];
                // let events_listing = ul.getElementsByTagName("li");
                // let i_els = span.getElementsByClassName("event-count-icon");
                // for (let li in events_listing) {
                //     let inner = events_listing[li].innerHTML;
                //     if (typeof inner !== 'undefined'){
                //         if (inner.indexOf(sitting.title) > -1) {
                //             // events_listing[li].style.color = "#009";
                //             events_listing[li].classList.add("shortlisted");
                //             // i_els[li].style.backgroundColor = "#009";
                //             i_els[li].classList.add("shortlisted");
                //             break;
                //         } else {
                //             console.log(sitting.title);
                //         }
                //     }
                // }
            }
        }
    }
    function removeShortlistItem(sitting) {
        let dates = JSON.parse(sitting.dates);
        // console.log(dates);
        for (let d in dates){
            let jsondate = dates[d][0].split('T')[0].split("-");
            // console.log(jsondate);

            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                // console.log(sitting.title + ": " + jsondate.join(""));

                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.remove("shortlisted");
                }

                // let ul = span.getElementsByTagName("ul")[0];
                // let events_listing = ul.getElementsByTagName("li");
                // let i_els = span.getElementsByClassName("event-count-icon");
                // for (let li in events_listing) {
                //     let inner = events_listing[li].innerHTML;
                //     if (typeof inner !== 'undefined'){
                //         if (inner.indexOf(sitting.title) > -1) {
                //             // events_listing[li].style.color = "";
                //             // i_els[li].style.backgroundColor = "";
                //             events_listing[li].classList.remove("shortlisted");
                //             i_els[li].classList.remove("shortlisted");
                //             break;
                //         }
                //     }
                // }
            }
        }
    }

    function initCalendarEvent(sitting) {
        let dates = JSON.parse(sitting.dates);
        // console.log(dates);
        for (let d in dates){

            // let date = dates[d].split('T')[0].replaceAll("-", "");
            // console.log(date);
            // let span = document.getElementById("day-" + date);
            // let ul = span.getElementsByTagName("ul")[0];
            // let events_listing = ul.getElementsByTagName("li");
            // let i_els = span.getElementsByClassName("event-count-icon");
            // for (let li in events_listing) {
            //     let inner = events_listing[li].innerHTML;
            //     if (inner.indexOf(sitting.title) > -1) {
            //         events_listing[li].style.color = "#0f0";
            //         i_els[li].style.backgroundColor = "#0f0";
            //         break;
            //     }
            // }


            let jsondate = dates[d][0].split('T')[0].split("-");
            // console.log(jsondate);
            if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
                // console.log(sitting.title + ": " + jsondate.join(""));

                let span = document.getElementById("day-" + jsondate.join(""));
                let items = span.getElementsByClassName(sitting.title);
                for (let item_i = 0; item_i < items.length; item_i++) {
                    let item = items[item_i];
                    item.classList.add("shortlisted");
                }
                // let ul = span.getElementsByTagName("ul")[0];
                // let events_listing = ul.getElementsByTagName("li");
                // let i_els = span.getElementsByClassName("event-count-icon");
                // for (let li in events_listing) {
                //     let inner = events_listing[li].innerHTML;
                //     if (typeof inner !== 'undefined') {
                //         if (inner.indexOf(sitting.title) > -1) {
                //             events_listing[li].classList.add("shortlisted"); //.style.color = "#009";
                //             i_els[li].classList.add("shortlisted"); //.style.backgroundColor = "#009";
                //             break;
                //         }
                //     }
                // }


                // let jsonstart = jseventdate.time.start.replaceAll(":", "");
                // let jsonend = jseventdate.time.end.replaceAll(":", "");
                // let jsonloc = jseventdate.location;
            
                // let span = document.getElementById("day-"+jsondate.join(""));
                // if(span !== null) {
                //     span.innerHTML += `<i class="event-count-icon" style="background-color: ${color};" data-color="${color}"></i>`;
                //     var ul = span.getElementsByTagName("ul")[0];
                //     let event_li = `<li>${title} : ${jsonstart} - ${jsonend} @ ${jsonloc}</li>`;
                //     ul.innerHTML += event_li;
                // }
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

        var my_tmp_sittings_str = localStorage.getItem(SHORTLIST);
        var my_tmp_sittings = JSON.parse(my_tmp_sittings_str);
        // console.log(JSON.stringify(my_tmp_sittings, null, 2));
        // // var my_sittings = localStorage.getItem("sittings");
        // console.log("XXX");
        // console.log(my_sittings.length);

        // // localStorage.setItem("sittings", 
        // if (sessionStorage['sittings'] === null) {
        //     sessionStorage['sittings'] = JSON.stringify(arr);
        //     console.log(JSON.stringify(arr, null, 2));
        // // }
        // var my_sittings = sessionStorage['sittings'];
        // console.log("Sittings:");
        // console.log(my_sittings.id);
        // if (my_sittings.length == 0) {
        //     sessionStorage['sittings'] = JSON.stringify([sitting]);
        // } else {
        //     var found = -1;
        //     for (let el = 0; el < my_sittings.length; el++) {
        //         if (my_sittings[el].id == i) {
        //             found = el;
        //             break;
        //         }
        //     }
        //     if ( found < 0 ) {
        //         my_sittings.splice(0, 0, sitting);
        //     } else {
        //         my_sittings.splice(el,1);
        //     }
        //     sessionStorage['sittings'] = JSON.stringify(my_sittings)
        // }
        
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
    // targ_tbl.style.display = "table";
    // targ_ln.style.textDecoration = "none";
    targ_ln.classList.remove("ignored");
    targ_tbl.classList.remove("ignored");
    for (el in els){
        if (! isNaN(el)) {
            els[el].classList.remove("ignored");
        } else {
        //    console.log(el);
        }
    }
//    targ_tbl.classList.remove("ignored");
//    targ_ln.classList.remove("ignored");
  } else {
    // targ_tbl.style.display = "none";
    // targ_ln.style.textDecoration = "line-through";
    for (el in els){
        if (! isNaN(el)) {
            els[el].classList.add("ignored");
        } else {
        //    console.log(el);
        }
    }
//    targ_tbl.classList.add("ignored");
//    targ_ln.classList.add("ignored");
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
        //if ( found < 0 ) { // Not found so Add
         //   my_ignored.splice(0, 0, clsname);
            // addShortlistItem(sitting);
        } else if (checkBox.checked == true && found >= 0){
            my_ignored.splice(found,1); // Found so remove
            // removeShortlistItem(sitting);
        }
        localStorage.setItem(IGNORED, JSON.stringify(my_ignored));
    } else {
        localStorage.setItem(IGNORED, JSON.stringify([clsname]));
        // addShortlistItem(sitting);
    }
    // console.log(IGNORED);
    // console.log(localStorage.getItem(IGNORED));

    // let my_ignored_str = localStorage.getItem(IGNORED);
    // var my_ignored = JSON.parse(my_ignored_str);
    // for (i in my_ignored) {
    //     let cl = my_ignored[i];
    //     // console.log(cl);
    //     document.getElementById("ln_" + cl).classList.add("ignored");
    //     document.getElementById("anc_" + cl).classList.add("ignored");
    //     document.getElementById("cb_" + cl).checked = false;
    // }
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

// function ignoreIgnored() {
//     if (IGNORED in localStorage) {
//         let my_ignored_str = localStorage.getItem(IGNORED);
//         let my_ignored = JSON.parse(my_ignored_str);
    
    
//     }

//     if (year === parseInt(jsondate[0]) && month === parseInt(jsondate[1])-1) {
//         console.log(title + ": " + jsondate.join(""));
//         var clsname = sluggify(title);
//         if (my_ignored.indexOf(clsname) >= 0){
//             clsname += " ignored";
//         }
// }