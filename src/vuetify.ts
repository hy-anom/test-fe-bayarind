import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "vuetify/styles";
import { VDateInput } from 'vuetify/labs/VDateInput'

const vuetify = createVuetify({
  components : {
    VDateInput
  },
  directives,
  defaults: {
    VBtn: {
      color: "primary",
      variant: "elevated",
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});

export default vuetify;
