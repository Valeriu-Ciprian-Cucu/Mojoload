#!/usr/bin/env perl
use Mojolicious::Lite;
use Data::Dumper;

use strict;
use warnings;

require './routes/index.pl';

app->start;
