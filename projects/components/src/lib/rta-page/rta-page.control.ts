import { ControlType } from "@sassoftware/vi-api/config";

export const control = {
  category: "Fields",
  controlDescription: {
    defaultText: "rtaPage"
  },
  directiveName: "sol-rta-page",
  displayName: {
    defaultText: "rtaPage"
  },
  name: "rtaPage",
  controlAttributes: {
    attributes: {
      company: {
        defaultValue: "",
        displayName: {
          defaultText: "Company name"
        },
        type: "DataSource",
        required: true
      },
      sideNumber: {
        defaultValue: "",
        displayName: {
          defaultText: "Side Number"
        },
        type: "DataSource",
        required: true
      },
      plateNumber: {
        defaultValue: "",
        displayName: {
          defaultText: "Plate Number"
        },
        type: "DataSource",
        required: true
      },
      staffId: {
        defaultValue: "",
        displayName: {
          defaultText: "Staff ID"
        },
        type: "DataSource",
        required: true
      },
      permitId: {
        defaultValue: "",
        displayName: {
          defaultText: "Permit ID"
        },
        type: "DataSource",
        required: true
      },
      driverName: {
        defaultValue: "",
        displayName: {
          defaultText: "Driver Name"
        },
        type: "DataSource",
        required: true
      }
    },
      metadata: {
        renderAs: ControlType.WebComponent,
        states: {
        readOnly: true,
        required: true
      }
    }
  }
};
