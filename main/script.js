'use strict';

const moon = {
	name: 'Moon',
	images: {
		png: '../assets/destination/image-moon.png',
		webp: '../assets/destination/image-moon.webp',
	},

	description:
		'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
	distance: '384,400 km',
	travel: '3 days',
};

const mars = {
	name: 'Mars',
	images: {
		png: '../assets/destination/image-mars.png',
		webp: '../assets/destination/image-mars.webp',
	},

	description:
		'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
	distance: '225 mil. km',
	travel: '9 months',
};

const europa = {
	name: 'Europa',
	images: {
		png: '../assets/destination/image-europa.png',
		webp: '../assets/destination/image-europa.webp',
	},

	description:
		'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
	distance: '628 mil. km',
	travel: '3 years',
};

const titan = {
	name: 'Titan',
	images: {
		png: '../assets/destination/image-titan.png',
		webp: '../assets/destination/image-titan.webp',
	},
	description:
		'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
	distance: '1.6 bil. km',
	travel: '7 years',
};
const destinations = [moon, mars, europa, titan];

// crew

const commander = {
	title: 'commander',
	name: 'Douglas Hurley',
	images: {
		png: '../assets/crew/image-douglas-hurley.png',
		webp: '../assets/crew/image-douglas-hurley.webp',
	},
	role: 'Commander',
	bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
};
const specialist = {
	title: 'specialist',
	name: 'Mark Shuttleworth',
	images: {
		png: '../assets/crew/image-mark-shuttleworth.png',
		webp: '../assets/crew/image-mark-shuttleworth.webp',
	},
	role: 'Mission Specialist',
	bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
};
const pilot = {
	title: 'pilot',
	name: 'Victor Glover',
	images: {
		png: '../assets/crew/image-victor-glover.png',
		webp: '../assets/crew/image-victor-glover.webp',
	},
	role: 'Pilot',
	bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
};
const engineer = {
	title: 'engineer',
	name: 'Anousheh Ansari',
	images: {
		png: '../assets/crew/image-anousheh-ansari.png',
		webp: '../assets/crew/image-anousheh-ansari.webp',
	},
	role: 'Flight Engineer',
	bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
};

const crewMembers = [commander, specialist, pilot, engineer];

const spacePort = {
	name: 'Spaceport',
	images: {
		portrait: '../assets/technology/image-spaceport-portrait.jpg',
		landscape: '../assets/technology/image-spaceport-landscape.jpg',
	},
	description:
		'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
};
const spaceCapsule = {
	name: 'Space capsule',
	images: {
		portrait: '../assets/technology/image-space-capsule-portrait.jpg',
		landscape:
			'../assets/technology/image-space-capsule-landscape.jpg',
	},
	description:
		"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
};
const spaceVehicle = {
	name: 'Launch vehicle',
	images: {
		portrait: '../assets/technology/image-launch-vehicle-portrait.jpg',
		landscape:
			'../assets/technology/image-launch-vehicle-landscape.jpg',
	},
	description:
		"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};

const technology = [spacePort, spaceCapsule, spaceVehicle];

const nos = ['01', '02', '03', '04'];
const links = [...document.querySelectorAll('.destination-link')];
const list = document.querySelectorAll('.destination-nav-item');
const number = document.querySelector('.number');
const tabs = document.querySelectorAll('[data-tab-value]');
const image = document.querySelector('.destination-img');
const text = document.querySelector('.text-primary');
const description = document.querySelector('.destination-text');
const travelDistance = document.querySelector('.distance');
const travelTime = document.querySelector('.travel');
const tabList = Array.from(tabs);
const dots = Array.from(document.querySelectorAll('.dot'));
const crewCommander = document.querySelector('.commander');
const crewSpecialist = document.querySelector('.specialist');
const crewPilot = document.querySelector('.pilot');
const crewEngineer = document.querySelector('.engineer');
const crewMemberTitle = document.querySelector('.title');
const crewMemberName = document.querySelector('.name');
const crewMemberDescription = document.querySelector('.crew-description');
const crewMemberImage = document.querySelector('.crew-img');

// const crewId=document.querySelectorAll(#) ;

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// change number
for (let i = 0; i < tabs.length; i++) {
	list[i].addEventListener('click', function () {
		if (tabList[i] === nos[i]);
		{
			number.textContent = `${nos[i]}`;
		}
	});
}

const showPlanet = function (planet) {
	image.src =
		image.width > 0 && image.height > 0
			? planet.images.webp
			: planet.images.png;
	text.textContent = planet.name;
	description.textContent = planet.description;
	travelDistance.textContent = planet.distance;
	travelTime.textContent = planet.travel;
};

const displayCrewMember = function (member) {
	crewMemberTitle.textContent = member.role;
	crewMemberName.textContent = member.name;
	crewMemberDescription.textContent = member.bio;
	crewMemberImage.src = member.images.png;
};

// const landscapeImages=technology.forEach(tech => {if (destinationWindow.matches) {techImage.src=tech.images.landscape}})

const landscapeImages = function (tech) {
	if (destinationWindow.matches) {
		techImage.src = tech.images.landscape;
	}
};
const displayTechnology = function (current) {
	tech.textContent = current.name;
	techDescription.textContent = current.description;
	techImage.src = current.images.portrait;
};

// SWITCH BETWEEN PLANETS
let currentPlanet;
links.forEach((link, i) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		currentPlanet = destinations.find(
			curr =>
				curr.name.toLowerCase() === link.textContent.toLowerCase()
		);
		showPlanet(currentPlanet);
	});
});

// SWITCH CREW
let activeCrewMember;
dots.forEach((dot, i) => {
	dot.addEventListener('click', e => {
		e.preventDefault();
		displayCrewMember(crewMembers[i]);
	});
});

// SWITCH TECH

// const changeImage = function (window) {
// 	if (destinationWindow.matches) image.src = '../assets/destina';
// };
