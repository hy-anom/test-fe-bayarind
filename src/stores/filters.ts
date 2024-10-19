import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { ref } from "vue";
import { IDepartment, IPosition } from "../types/filterTypes";

export const useFiltersStore = defineStore("filtersStore", () => {
  const { token } = useAuthStore();
  const departments = ref<IDepartment[]>();
  const positions = ref<IPosition[]>();

  function getDepartments() {
    const headers = new Headers();

    headers.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(
      "https://api-interview-vue.bayarind.id/api/departement/list",
      requestOptions
    )
      .then((response) => response.json())
      .then(({ data }) => {
        departments.value = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function getPositions() {
    const headers = new Headers();

    headers.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "GET",
      headers,
    };

    fetch(
      "https://api-interview-vue.bayarind.id/api/position/list",
      requestOptions
    )
      .then((response) => response.json())
      .then(({ data }) => {
        positions.value = data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getDepartments();
  getPositions();

  return {
    departments,
    positions,
  };
});
