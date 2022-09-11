import { Component, OnInit, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-firebase-demo',
  templateUrl: './firebase-demo.component.html',
  styleUrls: ['./firebase-demo.component.scss']
})
export class FirebaseDemoComponent implements OnInit {

  dataSource: any;
  animal: string | undefined;
  name: string | undefined;
  constructor(private store: AngularFirestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.store.collection('userinfo').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item =>
        Object.assign({ id: item.payload.doc.id }, item.payload.doc.data())
      );
      console.log(this.dataSource);

    })
  }
  delete(arg0: any) {
    throw new Error('Method not implemented.');
  }
  edit(arg0: any) {
    throw new Error('Method not implemented.');
  }
  openDialog() {
    const dialogRef = this.dialog.open(Dialog, {
      width: '250px',
      data: { },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

}
@Component({
  selector: 'dialog',
  templateUrl: 'dialog.html',
})
export class Dialog {
  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}