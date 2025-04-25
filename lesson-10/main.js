/* объект с тремя свойствами, в объекте есть МЕТОД syHello Который принимает имя и возвращает приветствие */
const user = {
    name: "Aleksandr",
    age: 28,
    language:"russian",
    myfunc: function(name) {
        return `Hello "${name}"\nВозраст: ${this.age}\nЯзык: ${this.language}`;
    }
};
  console.log(user.myfunc("Aleksandr"));

/* Массив */

const users = [
  { name: "John", isAdmin: false },
  { name: "Bob", isAdmin: true },
  { name: "Masha", isAdmin: false },
  { name: "Dima", isAdmin: true },
  { name: "Ivan", isAdmin: false },
];

let userNAME = 0;

for (let i = 0; i < users.length; i++) {
  if (!users[i].isAdmin) {
    userNAME++;
  }
}
console.log("количество пользователей:", userNAME);

/* ===================================================== */
