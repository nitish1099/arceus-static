var express = require('express');
var router = express.Router();

const case_studies = {
  0: {
    id: 0,
    title: 'Using geotags to identify locational data',
    excerpt: `International tensions are always high when countries go to war with each other. During the annexation of a European nation...`,
    scenarios: [
      'International tensions are always high when countries go to war with each other. During the annexation of a European nation by its more powerful neighbour, there were reports and allegations that the intruding nation’s troops were illegally operating in several annexed regions. During this period, one of the officials from the intruding nation’s army posted several photos taken over a month using his cell phone onto his public social media account.'
    ],
    tactics: [
      'Arceus Consulting uncovered several key facts by assessing and analyzing the geotag metadata contained in the jpeg files of the pictures posted by the official. Through digital forensic, we established the movement patterns, routes and activities undertaken by the official in the annexed areas. Using geotags and the pictures, we proved the official’s movement from his military base to the annexed areas. The geotag metadata provided valuable information on the movements and operations of the military in the annexed regions to the world, which eventually became major international news.'
    ],
    takeaways: [
      'Geotags are a type of locational metadata that can be generated using smartphones. They are embedded in files such as images, videos, and text messages. Geotags have become essential tools in investigations as they help pinpoint movements and location information of people, assets, and devices.'
    ],
    advantages: [
      'With our cyber expertise, we at Arceus Consulting can extract highly accurate and reliable information from geotag metadata. For example, using pictures, we can identify several critical parameters such as who/what/when/where details during investigations that can be provided as evidence. We can also extract data using geotags of other devices of interest through mapping applications, WiFi connections, cell towers in call history, and applications such as weather and social media.'
    ],
    thumbnail: 'case-study-1'
  },
  1: {
    id: 1,
    title: 'Uncovering evidence from wearables devices',
    excerpt: `A smartwatch provided crucial evidence for pinpointing the suspect in the murder case of a woman who was killed in her home...`,
    scenarios: [
      'A smartwatch provided crucial evidence for pinpointing the suspect in the murder case of a woman who was killed in her home. The woman\'s husband was a prime suspect in the case and had a warrant against him. As per his account, he received an alarm alert and rushed home immediately to see what had happened while his wife was still at the gym. He claimed that he was immobilized and tortured by an intruder upon entering the house and subsequently shot his wife, who too had rushed home from the gym. '
    ],
    tactics: [
      'Arceus Consulting assisted the police’s investigations by providing forensic analysis of the wearable devices of the suspect and the victim. By uncovering the location data, we established that the victim was already in the house when the suspect claimed her to be in the gym. We assessed the data in the victim’s smart watch and provided the authorities with evidence that the victim had stopped moving 60 seconds before the alarm went off. The facts uncovered through digital of the smartwatch helped to find the gaps in the suspect’s story and build crucial evidence against him.'
    ],
    takeaways: [
      'Wearable devices can be valuable sources of information for evidence collection. Devices such as smartwatches, Apple Watch, fitness trackers track activities such as distance covered, steps, sleep times, heart rates, and oxygen levels using countless sensors present in them. These devices are connected to apps on phones and computers, cloud storage and the user’s social media accounts, which can be used as data mines for uncovering information.'
    ],
    advantages: [
      'Arceus Consulting is specialized in assisting investigation authorities with digital forensics of devices such as mobile phones, laptops, wearables, IoT devices, and social media. By leveraging our specialized expertise in digital forensics tools and techniques, we assess the large amounts of data collected by these devices and provide crucial information for evidence.'
    ],
    thumbnail: 'case-study-2'
  },
  2: {
    id: 2,
    title: 'Managing Data from Asset trackers during investigations',
    excerpt: `Data collected from IoT devices such as trackers can make a massive difference in the outcomes of critical matters. In a case involving...`,
    scenarios: [
      'Data collected from IoT devices such as trackers can make a massive difference in the outcomes of critical matters.',
      'In a case involving an accident between a tractor-trailer and a motorcycle, locational data collected from onboard the trailer came in handy. The motorcycle was pushed off the road by the trailer, resulting in several injuries to the rider. Eyewitnesses could not definitively identify the trailer but recalled the transport company’s logo printed on it. '
    ],
    tactics: [
      'The transport company\'s trailers were fitted with asset trackers which could tell the location and the route of all its trucks. Arceus Consulting assessed the data collected from these trackers that was stored in the company\'s database to ascertain the location of all its trucks. Through a forensic search of the database, we established that the company did not have any trucks on that route on the day of the accident.'
    ],
    results: [
      'As per company policy, the databases of the transport company were purged clean of data every six months. The plaintiff challenged the validity of the defendant\'s search since it was conducted 27 months after the date of the accident. The judge decided that this was a matter of material fact that the jury needed to sort out.'
    ],
    takeaways: [
      'Asset trackers provide investigators access to a large pool of data by letting organizations monitor their moveable assets such as fleet vehicles, construction equipment, and medical devices. Asset trackers can monitor several parameters such as locations, diagnostics, messaging, weather conditions, and compliance data, which are extremely critical in the monitoring of high-value and moveable assets.',
      'The case of the motorcyclist vs. the trucking company is an excellent example of how asset tracker evidence can be highly probatory and accessible for investigators working for clients that own or finance assets.',
    ],
    advantages: [
      'Arceus Consulting is specialized in conducting forensic analysis using asset trackers to assess parameters such as locations, diagnostics, messaging, weather conditions, and compliance data, which are extremely critical in the monitoring of high-value and moveable assets. We conduct investigations by searching our client’s databases for extracting data and determining critical information regarding who/what/when/where details of the asset without having to examine the asset or the asset custodian.',
      'Furthermore, we help to identify defensible scenarios such as data purge by collecting and validating data in databases early. Our cyber forensic consultants are trained in managing large databases and executing complex queries to secure and document significant evidence.'
    ],
    thumbnail: 'case-study-3'
  },
  3: {
    id: 3,
    title: 'Investigating Network data to reveals theft of trade secrets',
    excerpt: `Trade secrets are the backbone of organizations, often separating the successful ones and their completion. When an engineer in a large consumer...`,
    scenarios: [
      'Trade secrets are the backbone of organizations, often separating the successful ones and their completion.',
      'When an engineer in a large consumer technology organization announced that he would be resigning from the organization and returning to his home country to take care of his ailing parents, some eyebrows were raised in his department. His manager became especially concerned when the engineer informed him that he would be working for an electric car manufacturer on returning to his country.'
    ],
    tactics: [
      'Arceus Consulting helped the organization by conducting investigations into the engineer\'s work activities. After conducting forensic analysis of the engineer’s work phones, laptops, and network activity, we ascertained that his activity had spiked to a two-year high to the days close to his date of resignation. We uncovered that the engineer had conducted bulk searches and had downloaded copious amounts of data from restricted databases.'
    ],
    results: [
      'The organization confronted the engineer, who admitted to stealing company data and was subsequently indicted in the theft of trade secrets by enforcement agencies.'
    ],
    takeaways: [
      'Network forensics is a specialized branch of digital forensics that can help to trace or monitor network activity by analyzing log data from servers, firewalls, routers, and intrusions detection applications. Organizations have started storing data logs for more extended periods and monitoring activity more closely than ever before, safeguarding themselves during times of investigations to identify mass movement or deletion of data and other unscrupulous user activity.'
    ],
    advantages: [
      'Today, network forensics has become an essential tool for attorneys in cyberlaw practices for intrusion and breach detection. With the help of our  investigation, due diligence and cyber forensic services, organizations can safeguard themselves, collect evidence and build cases during times of investigations to identify mass movement or deletion of data and other unscrupulous user activity.'
    ],
    thumbnail: 'case-study-4'
  },
  4: {
    id: 4,
    title: 'Analysing data from vehicle infotainment, telematics and black box systems',
    excerpt: `In a 2017 hit-and-run car crash, a dark-coloured SUV driving without its headlights switched on hit a car...`,
    scenarios: [
      'In a 2017 hit-and-run car crash, a dark-coloured SUV driving without its headlights switched on hit a car, then skid off into trees before driving off. Although the police were able to locate the SUV, they used digital forensics to establish the sequence of events that had occurred.'
    ],
    tactics: [
      'Arceus Consulting provided the investigation authorities with digital forensic analysis of the SUV’s on-board diagnostics, infotainment, and telematics systems. By deep diving into the data, we established that the car had passed through the accident spot at the time of crash, that the headlights were switched off, and that the vehicle completed several forward and reverse maneuvers immediately after the collision and around trees. We also uncovered information regarding the SUV’s routes and destinations through its navigation system.'
    ],
    takeaways: [
      'With cars becoming more advanced, the databases of forensic tools are also expanding, enabling vehicle forensics for auto insurance investigators, car rental companies, law enforcement agencies, intelligence agencies, and auto manufacturers.'
    ],
    advantages: [
      'Arceus consulting is specialized in extracting crucial evidence and information using digital forensics during investigation. By assessing the information stored in vehicles such as driver addresses, recent and frequented routes and locations, phone logs, contacts, emails, texts and speed, braking, and seatbelt use data, we help investigation authorities to establish sequence of events, uncover critical information and collect evidence. '
    ],
    thumbnail: 'case-study-5'
  }
};



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arceus' });
});

router.get('/litigation', function(req, res, next) {
  res.render('litigation', { title: 'Litigation' });
});

router.get('/cyber', function(req, res, next) {
  res.render('cyber', { title: 'Cyber' });
});

router.get('/corporate', function(req, res, next) {
  res.render('corporate', { title: 'Corporate' });
});

router.get('/cyber', function(req, res, next) {
  res.render('cyber', { title: 'Cyber' });
});

router.get('/hni', function(req, res, next) {
  res.render('hni', { title: 'HNI' });
});

router.get('/case-studies', function(req, res, next) {
  res.render('case-studies', { title: 'Case Studies', case_studies });
});

router.get('/case-studies/:id', function(req, res, next) {
  res.render('case-study', { title: case_studies[req.params.id].title, case_study: case_studies[req.params.id] });
});

module.exports = router;
