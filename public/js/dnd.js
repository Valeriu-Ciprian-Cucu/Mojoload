function uploadAsync(elem, url) {
	var fileForm = document.getElementById(elem),
		cancelEvt = function (e) {
			e.preventDefault();
			e.stopPropagation();
		},
		handleUpload = function (e) {
			cancelEvt(e);

			var file = e.dataTransfer.files[0],
				xhr = new XMLHttpRequest(),
				name = file.name || file.fileName;

			xhr.open("POST", url + name, true);
			xhr.send(file);
		}

	fileForm.addEventListener('dragenter', cancelEvt, false);
	fileForm.addEventListener('dragexit', cancelEvt, false);
	fileForm.addEventListener('dragover', cancelEvt, false);
	fileForm.addEventListener('drop', handleUpload, false);
}
