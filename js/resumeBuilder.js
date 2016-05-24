

var work = {
	"jobs": [
	{
		"employer": "Django Girls Seoul",
		"title": "Main Organizer",
		"location": "Seoul, South Korea",
		"dates": "07/2015 - Present",
		"description": " I am the head organizer of Django Girls Seoul. We are a community that is positive and open and to all, especially women new to programming. With the help of my awesome support team, I organize regular weekly study meet-ups, code-camps, workshops, and other events. During our 2 month long Code Camp, I helped develop curriculum, contribute to our community site, coach members, and manage our non-profit project.",
		"url" : "https://djangogirls.org/"
	},
	{
		"employer": "Django Girls",
		"title": "Translations Co-manager",
		"location": " ",
		"dates": "11/2015 - Present",
		"description": " I joined the support team of Django Girls to facilitate other members in translating the Django Girls Tutorial. We use Crowdin, GitHub and GitBook.",
		"url" : "http://www.djangogirlsseoul.org/"
	},
	{
		"employer": "KEDA",
		"title": "EFL Instructor",
		"location": "Incheon, South Korea",
		"dates": "03/2014 - 03/2016",
		"description": " ",
		"url" : "#"
	},
	{
		"employer": "Evan English School",
		"title": "EFL Instructor & Head Teacher",
		"location": "Seoul, South Korea",
		"dates": "11/2008 - 02/2014",
		"description": " ",
		"url" : "#"
	},
	{
		"employer": "GKI English School",
		"title": "EFL Instructor",
		"location": "Seoul, South Korea",
		"dates": "08/2007-08/2008",
		"description": "During my time as an EFL teacher I have acted as liaison between Korean and Native teachers. I developed and implemented appropriate curriculum, thorough lesson plans, organized syllabus, and effective discipline and reward systems. I also, created a conversational practice program using video recording and regular phone calls with students. One program that was especially successful was the pen-pal program I set up with a sister school in the US. The student's wrote and made videos to their pen-pals. I also planned and presented at events for the entire school.",
		"url" : "#"
	},
	{
		"employer": "IndyMac Bank",
		"title": "Customer Service Rep",
		"location": "Kalamazoo, MI USA",
		"dates": "01/2007 - 07/2007",
		"description": " I handled servicing of home loans such as: taking payments, explaining details of contracts, account analysis, and soft sales.",
		"url" : "#"
	},
	{
		"employer": "Townsend Insurance",
		"title": "Customer Service Rep",
		"location": "Kalamazoo, MI USA",
		"dates": "07/2005 - 10/2006",
		"description": " I gave customers insurance quotes, took payments, and handled any problems or questions with their accounts. I also served as a Spanish translator, facilitating communication between customers and agents.",
		"url" : "#"
	}]
}

var projects = {
	"projects": [{
		"title": "Portfolio",
		"dates": "2015",
		"url": "http://rachellcalhoun.com/",
		"description": "My personal portfolio and blog page using Python and Django for backend and HTML/CSS and bootstrap for frontend",
		"images": ["images/portfolio.png"]

	},
	{
		"title": "Django Girls Seoul",
		"dates": "2015 - 2016",
		"description": "Organizer of Django Girls Seoul, a community to inspire more women to fall in love with programming. We organized workshops, screening events, code camps and worked on non-profits. ",
		"images": ["http://djangogirlscodecamp.github.io/img/event.png"],
		"url": ["http://djangogirlscodecamp.github.io/"]
	},
	{
		"title": "Crafts N Stuff",
		"dates": "2016",
		"description": "A craft community site where members can post images, links or text about crafts or foods. Also includes internal messaging app.",
		"images": ["images/landingpage.png"],
		"url": "http://craftsnstuff.pythonanywhere.com/"
	},
	{
		"title": "Light and Leadership Iniciative Website",
		"dates": "2016",
		"description": "I oversaw the open sourced creation and collaberation of a django site for a non-profit Peruvian school.",
		"images": ["images/lliourstory.png"],
		"url": "http://lightandleadership.pythonanywhere.com"
	}]
}

var bio = {
	"name" : "Rachell",
	"role" : "Web Ninja",
	"contacts" : {
		"mobile": " ",
		"email": "rachell.calhoun@gmail.com",
		"emailurl": "mailto:rachell.calhoun@gmail.com",
		"github": "RachellCalhoun",
		"githuburl": "https://github.com/RachellCalhoun",
		"twitter": "@Rachell_Calhoun",
		"twitterurl": "https://twitter.com/Rachell_Calhoun",
		"location": "Seoul",
		"blog": "Blog",
		"blogurl": "http://rachellcalhoun.com/"
		},
	"welcomeMsg" : "Welcome to my world!",
	"skills" : ["Django", "Web-Development", "Community Organizing", "Python", "Teaching","Javascript"],
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
		"description": "  ",
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
	var role = "Web Ninja"
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedContactInfo = [];
	formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email).replace("#", bio.contacts.emailurl));
	formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githuburl));
	formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter).replace("#", bio.contacts.twitterurl));
	formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
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
