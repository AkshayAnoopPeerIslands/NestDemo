import { Module } from "@nestjs/common";
import { EmployeeDetailsModule } from "./employee.module";
@Module({
    imports:[EmployeeDetailsModule],
})
export class AppModule {}