//level 2 section 1 - basic-named-parameters
function displayTopicsPreview( topics = [] ){
  let message = "There are currently " + topics.length;
  _displayPreviewMessage(topics, message);
}

function setPageThread(name,  {popular, expires, activeClass}){
  let nameElement = _buildNameElement(name);
  let settings = _parseSettings(popular, expires, activeClass);

  _updateThreadElement(nameElement, settings);
}

function loadProfiles(userNames = [], {profilesClass,reverseSort } = {}) {
  profilesClass = profilesClass || ".user-profile";
  reverseSort   = reverseSort   || false;

  if (reverseSort) {
    userNames = _reverse(userNames);
  }

  _loadProfilesToSideBar(userNames, profilesClass);
}


//level 2 section 2 - refactoring-to-rest-params

function appendUserNames( ...userNames ){

  let userNameDivs  = "";
  let USER_CLASS    = ".forum-user";

  for(let i in userNames){
    let name = userNames[i];
    if(name !== "admin"){
      userNameDivs += "<div class='" + USER_CLASS + "'>" + name + "</div>";
    }
  }

  return userNameDivs;
}

getActiveUsers(15, function(data){
  let userNameDivs = appendUserNames( ...data.userNames );
  appendToSidebar(".side-bar", userNameDivs);
});

function getActiveUsers(topicId, cb){
  _fetchTopicInfo("/topics/" + id, function(data){
    cb(data);
  });
}

//arrow-functions-in-action
//simple function
let printName = function(value){
  console.log( value );
}
//arrow function counterpart
let printName = (value) => {
  console.log( value );
}

//arrow-functions-in-action
function ActiveUsersComponent(target, topicId){
  this.targetElement = target;
  this.topicId       = topicId;
}

ActiveUsersComponent.prototype.render = function(){
  getActiveUsers(this.topicId, (data) => {
    let userNameDivs = appendUserNames(...data.userNames);
    appendToSidebar(this.targetElement, userNameDivs);
  });
};
// Create new component below
let component = new ActiveUsersComponent(".active-users", 17);
component.render();
