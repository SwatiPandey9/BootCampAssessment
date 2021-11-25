import Realm from "realm";

//DB Schema Desgin ---
const EmployeeSchema = {
    name: 'Employee',
    properties: {
      _id: 'string',
      name: 'string',
      designation: 'string',
      salary: 'string',
    },
    primaryKey
}
