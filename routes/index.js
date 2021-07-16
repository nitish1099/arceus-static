var express = require('express');
var router = express.Router();

const case_studies = {
  0: {
    id: 0,
    title: 'Using geotags to identify locational data',
    excerpt: `International tensions are always high when countries go to war with each other. During the annexation of a European nation...`,
    scenarios: [
      'International tensions are always high when countries go to war with each other. During the annexation of a European nation by its more powerful neighbour, there were reports and allegations that the intruding nation’s troops were illegally operating in several annexed regions.',
      'During this period, one of the officials from the intruding nation’s army posted several photos taken over a month using his cell phone onto his public social media account. The posts came into notice after the media picked up the story, who on further digging discovered that the jpeg files posted by the official contained crucial geotag metadata. The geotags and the pictures showed the official travelling from a military base in his country to the annexed areas and back to the base. The geotag metadata provided valuable information on the movements and operations of the military in the annexed regions to the world.'
    ],
    takeaways: [
      'Geotags are a type of locational metadata that can be generated using smartphones. They are embedded in files such as images, videos and text messages.They are a highly accurate and reliable source of information and are associated with other crucial metadata such as date and time stamps.',
      'Geotags have become essential tools in investigations as they help pinpoint movements and location information of people, assets, and devices. For example, pictures containing geotags can be used to identify several critical parameters such as who/what/when/where details during investigations and be provided as evidence. Geotags can also help collect locational information of other cell phones through mapping applications, WiFi connections, cell towers in call history, and other applications such as weather and social media.'
    ],
    thumbnail: 'case-study-1'
  },
  1: {
    id: 1,
    title: 'Uncovering evidence from wearables devices',
    excerpt: `A smartwatch provided crucial evidence for pinpointing the suspect in the murder case of a woman who was killed in her home...`,
    scenarios: [
      'A smartwatch provided crucial evidence for pinpointing the suspect in the murder case of a woman who was killed in her home. The woman\'s husband was a prime suspect in the case and had a warrant against him. As per his account, he received an alarm alert and rushed home immediately to see what had happened while his wife was still at the gym. He claimed that he was immobilized and tortured by an intruder upon entering the house, who then shot his wife, who too had rushed home from the gym.',
      'The police compared the husband\'s story with the woman\'s smartwatch and proved that the woman was already in the house when her husband claimed that she was in the gym. According to her smart watch\'s data, the woman had stopped moving 60 seconds before the alarm went off. The data from the smartwatch helped to find the gaps in the husband’s story and build crucial evidence against him.',
    ],
    takeaways: [
      'Wearable devices can be valuable sources of information for evidence collection. Devices such as smartwatches, Apple Watch, fitness trackers track activities such as distance covered, steps, sleep times, heart rates, and oxygen levels using countless sensors present in them. These devices are connected to apps on phones and computers, cloud storage and the user’s social media accounts, which can be used as data mines for uncovering information. By leveraging specialized digital forensics tools and techniques, evidence can be collected from the large number of data collected by these devices.'
    ],
    thumbnail: 'case-study-2'
  },
  2: {
    id: 2,
    title: 'Managing Data from Asset trackers during investigations',
    excerpt: `Data collected from IoT devices such as trackers can make a massive difference in the outcomes of critical matters. In a case involving...`,
    scenarios: [
      'Data collected from IoT devices such as trackers can make a massive difference in the outcomes of critical matters.',
      'In a case involving an accident between a tractor-trailer and a motorcycle, locational data collected from onboard the trailer came in handy. The motorcycle was pushed off the road by the trailer, resulting in several injuries to the rider. Eyewitnesses could not definitively identify the trailer but recalled the transport company’s logo printed on it. The transport company\'s trailers were fitted with asset trackers which could tell the location and the route of all its trucks. The data collected from these trackers was stored in the company\'s database and could be accessed to ascertain the location of any its trucks.',
      'However, a forensic search of the database showed that the company did not have any trucks on that route on the day of the accident. The plaintiff (motorcyclist) countered the transport company\'s claim by citing its six-month GPS data retention policy. As per the policy, the databases of the transport company were purged clean of data every six months. The plaintiff challenged the validity of the defendant\'s search since it was conducted 27 months after the date of the accident. The judge decided that this was a matter of material fact that the jury needed to sort out.'],
    takeaways: [
      'Asset trackers provide investigators access to a large pool of data by letting organizations monitor their moveable assets such as fleet vehicles, construction equipment, and medical devices. Asset trackers can monitor several parameters such as locations, diagnostics, messaging, weather conditions, and compliance data, which are extremely critical in the monitoring of high-value and moveable assets.',
      'The case of the motorcyclist vs. the trucking company is an excellent example of how asset tracker evidence can be highly probatory and accessible for investigators working for clients that own or finance assets. Investigators can search their client’s databases for extracting data and determining critical information regarding who/what/when/where details of the asset without having to examine the asset or the asset custodian.',
      'The case also underscores the importance of having expertise in handling databases. Collecting and validating data in databases early can help to identify defensible scenarios such as data purge. Cyber forensic consultants are trained in managing large databases and executing complex queries to secure and document significant evidence. Cyber forensic consultants are specialists in handling large structured data and help in gathering critical information during investigations.'
    ],
    thumbnail: 'case-study-3'
  },
  3: {
    id: 3,
    title: 'Investigating Network data to reveals theft of trade secrets',
    excerpt: `Trade secrets are the backbone of organizations, often separating the successful ones and their completion. When an engineer in a large consumer...`,
    scenarios: [
      'Trade secrets are the backbone of organizations, often separating the successful ones and their completion.',
      'When an engineer in a large consumer technology organization announced that he would be resigning from the organization and returning to his home country to take care of his ailing parents, some eyebrows were raised in his department. His manager became especially concerned when the engineer informed him that he would be working for an electric car manufacturer on returning to his country. The organisation started its investigations into the engineer\'s activities as it had similar programs to the electric car manufacturer. On investigating the engineer’s work phones, laptops, and network activity, it was found that his activity had spiked to a two-year high to the days close to his date of resignation. It was found that he had conducted bulk searches and had downloaded copious amounts of data from restricted databases that he had access to. On confrontation, the engineer admitted to stealing company data and was subsequently indicted in the theft of trade secrets by enforcement agencies.'
    ],
    takeaways: [
      'Network forensics is a specialised branch of digital forensics that involves tracing or monitoring network activity by analyzing log data from servers, firewalls, routers, and intrusions detection applications. Network forensics comprise retroactive analysis and live stream traffic monitoring executed through analytic techniques that efficiently process large amounts of data.',
      'Today, network forensics has become an essential tool for attorneys in cyberlaw practices for intrusion and breach detection. Its prominence is increasing rapidly as companies have become more sophisticated and diligent about their cybersecurity. Organisations have started storing data logs for more extended periods and monitoring activity more closely than ever before, safeguarding themselves during times of investigations to identify mass movement or deletion of data and other unscrupulous user activity.'
    ],
    thumbnail: 'case-study-4'
  },
  4: {
    id: 4,
    title: 'Analysing data from vehicle infotainment, telematics and black box systems',
    excerpt: `In a 2017 hit-and-run car crash, a dark-coloured SUV driving without its headlights switched on hit a car...`,
    scenarios: [
      'In a 2017 hit-and-run car crash, a dark-coloured SUV driving without its headlights switched on hit a car, then skid off into trees before driving off. Although the police were able to locate the SUV, they used digital forensics to establish the sequence of events that had occurred. The police downloaded data from the SUV’s on board diagnostics, infotainment and telematics systems. From the data, they were able to assess that the car had passed through the accident spot at the time of crash, that the headlights were switched off, and that the vehicle completed several forward and reverse maneuvers immediately after the collision and around trees. The police also discovered information regarding the SUV’s routes and destinations through its navigation system.'
    ],
    takeaways: [
      'With cars becoming more technologically advanced and connected, they have become a rich source of data for investigations. Today vehicles store crucial information about their driver such as addresses, recent and frequented routes and locations, phone logs, contacts, emails, texts and speed, braking, and seatbelt use data. Today, most in car infotainment systems today consist of tablets that can run web browsers, apps such as Maps, Facebook, and YouTube that can store history, cookies, and cache information.',
      'With cars becoming more advanced, the databases of forensic tools are also expanding, enabling vehicle forensics for auto insurance investigators, car rental companies, law enforcement agencies, intelligence agencies, and auto manufacturers.'
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
