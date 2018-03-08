function uploadAsync(elem, url) {
  var fileForm = document.getElementById(elem),
	supressEvent = function (e) {
		e.preventDefault();
		e.stopPropagation();
	},
	handleUpload = function (e) {
		console.log("file upload handled");
		supressEvent(e);

		for (i = 0; i < e.dataTransfer.files.length; i++) {
			var file = e.dataTransfer.files[i],
			xhr = new XMLHttpRequest(),
			name = file.name || file.fileName,
			size = file.size || file.fileSize;
			console.log(file);

			xhr.open("POST", name, true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.setRequestHeader("X-File-Name", name);
			xhr.setRequestHeader("X-File-Size", size);
			xhr.send(file);
		}
	}

	fileForm.addEventListener('dragenter', supressEvent, false);
	fileForm.addEventListener('dragexit', supressEvent, false);
	fileForm.addEventListener('dragover', supressEvent, false);
	fileForm.addEventListener('drop', handleUpload, false);
}

function afterChooseFiles(elem) {
	var
		field = document.getElementById(elem),

		showFiles = function(e) {
			console.log("files chosen by click");
			console.log(e);
			e.preventDefault();
			e.stopPropagation();

			for (i = 0; i < e.srcElement.files.length; i++) {
				var file = e.srcElement.files[i],
				xhr = new XMLHttpRequest(),
				name = file.name || file.fileName,
				size = file.size || file.fileSize;
				console.log(file);

				xhr.open("POST", name, true);
				xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xhr.setRequestHeader("X-File-Name", name);
				xhr.setRequestHeader("X-File-Size", size);
				xhr.send(file);
			}


		}
	;

	field.addEventListener('change', showFiles, false);
}

