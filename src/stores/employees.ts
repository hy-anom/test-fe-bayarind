import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import {
  IEmployee,
  IEmployeeCreateForm,
  IEmployeeEditForm,
  IEmployees,
} from "../types/employeesTypes";
import router from "../router";

export const useEmployeesStore = defineStore("employeesStore", () => {
  const employees = ref<IEmployees>();
  const employeeToBeEdited = ref<IEmployee>();
  const { token } = useAuthStore();

  function getEmployees() {
    const headers = new Headers();

    headers.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch("https://api-interview-vue.bayarind.id/api/employee", requestOptions)
      .then((response) => response.json())
      .then(({ data }) => {
        employees.value = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editEmployee({
    id,
    name,
    gender,
    email,
    phone,
    date_of_birth,
    address,
    department_id,
    job_position_id,
  }: IEmployeeEditForm) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({
      id,
      name,
      gender,
      email,
      phone,
      date_of_birth,
      address,
      department_id,
      job_position_id,
    });

    const requestOptions = {
      method: "PUT",
      headers,
      body,
    };

    fetch("https://api-interview-vue.bayarind.id/api/employee", requestOptions)
      .then((response) => response.json())
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function createEmployee({
    name,
    gender,
    email,
    phone,
    date_of_birth,
    address,
    department_id,
    job_position_id,
  }: IEmployeeCreateForm) {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({
      name,
      gender,
      email,
      phone,
      date_of_birth,
      address,
      department_id,
      job_position_id,
    });

    const requestOptions = {
      method: "POST",
      headers,
      body,
    };

    fetch("https://api-interview-vue.bayarind.id/api/employee", requestOptions)
      .then((response) => response.json())
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteEmployee(id: number){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    const body = JSON.stringify({
      id
    });

    const requestOptions = {
      method: "DELETE",
      headers,
      body,
    };

    fetch("https://api-interview-vue.bayarind.id/api/employee", requestOptions)
      .then((response) => response.json())
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    employees,
    employeeToBeEdited,
    
    getEmployees,
    editEmployee,
    createEmployee,
    deleteEmployee
  };
});
