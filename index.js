const Database = require('better-sqlite3');
const db = new Database('test.db', {verbose: console.log});

function addCustomer(name, mail, phoneNumber, deliveryAddress) {
    try {
        const stmt = db.prepare('INSERT INTO customer (customerName, customerEmail, customerPhoneNumber, customerDeliveryAdress) VALUES (?,?,?,?)');
        const info = stmt.run(name, mail, phoneNumber, deliveryAddress);
        console.log(`user added with id: ${info.lastInsertRowid}`);
    } catch (err) {
        console.error("Couldn´t add new customer: ", err);
    }
}

addCustomer("Jerry", "abc@gmail.com", "0707-123456", "Anderssons väg 7");