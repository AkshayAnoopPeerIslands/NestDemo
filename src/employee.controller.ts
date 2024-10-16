import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeDetailsService } from './employee.service';

@Controller('EmployeeDetails')
export class EmployeeDetailsController {
  constructor(private readonly employeedetailsService: EmployeeDetailsService) {}

  @Get()
  findAll(){
    return this.employeedetailsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id:string){
    return this.employeedetailsService.findOne(+id);

  }
}
