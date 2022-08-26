import { Component, OnInit } from '@angular/core'
import { DialogRef } from '@angular/cdk/dialog'
import { FormControl, FormGroup } from '@angular/forms'
import { UserRole } from 'src/app/models/db/user.model'

export interface CreateUserFormData {
  name: string
  username: string
  role: UserRole
}

@Component({
  selector: 'unify-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    role: new FormControl<UserRole>(UserRole.TEAM_MEMBER),
  })
  constructor(private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.dialogRef.close(this.formGroup.value as CreateUserFormData)
  }
}
