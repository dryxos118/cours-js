//* this
//* pointe vers la gaude du

const alex = {
  firstName: "alex",
  lastName: "hu",
  fullName() {
    console.log(this);
    console.log(`mon nom complet est ${this.firstName} ${this.lastName} `);
  },
};

const dom = {
  firstName: "dom",
  lastName: "hu",
  fullName() {
    console.log(`mon nom complet est ${this.firstName} ${this.lastName}  `);
  },
};

alex.fullName();
dom.fullName();
