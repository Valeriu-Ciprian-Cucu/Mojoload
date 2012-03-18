#!/usr/bin/env perl
use Mojolicious::Lite;

use strict;
use warnings;

require './routes/index.pl';

app->start;
