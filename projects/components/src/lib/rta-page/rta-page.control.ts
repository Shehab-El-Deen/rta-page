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
    attributes: {},
    metadata: {
      renderAs: ControlType.WebComponent,
      states: {
        readOnly: true,
        required: true
      }
    }
  }
};
