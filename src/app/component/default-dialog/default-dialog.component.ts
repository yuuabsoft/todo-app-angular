import {
  Component,
  Inject,
  OnInit
}                   from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
}                   from "@angular/material/dialog";
import {DialogData} from "../../model/DialogData";

@Component({
  selector:    'app-todo-delete-dialog',
  templateUrl: './default-dialog.component.html',
  styleUrls:   ['./default-dialog.component.scss']
})
export class DefaultDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DefaultDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
  }
}
