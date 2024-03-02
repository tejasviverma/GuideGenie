document.addEventListener('DOMContentLoaded', function () {
	var modeSwitch = document.querySelector('.mode-switch');
	modeSwitch.addEventListener('click', function () { document.documentElement.classList.toggle('dark');
	modeSwitch.classList.toggle('active');
	});
	var listView = document.querySelector('.list-view');
	var gridView = document.querySelector('.grid-view');
	var projectsList = document.querySelector('.project-boxes');
	listView.addEventListener('click', function () {
	gridView.classList.remove('active');
	listView.classList.add('active');
	projectsList.classList.remove('jsGridView');
	projectsList.classList.add('jsListView');
	});
	gridView.addEventListener('click', function () {
	gridView.classList.add('active');
	listView.classList.remove('active');
	projectsList.classList.remove('jsListView');
	projectsList.classList.add('jsGridView');
	});
	document.querySelector('.messages-btn').addEventListener('click', function () {
	document.querySelector('.messages-section').classList.add('show');
	});
	document.querySelector('.messages-close').addEventListener('click', function() {
	document.querySelector('.messages-section').classList.remove('show');
	});
	});
	
      // JavaScript code to get current date
      var currentDate = new Date();
      
      // Format the date as you want
      var formattedDate = currentDate.toDateString(); // Example: "Wed Mar 03 2024"
  
      // Display the date in an HTML element
      document.getElementById("currentDate").innerHTML = formattedDate;
