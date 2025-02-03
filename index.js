const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('test.db', (err) => {
    if (err) {
        console.error("couldn´t connect to database", err);
        return;
    }
    console.log("connected to database");
});

/* const Database = require("better-sqlite3");
const db = new Database("test.db", { verbose: console.log }); */

function addCustomer(name, mail, phoneNumber, deliveryAddress) {
  try {
    const stmt = db.prepare(
      "INSERT INTO customer (customerName, customerEmail, customerPhoneNumber, customerDeliveryAdress) VALUES (?,?,?,?)"
    );
    const info = stmt.run(name, mail, phoneNumber, deliveryAddress);
    console.log(`user added with id: ${info.lastInsertRowid}`);
  } catch (err) {
    console.error("Couldn´t add new customer: ", err);
  }
}

const getAllCustomers = () => {}

db.all("SELECT * FROM customer", [], (err, rows) => {
  if (err) {
    console.error("Couldn´t show customers: ", err);
    return;
  }
  console.log("Alla kunder: ");
  rows.forEach((customer) => {
    console.log(
      `ID: ${customer.customerId}, Namn: ${customer.customerName}, Email: ${customer.customerEmail}, Phone number: ${customer.customerPhoneNumber}, Delivery address: ${customer.customerDeliveryAdress}`
    );
  });
});

/* addCustomer("Jerry", "abc@gmail.com", "0707-123456", "Anderssons väg 7");
 */
