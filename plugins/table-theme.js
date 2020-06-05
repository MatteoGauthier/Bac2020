"use strict";

module.exports = function() {
  return {
    framework: "tailwind",
    table: "table-auto",
    row: "text-red-500",
    column: "col-md-12",
    label: "text-blue-400",
    input: "form-control",
    select: "form-control",
    field: "form-group",
    inline: "form-inline",
    right: "float-right",
    left: "float-left",
    center: "text-center",
    contentCenter: "justify-content-center",
    nomargin: "m-0",
    groupTr: "table-info",
    small: "",
    button: "btn btn-secondary",
    dropdown: {
      container: "dropdown",
      trigger: "dropdown-toggle",
      menu: "dropdown-menu",
      content: "",
      item: "dropdown-item",
      caret: "caret"
    },
    pagination: {
      nav: "",
      count: "",
      wrapper: "",
      list: "pagination",
      item: "page-item",
      link: "page-link",
      next: "",
      prev: "",
      active: "active",
      disabled: "disabled",
      icon: ""
    }
  };
};
