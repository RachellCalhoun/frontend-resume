

var work = {
	"jobs": [
	{
		"employer": "Kelly Creative Tech KTC",
		"title": "Remote Software Engineer",
		"location": "Remote",
		"dates": "11/2016 - Present",
		"url": "https://www.kellycreativetech.com/",
		"description": "Using Django, Python, and JavaScript (React, JQuery) my main tasks were Migrating old sites to custom CMS ( Glass )  system and server, updating django 1.4 - 1.10 and migrating to Heroku, and focusing on enhancements to the company's CMS system. Using Selenium and Celery, I built two automated reporting systems. One integrates Google Analytics into the system's CMS dashboard, schedules regular reports and takes screenshots to send to the site’s admin every month. The other reporting system finds, takes screenshots, and emails admins all redirects, 404 or incorrect links on their site."
	},
	{
		"employer": "Django Girls Seoul",
		"title": "Main Organizer",
		"location": "Seoul, South Korea",
		"dates": "07/2015 - 07/2016",
		"url": "https://github.com/DjangoGirlsSeoul/dgrsvpsite",
		"description": " I was the head organizer of Django Girls Seoul. We are a community that is positive and open and to all, especially women new to programming. With the help of my awesome support team, I organize regular weekly study meet-ups, code-camps, workshops, and other events. During our 2 month long Code Camp, I helped develop curriculum, contribute to our community site, coach members, and manage our non-profit project."
	},
	{
		"employer": "Django Girls",
		"title": "Translations Co-manager, Support Member",
		"location": "Remote",
		"dates": "11/2015 - Present",
		"url" : "https://djangogirls.org/",
		"description": " I joined the support team of Django Girls to facilitate other members in translating the Django Girls Tutorial. We use Crowdin, GitHub and GitBook."
	}]
}

var projects = {
	"projects": [
	{
		"title": "Light and Leadership Iniciative Website",
		"dates": "Django | 2016",
		"description": "Volunteer project for a non-profit community center in Peru. Almost everything is editable on the admin page, including: content, plugins, menu, footer, colors and layout. Includes English and Spanish version of the same app on the site.",
		"images": ["images/lliproject.png"],
		"url": "http://lightandleadership.org"
	},
	{
		"title": "GiveMore",
		"dates": "Django, Angular, Tastypie, Google Maps API | 2017",
		"description": "This site was inspired by the needs of local refugees. It facilitates donating and requesting donations while allowing users to remain anonymous until contact is approved.Angular1, Django backend, Tasteypie API, and Google Maps API integrations.",
		"images": ["images/givemore.png"],
		"url": "http://givemore.pythonanywhere.com/#/landing"
	},
	{
		"title": "Django Girls Seoul",
		"dates": "JS, MDL, FullCalendar, Django | 2015 - 2016",
		"description": "Home page is expanded off prebuilt JS layout and shows curriculum, members work, and sponsor information. Event page shows monthly events, and detailed views. Logged in users can rsvp and see a list of other members who rsvped. I helped with design and front-end using Bootstrap. On the backend I worked on displaying RSVP list. ",
		"images": ["images/codecampsite1.png"],
		"url": ["http://djangogirlscodecamp.github.io/"]
	},
	{
		"title": "Udadak",
		"dates": "Django | 2016",
		"description": "A Django site for a cat hotel. It includes login/logout, Q&A for members, admin can post notices, upload images and text about hotel(or cats!), and add flatpages. Text editor on admin is django-tinymce, widget is used as well. Hotel Gallery images use JS modals to pop out enlarged photos. ",
		"images": ["images/udadak.png"],
		"url": ["http://djangogirlscodecamp.github.io/"]
	},
	{
		"title": "Crafts N Stuff",
		"dates": "Django, Postman | 2016",
		"description": "This is a crafts and food community site. There is sign-up and login/out. Logged in members can message each other with django-postman app integration. All members create their own profile with image and info. They can also upload favorite craft/food images, comment on others posts or ask questions.",
		"images": ["images/landingpage.png"],
		"url": "http://craftsnstuff.pythonanywhere.com/"
	}]
}

var bio = {
	"name" : "Rachell",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile": " ",
		"email": "rachell.calhoun@gmail.com",
		"emailurl": "mailto:rachell.calhoun@gmail.com",
		"github": "RachellCalhoun",
		"githuburl": "https://github.com/RachellCalhoun",
		"twitter": "@Rachell_Calhoun",
		"twitterurl": "https://twitter.com/Rachell_Calhoun",
		"location": "Michigan, US",
		"blog": "& Portfolio",
		"blogurl": "http://rachellcalhoun.com/"
		},
	"welcomeMsg" : "Learn by Doing, Master by Teaching.",
	"skills" : ["Python", "Django", "Javascript", "Angular", "React"],
	"bioPic" : "images/rachell.jpg"
}

var education ={
	"schools": [{
		"name": "Western Michigan University",
		"location": "Kalamazoo, MI USA",
		"degree": "BA",
		"major": ["Spanish", "French"],
		"dates": 2006,
		"description": "  ",
		"url": "http://wmu.edu"
	}],
	"onlineCourses": [{
		"title": "An Introduction to Interactive Programming in Python",
		"school": "Coursera",
		"dates": 2014,
		"description": "  ",
		"url": "https://www.coursera.org/course/interactivepython"
	}, {
		"title": " Programming for Everybody (Python)",
		"school": "Coursera",
		"dates": 2014,
		"description": "  ",
		"url": "https://www.coursera.org/signature/certificate/95TNEQEV38"
	}, {
		"title": "Introduction to Computer Science and Programming Using Python",
		"school": "Edx",
		"dates": 2015,
		"description": "  ",
		"url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
	}, {
		"title": "Using Python to ACcess Web Data",
		"school": "Coursera",
		"dates": 2015,
		"description": " ",
		"url": "https://www.coursera.org/learn/python-network-data"
	}, {
		"title": "Intro to HTML/CSS",
		"school": "Udacity",
		"dates": 2016,
		"description": "  ",
		"url": "https://www.udacity.com/courses/ud304"
	}, {
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2016,
		"description": "  ",
		"url": "http://www.udacity.com/courses"
	}]
}

function displayBio() {
	var name = "Rachell Calhoun"
	var role = "Software Engineer"
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email).replace("#", bio.contacts.emailurl));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githuburl));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#", bio.contacts.twitterurl));
	// formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	formattedContactInfo.push(HTMLblog.replace("%data%", bio.contacts.blog).replace("#", bio.contacts.blogurl));
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
	for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
	}
	if (document.getElementsByTagName('h1').length === 0) {
    document.getElementById('header').style.display = 'none';
	}
}

//need to do contacts display!
// function displayContacts() {
// 	if (bio.contacts.length > 0) {

// 	}
// }
function displayWork() {
	if(work.jobs.length > 0){
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}
function displayEducation() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDegree = formattedSchool + formattedDegree;
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedschoolLocation);
			$(".education-entry:last").append(formattedschoolDates);
			$(".education-entry:last").append(formattedschoolMajor);
		}

	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			// var formattedhrefSchool = formattedOnlineTitle.replace("#", education.onlineCourses[course].url);
			var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineSchoolTitle);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			var formattedOnlineDes = HTMLonlineDescription.replace("%data%", education.onlineCourses[course].description);
			$(".education-entry:last").append(formattedOnlineDates);
			$(".education-entry:last").append(formattedOnlineDes);
			// $(".education-entry:last").append(formattedOnlineURL);
		}

		}
	}
}
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedprojTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedprojTitle);

		var formattedprojDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedprojDates);

		var formattedprojDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedprojDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedprojImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]).replace("#", projects.projects[project].url);
				$(".project-entry:last").append(formattedprojImage);
			}
		}
	}
}

displayBio();
displayWork();
displayEducation();
projects.display();

// function locationizer(work_obj){
//     var locationsArray = [];
//     for (job in work_obj.jobs) {
//         var workLocations = work_obj.jobs[job].location;
//         locationsArray.push(workLocations);
//     }
//     return locationsArray;
//  }
// I have no idea and the vid/notes aren't clear: reference line 65 in helperjs
// function inName(){
// 	bio.name = bio.name.trim().split(" ");
// 	console.log(bio.name);
// 	bio.name[0] = bio.name[0].slice(0,1).toUpperCase() + bio.name[0].slice(1).toLowerCase();
// 	bio.name[1] = bio.name[1].toUpperCase();

// 	bio.name = bio.name.join(" ");
// 	return bio.name;

// }
// inName();
// $("#main").append(internationalizeButton);




$("#mapDiv").append(googleMap);
