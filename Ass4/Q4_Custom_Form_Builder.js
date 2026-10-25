// Q4: Build a form dynamically from field definitions.
class FormBuilder {
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
  }

  createForm() {
    const form = document.createElement("form");
    form.id = "generatedForm";

    this.fields.forEach((field, index) => {
      const label = document.createElement("label");
      const inputId = `field-${index}`;
      label.htmlFor = inputId;
      label.textContent = field.label;

      let input;
      if (field.type === "select") {
        input = document.createElement("select");
        (field.options || []).forEach(optionText => {
          const option = document.createElement("option");
          option.value = optionText;
          option.textContent = optionText;
          input.appendChild(option);
        });
      } else {
        input = document.createElement("input");
        input.type = field.type || "text";
      }

      input.id = inputId;
      input.name = field.name || `field${index + 1}`;
      if (field.required) input.required = true;

      form.append(label, input);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);
    form.addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("output").textContent =
        JSON.stringify(this.getFormData(), null, 2);
    });

    this.container.replaceChildren(form);
  }

  getFormData() {
    const form = this.container.querySelector("form");
    const data = {};
    this.fields.forEach((field, index) => {
      const name = field.name || `field${index + 1}`;
      data[name] = form.elements.namedItem(name).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username", name: "username", required: true },
  { type: "email", label: "Email", name: "email", required: true },
  { type: "select", label: "Course", name: "course", options: ["CSE", "AIML", "Data Science"] },
  { type: "password", label: "Password", name: "password", required: true }
];

const formBuilder = new FormBuilder(fields, "formContainer");
formBuilder.createForm();
