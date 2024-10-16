import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeDetailsService {
  private employees =[
    {id: 1, name: 'Akshay', position: 'Software Engineer'},
    {id: 2, name: 'Anuroop', position: 'Software Engineer'},
    {id: 3, name: 'shashank', position: 'Software Engineer'},
    {id: 4, name: 'Ravi teja', position: 'Software Engineer'},

  ];
  findAll(){
    return this.employees;
  }
  findOne(id:number){
    return this.employees.find(employee => employee.id === id);
  }
}
