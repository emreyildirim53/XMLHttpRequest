
  //All data storage this array
  var catalog=[];

  //Xml Parse
  function getInfo(){
        var httpObj = getHttpRequest();
        httpObj.open("GET", "student.xml", false);
        httpObj.send();
        var xmlDocument = httpObj.responseXML;
        var xmlEl = xmlDocument.getElementsByTagName("catalog");
        createTable(xmlEl);
  }

  // Created Student Summary View
  function createTable(xmlEl){
    var result = "<table border=1><tr class='header'><td>Numara</td><td>Ad Soyad</td></tr>";
    for(var i=0;i<xmlEl.length;i++){
        number=xmlEl[i].getElementsByTagName("number")[0].innerHTML;
        namesurname=xmlEl[i].getElementsByTagName("namesurname")[0].innerHTML;
        department=xmlEl[i].getElementsByTagName("department")[0].innerHTML;
        studentclass=xmlEl[i].getElementsByTagName("studentclass")[0].innerHTML;
        var student = {number:number,namesurname:namesurname,department:department,studentclass:studentclass};
        catalog.push(student);
        result += "<tr onclick='getStudentInfo(catalog,"+number+")'><td>" + number + "</td><td>" + namesurname + "</td></tr>";
    }
    result += "</table>";
    document.getElementById('student-list').innerHTML=result;
  }

  // Specific and Detailed Student Info
  function getStudentInfo(catalog,number){

    var http = getHttpRequest();
    var params = 'catalog='+JSON.stringify(catalog)+'&number='+number;
    http.open('POST', 'getStudentInfo.php', true);

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200)
          document.getElementById('student-info').innerHTML=http.responseText;
    }
    http.send(params);

  }

  // XMLHttpRequest Browser Supporting Setting
  function getHttpRequest() {
      var xmlhttp;
      if (window.XMLHttpRequest)// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp=new XMLHttpRequest();
       else // code for IE6, IE5
          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      return xmlhttp;
  }
