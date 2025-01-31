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

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DrawingDialogComponent} from "../drawing-dialog/drawing-dialog.component";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-import-dialog',
    templateUrl: './import-dialog.component.html',
    styleUrls: ['./import-dialog.component.css']
})
export class ImportDialogComponent implements OnInit {

    @ViewChild('fileInput', { static: true }) el: ElementRef;

    constructor(public dialogRef: MatDialogRef<DrawingDialogComponent>) {
    }

    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close(null);
    }

    readFromFile() {
        const reader = new FileReader();
        for (let index = 0; index < this.el.nativeElement.files.length; index++) {
            reader.onload = () => {
                // this 'text' is the content of the file
                const text = reader.result;
                this.dialogRef.close(text);
            };
            reader.readAsText(this.el.nativeElement.files[index], 'UTF-8');
        }
    }

}