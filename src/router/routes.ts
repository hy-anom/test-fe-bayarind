import EmployeeCreateView from "../@views/EmployeeCreateView.vue";
import EmployeeEditView from "../@views/EmployeeEditView.vue";
import EmployeesView from "../@views/EmployeesView.vue";
import HomeView from "../@views/HomeView.vue";
import LoginView from "../@views/LoginView.vue";
import Department from "../components/department/Department.vue";
import Employees from "../components/employees/Employees.vue";

export const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginView },
  { path: "/employees", component: EmployeesView,
    children: [
      {path: '', component: Employees},
      {path: '/departments', component: Department},
      {path: '/edit', component: EmployeeEditView},
      {path: '/edit/:id', component: EmployeeEditView},
      {path: '/create', component: EmployeeCreateView},
      {path: '/create/:id', component: EmployeeCreateView}
    ]
  }
];
