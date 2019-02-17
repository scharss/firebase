var config = {
    apiKey: "AIzaSyBJx-GjAnflQbZDGAAq0oJGUnE4NpvG-pA",
    authDomain: "proyectocrud-82046.firebaseapp.com",
    databaseURL: "https://proyectocrud-82046.firebaseio.com",
    projectId: "proyectocrud-82046",
    storageBucket: "proyectocrud-82046.appspot.com",
    messagingSenderId: "1031255776807"
  };
  firebase.initializeApp(config);


  function getID(id){
    return document.getElementById(id).value;
  }

  function arrayJSON(name,description){
    var data = {
        name: name,
        description: description
    };
    return data; 
  }

  function insertTask(){
      var id = getID("id");
      var name = getID("name");
      var description = getID("description");
      //console.log(name+description); 
      if(id.length==0 || name.length==0 || description.name==0){
          alert("Empty Fields")
      } else{
          var arrayData = arrayJSON(name,description);
          //console.log(arrayData);
          var task = firebase.database().ref("task/+id");
          task.set(arrayData);
          alert("Saved Successfully");
      }
  }