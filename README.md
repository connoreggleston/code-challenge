TABLE OF CONTENTS 
---------------------
   
 1) Overview
 2) Installations / Requirements
 3) Configuration
 4) Issues / Troubleshooting
 
---------------------
 
1) Overview

	The purpose of this repository is to allow a user to search a GitHub user name and return specific information back to the display. When a request is made (on submit) from the form, Javascript fires an AJAX call to the GitHub API. The API call returns requested information as a JSON string. 
	Once the JSON string is returned, the javascript manipulates the data to display as determined by the developer. Specifically, the basic user information as well as a list of "Followers" the user has obtained.
	

2) Installations / Requirements

	This module has the following addons via CDN:
	- jQuery
	- Bootstrap
	- FontAwesome
	- Google Fonts
	
	
3) Configuration

	Versions:
	- jQuery		v2.2.4
	- Bootstrap 	v3.3.7


4) Issues / Troubleshooting

	UI/UX: 
	- The layout is pretty basic. I did, however, have issues with the hide/show classes that home with Bootstrap. Because if this, I had to settle for inline styles (display:none, display:block, etc.). I am still researching this issue.
	
	Backend:
	- Load More button was a challenge. Because there are multiple AJAX calls required, manipulating the variables for "pages" was difficult. My latest test has the button working.
	- The "followersUrl" was giving me some problems. My first few test claimed that I had hit the Request Limit Cap. Because of this, I was put back a day in development. However, I was able to begin development again the next day. 
	- I had to set the "loadMore" button on click outside of the submit function. I was struggling for a while because the load more was returning the results twice. Once I moved the load more outside of the submit function, I started receiving the results that I expected.
	