# Project Title

BirdFinder: A Web App for Bird Identification

## Overview

BirdFinder is a web application designed to assist bird enthusiasts in identifying various bird species. Users can search for birds by entering keywords or browsing through categories to access information such as scientific name, common name, region, family, order, conservation status, and amateur photos of the bird searched.

### Problem

Bird enthusiasts often struggle to identify bird species they encounter in the wild due to the vast diversity of birds and lack of easily accessible information. Existing resources for bird identification may be limited or not user-friendly, making it challenging for amateurs to engage in birdwatching activities effectively.

### User Profile

BirdFinder targets birdwatchers, nature enthusiasts, students, and anyone interested in learning more about birds. Users will utilize the app to quickly identify bird species they encounter in the field, access detailed information about each species, and contribute their amateur bird photos to enrich the app's database.

### Features

Search functionality: Users can search for birds by keywords, scientific name, or browse through categories.

Bird details: Display comprehensive information about each bird species, including scientific name, common name, region, family, order, conservation status, and amateur photos.

## Implementation

### Tech Stack

Frontend: HTML, CSS, JavaScript (React.js)
Backend: Node.js with Express.js framework.
Database: MongoDB for storing bird data and user contributions(for later versions).
Libraries: Bootstrap for frontend styling, Axios for handling HTTP requests.

### APIs

Integrate with the Nuthatch API (https://nuthatch.lastelm.software/) to fetch bird data, including scientific name, common name, region, family, order, photos and conservation status.

### Sitemap

Home/Search Page: Allows users to search for birds or browse categories.

Bird Details Page: Displays detailed information about a selected bird species.

### Mockups

Home/Search Page:

Header Section: At the top of the page, include the BirdFinder logo and a navigation bar with options for Home, Search, and any other relevant sections of the app.

Search Bar: Below the header, prominently display a search bar where users can enter keywords or bird names. Include a button or icon next to the search bar to initiate the search.

Filtering Options: Beneath the search bar, provide options for users to filter their search results or browse through categories. These options could include dropdown menus, checkboxes, or clickable buttons for filtering by criteria such as region, family, or order.

Featured Content: Consider including a section showcasing featured bird species or recent additions to the app's database. This could be presented as a carousel or grid of bird thumbnails with brief descriptions.

Explore Categories: Offer users the option to explore bird categories directly by providing clickable links or buttons for popular categories such as "Birds by Region", "Birds by Family", or "Birds by Conservation Status".

Footer Section: At the bottom of the page, include links to additional resources, contact information, and social media links to encourage user engagement and exploration beyond the Home/Search Page.

Bird Details Page:

Header Section: Similar to the search page, the header should contain the BirdFinder logo and a search bar for easy navigation back to the search page.

Bird Image: At the top of the page, display a high-quality image of the bird, if available.

Basic Information: Below the image, provide basic information such as the common name, scientific name, and conservation status.

Additional Details: Arrange sections for other details such as region, family, and order in a structured layout, possibly using tabs or accordion panels for organization.

Amateur Photos: Include a section showcasing amateur photos of the bird contributed by users. Each photo could be displayed in a gallery format with captions indicating the photographer's name and any relevant details.

### Data

For future implementations the app's database will consist of tables for user profiles and user-contributed photos. No database tables are needed for bird data as it will be fetched from the Nuthatch API.

### Endpoints

GET /birds: Retrieve a list of bird species based on search criteria

Response:
[
{
"images": [
"https://images.unsplash.com/photo-1643650997626-0124dbb98261",
"https://images.unsplash.com/photo-1644610901347-b05ec91bb9b2",
"https://images.unsplash.com/photo-1641995171363-9bc67bfb1b7c"
],
"lengthMin": "47",
"lengthMax": "51",
"name": "Black-bellied Whistling-Duck",
"id": 1,
"sciName": "Dendrocygna autumnalis",
"region": [
"North America"
],
"family": "Anatidae",
"order": "Anseriformes",
"status": "Low Concern"
},
{
...
},
]

GET /birds/{id}: Retrieve detailed information about a specific bird species

Response:

[
{
"images": [
"https://images.unsplash.com/photo-1643650997626-0124dbb98261",
"https://images.unsplash.com/photo-1644610901347-b05ec91bb9b2",
"https://images.unsplash.com/photo-1641995171363-9bc67bfb1b7c"
],
"lengthMin": "47",
"lengthMax": "51",
"name": "Black-bellied Whistling-Duck",
"id": 1,
"sciName": "Dendrocygna autumnalis",
"region": [
"North America"
],
"family": "Anatidae",
"order": "Anseriformes",
"status": "Low Concern",
"recordings": [
{
"date": "2013-07-18",
"loc": "Orlando Wetlands, Christmas, Orange County, Florida",
"birdId": 1,
"lic": "//creativecommons.org/licenses/by-nc-sa/3.0/",
"type": "call",
"gen": "Dendrocygna",
"rec": "Paul Marvin",
"ssp": "",
"rmk": "flight over marsh",
"file": "https://xeno-canto.org/143610/download",
"uploaded": "2013-07-27",
"playback-used": "no",
"id": "143610",
"sp": "autumnalis",
"lat": "28.5785",
"lng": "-80.9961",
"bird-seen": "yes",
"length": "0:14",
"cnt": "United States",
"sono": {
"small": "//xeno-canto.org/sounds/uploaded/RFTXRYBVBX/ffts/XC143610-small.png",
"large": "//xeno-canto.org/sounds/uploaded/RFTXRYBVBX/ffts/XC143610-large.png",
"med": "//xeno-canto.org/sounds/uploaded/RFTXRYBVBX/ffts/XC143610-med.png",
"full": "//xeno-canto.org/sounds/uploaded/RFTXRYBVBX/ffts/XC143610-full.png"
},
"alt": "0",
"en": "Black-bellied Whistling Duck",
"also": [
""
],
"url": "//xeno-canto.org/143610",
"q": "A",
"file-name": "XC143610-Black-bellied Whistling-Duck flight FL, Orlando Wetlands, July 18, 2013, 0656 AM.mp3",
"time": "06:56"
},
{
...
}
]

### Auth

User authentication will not be implemented in the initial version.

## Roadmap

Sprint 1 (April 23 - April 29)
Set up project environment: Create frontend and backend scaffolding
Integrate Nuthatch API for fetching bird data
Implement search functionality on the frontend.

Sprint 2 (April 30 - May 3)
Develop bird details page to display comprehensive information
Enable user contributions with basic photo upload feature
Perform initial testing and debugging to ensure basic functionality.

Sprint 3 (May 4 - May 5)
Enhance user experience with responsive design and improved UI/UX
Perform comprehensive testing and debugging to ensure app stability
Finalize documentation and prepare for submission

## Nice-to-haves

Advanced search filters (e.g., by bird color, size, habitat)
User profile: Enable users to create profiles to track their contributions, favorite bird species, and personalize their experience.

User contributions: Allow users to upload their amateur bird photos with associated metadata for community-driven content enrichment.

User authentication and profile functionality.
