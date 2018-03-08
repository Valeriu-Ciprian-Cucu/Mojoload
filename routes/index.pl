
get '/' => sub {
	shift->render('index');
};

post '/:file' => sub {
	my $self = shift;
	my $UPLOAD_DIR = "./public/upload";
	`mkdir $UPLOAD_DIR` unless -d $UPLOAD_DIR;

	my $headers = $self->req->headers;
	my $body = $self->req->body;

	my $filename = $headers->header('x-file-name');
	my $unique_filename = $filename;

	my $i = 0;
	while ( -f "$UPLOAD_DIR/$unique_filename") {
		$unique_filename = $filename;
		$unique_filename =~ s/\./sprintf('-%x.', $i++)/e;
	}

	warn "Uploading file to $unique_filename";

	my $asset = Mojo::Asset::File->new;
	$asset->add_chunk($body);
	$asset->move_to("$UPLOAD_DIR/$unique_filename");

	$self->render('text' => 'ok');
};
