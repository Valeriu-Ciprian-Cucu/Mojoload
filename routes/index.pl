get '/' => sub {
	shift->render('index');
};

post '/:file' => sub {
	my $self = shift;
	my $file_name = $self->req->param('file');
	
	$self->req->upload($file)->move_to('./public/' . $file_name);
	$self->render_text('ok');
};
