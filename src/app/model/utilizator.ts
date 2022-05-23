/*enum Role {
    Admin = 'Admin', 
    Organizer = 'Organizer',
    Client = 'Client'
  }*/

export class Utilizator {
    id!: number;
    uid!:string;
    email!: string;
    password!: string;
    role!: string;
    name!: string;
}