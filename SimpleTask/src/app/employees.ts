export interface Employees {
    status: string;
    data: Data;
  }
  export interface Data {
    employees?: (EmployeesEntity)[] | null;
  }
  export interface EmployeesEntity {
    id: string;
    fullName_FL: string;
    fullName_SL: string;
    hiringDate: string;
    firstContractingSalary: string;
    position: PositionOrDepartment;
    department: PositionOrDepartment;
    employeeJobStatuses?: (EmployeeJobStatusesEntity)[] | null;
  }
  export interface PositionOrDepartment {
    id: string;
    name_FL: string;
    name_SL: string;
  }
  export interface EmployeeJobStatusesEntity {
    id: string;
    status: string;
    type: string;
    terminationDate: string;
    suspendFromDate: string;
    suspendToDate: string;
  }
  