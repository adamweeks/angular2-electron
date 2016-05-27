import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component, Pipe, PipeTransform, enableProdMode} from '@angular/core';
import {NgFor} from '@angular/common';

import { SliderAppComponent, environment } from './slider/';

enableProdMode();

bootstrap(SliderAppComponent);
