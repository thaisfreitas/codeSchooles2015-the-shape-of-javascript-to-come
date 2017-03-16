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
