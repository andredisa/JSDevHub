var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    var list = document.querySelector('ul');
    list.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

    var taskList = new TaskList();

    function newElement() {
      var inputValue = document.getElementById("myInput").value;
      var inputDate = document.getElementById("myDate").value;
      if (inputValue === '') {
        alert("errore, scrivi una task");
      } else {
        var task = new Task(inputDate, inputValue);
        taskList.addTask(task);
        var li = document.createElement("li");
        var t = document.createTextNode(inputDate + " - " + inputValue);
        li.appendChild(t);
        document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";
      document.getElementById("myDate").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    }