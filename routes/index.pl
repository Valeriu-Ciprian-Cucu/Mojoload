
get '/' => sub {
	shift->render('index');
};

post '/:file' => sub {
	my $self = shift;
	my $UPLOAD_DIR = "./public/upload";
	`mkdir $UPLOAD_DIR` unless -d $UPLOAD_DIR;

	my $headers = $self->req->headers;
	my $body = $self->req->body;
	my $filename = $UPLOAD_DIR ."/". $headers->header("x-file-name");
	warn "[!] Uploading file to $filename";

	my $asset = Mojo::Asset::File->new;
	$asset->add_chunk($body);
	$asset->move_to($filename);

	$self->render_text('ok');
};
