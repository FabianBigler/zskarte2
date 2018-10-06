/*
 * Copyright © 2018 ZSO Bern Plus
 *
 * This file is part of Zivilschutzkarte 2.
 *
 * Zivilschutzkarte 2 is free software: you can redistribute it and/or modify it 
 * under the terms of the GNU General Public License as published by the 
 * Free Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 *
 * Zivilschutzkarte 2 is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS 
 * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * Zivilschutzkarte 2.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 */

import {Component, OnInit} from '@angular/core';
import {Filter} from "../drawingtools/drawingtools.component";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


    filters: Filter[] = [
        {value: null, viewValue: 'Kein Filter', color: 'white', textcolor: 'black'},
        {value: 'damage', viewValue: 'Beschädigungen', color: 'red', textcolor: 'white'},
        {value: 'danger', viewValue: 'Gefahren', color: 'orange', textcolor: 'black'},
        {value: 'resources', viewValue: 'Einsatzmittel', color: 'blue', textcolor: 'white'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
