import { Module } from '@nestjs/common';
import { EmployeeDetailsController } from './employee.controller';
import { EmployeeDetailsService } from './employee.service';

@Module({
  imports: [],
  controllers: [EmployeeDetailsController],
  providers: [EmployeeDetailsService],
})
export class EmployeeDetailsModule {}
