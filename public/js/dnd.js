function uploadAsync(elem, url) {
  var fileForm = document.getElementById(elem),
	supressEvent = function (e) {
		e.preventDefault();
		e.stopPropagation();
	},
	handleUpload = function (e) {
		console.log("file upload handled");
		supressEvent(e);

		var file = e.dataTransfer.files[0],
		xhr = new XMLHttpRequest(),
		name = file.name || file.fileName,
		size = file.size || file.fileSize;
		console.log(file);

		xhr.open("POST", url + name, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.setRequestHeader("X-File-Name", name);
		xhr.setRequestHeader("X-File-Size", size);
		xhr.send(file);
  }

	fileForm.addEventListener('dragenter', supressEvent, false);
	fileForm.addEventListener('dragexit', supressEvent, false);
	fileForm.addEventListener('dragover', supressEvent, false);
	fileForm.addEventListener('drop', handleUpload, false);
}
