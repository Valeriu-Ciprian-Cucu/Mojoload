get '/' => sub {
	shift->render('index');
};

post '/:file' => sub {
	my $self = shift;
	my $file_name = $self->param('file');
	
	use Data::Dumper;
	print "\n" . Dumper($file_name). "\n";

	$self->req->upload($file_name)->move_to('./public/' . $file_name);
	$self->render_text($file_name);
};
