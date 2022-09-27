import Dexie from 'dexie';
export const db = new Dexie("student");

db.version(12).stores({
    student: "name, email, gender, phonenumber, password, confirmpassword", // Primary key and indexed props
});