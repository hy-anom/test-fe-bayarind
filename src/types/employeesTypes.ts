export interface IEmployee {
  id: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  departement: string;
  position: string;
  status: string;
}

export interface IEmployees {
  list: IEmployee[];
  total: number;
  current_page: number;
  total_page: number;
}

export interface IEmployeeEditForm {
  id: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  department_id: number;
  job_position_id: number;
}

export interface IEmployeeCreateForm {
  name: string;
  gender: string;
  email: string;
  phone: string;
  date_of_birth: string;
  address: string;
  department_id: string;
  job_position_id: string;
}
