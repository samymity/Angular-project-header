import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component implements OnInit {



  ngOnInit(): void {
  }
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to proceed?' } // Pass data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed
        console.log('Confirmed!');
      } else {
        // User canceled
        console.log('Canceled!');
      }
    });
  }
}
