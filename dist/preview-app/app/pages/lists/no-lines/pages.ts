import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import {AndroidAttribute} from '../../../directives/helpers';

@Page({
    templateUrl: './build/pages/lists/no-lines/template.html',
    directives: [forwardRef(() => AndroidAttribute)]
})
export class NoLinesPage {
    constructor() {

    }
}