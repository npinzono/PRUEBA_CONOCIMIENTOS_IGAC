import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { User } from '../core/_models/user';
import { CoreService } from '../core/_services/core.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  constructor(
    public coreService: CoreService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }
  
  ngOnInit(): void {
    this.getAllUsers();
   
  }

  statusList = [
    {label: 'ACTIVO', value: 1},
    {label: 'INACTIVO', value: 0},
  ];
  paginationOptions = {
    pageNumber: 1,
    rows: 25,
    pageLinkSize: 3,
    rowsPerPageOptions: [25, 50, 75],
    totalRecords: 0
  };
  users : any[]= [];
  newUser: User = {
    name: '', 
    id: '', 
    email: '', 
    password: '',
    status: 0
  };
  selectedUser : User = {
    name: '', 
    id: '', 
    email: '', 
    password: '',
    status: 0
  };
  
  newUserDialog : boolean = false;
  editUserDialog : boolean = false;
  deleteUserDialog : boolean = false;
  tituloModal : String = '';

  getAllUsers(){
    this.coreService.get("user/").subscribe(
      (res: any) => {
        console.log(res);
        this.users = res;
        this.paginationOptions.totalRecords = res.len;
        this.newUser = {
          name: '', 
          id: '', 
          email: '', 
          password: '',
          status: 0
        };
      }
    );
    
  }
  registerUser(){
    this.newUser.password = '123456789';
    this.coreService.post("user/", this.newUser).subscribe(
      (res: any) => {
        console.log(res);
        this.newUserDialog = false;
        this.getAllUsers();
        this.messageService.add({
          severity: "success",
          summary: "Éxito en el registro",
          detail: "Se registro el usuario con el número de identificació: "+this.newUser.id,
        });
      }
    );
  }

  editUser(user: any){
    this.selectedUser = user;
    this.editUserDialog = true;
    this.coreService.post("user/", this.selectedUser).subscribe(
      (res: any) => {
        console.log(res);
        this.editUserDialog = false;
        this.getAllUsers();
        this.messageService.add({
          severity: "success",
          summary: "Éxito en la edición",
          detail: "Se editó el usuario con el número de identificació: "+this.selectedUser.id,
        });
      }
    );
  }

  deleteUser(user: any){
    this.coreService.delete("user/", this.selectedUser.id).subscribe(
      (res: any) => {
        console.log(res);
        this.editUserDialog = false;
        this.getAllUsers();
        if(res == true){
          this.messageService.add({
            severity: "success",
            summary: "Éxito en la eliminación",
            detail: "Se eliminó el usuario con el número de identificació: "+this.selectedUser.id,
          });
        }else{
          this.messageService.add({
            severity: "err",
            summary: "No se realizó la eliminación",
            detail: "No se eliminó el usuario con el número de identificació: "+this.selectedUser.id,
          });
        }
      }
    );
  }

  editDialogUser(user: any){
    this.selectedUser = user;
    this.editUserDialog = !this.editUserDialog;
  }

  newDialogUser(){
    this.newUserDialog = !this.newUserDialog;
  }

  deleteDialogUser(user: any){
    this.selectedUser = user;
    this.confirmationService.confirm({
        message: 'Esta seguro que quiere eliminar el usuario con número de identificación'+this.selectedUser.id+'?',
        accept: () => {
          this.deleteUser(user);
        }
    });
    this.getAllUsers();
  }

  cerrarSesion(){
    this.router.navigate(['login']);
  }
}
