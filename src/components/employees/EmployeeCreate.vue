<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useEmployeesStore } from "../../stores/employees";
import { IEmployeeCreateForm } from "../../types/employeesTypes";
import { useFiltersStore } from "../../stores/filters";

const employeesStore = useEmployeesStore();
const filterStore = useFiltersStore();

const id = ref();
const name = ref();
const gender = ref();
const email = ref();
const phone = ref();
const dateOfBirth = ref();
const address = ref();
const departmentId = ref();
const jobPositionId = ref();

onMounted(() => {
});

const handleCreateEmployee = () => {
  const formattedDate = dateOfBirth.value.toISOString().split("T")[0];
  const formattedGender = `${gender.value}`.toLowerCase();
  const formattedDepartmentId = filterStore.departments
    ? filterStore.departments.find(
        (department) => department.title === departmentId.value
      )?.id
    : 0;
  const formattedPositionId = filterStore.positions
  ? filterStore.positions.find(
      (position) => position.title === jobPositionId.value
    )?.id
  : 0;

  const employeeToBeCreatedForm: IEmployeeCreateForm = {
    name: name.value,
    gender: formattedGender,
    email: email.value,
    phone: phone.value,
    date_of_birth: formattedDate,
    address: address.value,
    department_id: formattedDepartmentId || 0,
    job_position_id: formattedPositionId || 0,
  };

  employeesStore.createEmployee(employeeToBeCreatedForm);
};
</script>

<template>
  <div class="">
    <v-card width="500">
      <v-card-title> Create New Employee </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleCreateEmployee">
          <v-text-field v-model="name" label="Employee name"></v-text-field>
          <v-select
            class="text-capitalize"
            label="Gender"
            v-model="gender"
            :items="['Male', 'Female']"
          ></v-select>
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field v-model="phone" label="Phone"></v-text-field>
          <v-date-input
            v-model="dateOfBirth"
            label="Date of Birth"
          ></v-date-input>
          <v-text-field v-model="address" label="Address"></v-text-field>
          <v-select
            class="text-capitalize"
            label="Department"
            v-model="departmentId"
            :items="filterStore.departments"
          ></v-select>
          <v-select
            class="text-capitalize"
            label="Position"
            v-model="jobPositionId"
            :items="filterStore.positions"
          ></v-select>
          <v-btn class="mt-2" type="submit">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
