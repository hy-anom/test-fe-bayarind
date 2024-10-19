<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useEmployeesStore } from "../../stores/employees";
import { IEmployee } from "../../types/employeesTypes";
const employeesStore = useEmployeesStore();
const router = useRouter();
const search = ref("");
const headers = [
  {
    key: "name",
    title: "Name",
  },
  { key: "gender", title: "Gender" },
  { key: "email", title: "Email" },
  { key: "phone", title: "Phone" },
  { key: "date_of_birth", title: "DOB" },
  { key: "address", title: "Address" },
  { key: "departement", title: "Department" },
  { key: "position", title: "Position" },
  { key: "status", title: "Status" },
  { key: "actions", title: "Actions" },
];

onMounted(() => {
  employeesStore.getEmployees();
});

const handleEditEmployee = (employee: IEmployee) => {
  employeesStore.employeeToBeEdited = employee;
  router.push(`edit/${employee.id}`);
};

const handleCreateNewEmployee = () => {
  router.push("create");
};

const handleDeleteEmployee = (employee: IEmployee) => {
  employeesStore.deleteEmployee(employee.id);
};
</script>

<template>
  <div>
    <v-card fluid>
      <v-card-title class="d-flex align-center pa-4">
        <v-icon icon="mdi-account"></v-icon> &nbsp; Employees Data
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        >
        </v-text-field>
        <v-btn class="ml-6" @click="handleCreateNewEmployee">
          <v-icon icon="mdi-account-plus"></v-icon>
          &nbsp; Create New Employee
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-data-table
        :headers="headers"
        :search="search"
        :items="employeesStore.employees?.list"
      >
        <template v-slot:header.control> Actions </template>
        <template v-slot:item.status="{ item }">
          <div class="text-end">
            <v-chip
              :color="item.status === 'active' ? 'green' : 'red'"
              :text="item.status"
              class="text-uppercase"
              size="small"
              label
            ></v-chip>
          </div>
        </template>
        <template v-slot:item.actions="{ item }">
          <div>
            <v-icon
              icon="mdi-pencil-box"
              end
              @click="handleEditEmployee(item)"
            ></v-icon>
            <v-icon
              icon="mdi-delete"
              end
              @click="handleDeleteEmployee(item)"
            ></v-icon>
          </div>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<style scoped></style>
