function uploadAsync(elem, url) {
  var fileForm = document.getElementById(elem),
  supressEvent = function (e) {
    e.preventDefault();
    e.stopPropagation();
  },
  handleUpload = function (e) {
    console.log("file upload handled");
    supressEvent(e);

<<<<<<< HEAD
			var file = e.dataTransfer.files[0],
				xhr = new XMLHttpRequest(),
				name = file.name || file.fileName;
			xhr.open("POST", url + name, true);
			xhr.setRequestHeader("X-File-Name", name);
			xhr.send(file);
		}
=======
    var file = e.dataTransfer.files[0],
    xhr = new XMLHttpRequest(),
    name = file.name || file.fileName;
    console.log(file);

>>>>>>> ea691bc383a8bef2c847e724bba3813a179ca001

    xhr.open("POST", url + name, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("X-File-Name", file.fileName);
    xhr.setRequestHeader("X-File-Size", file.fileSize);
    xhr.setRequestHeader("X-File-Type", file.type);
    xhr.setRequestHeader("Content-Length", file.size);
    xhr.setRequestHeader("Connection", "close");
    xhr.send(file);
  }

	fileForm.addEventListener('dragenter', supressEvent, false);
	fileForm.addEventListener('dragexit', supressEvent, false);
	fileForm.addEventListener('dragover', supressEvent, false);
	fileForm.addEventListener('drop', handleUpload, false);
}
