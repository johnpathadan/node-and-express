const { format } = require("date-fns");
const { v4: uuid } = require("uuid"); //import v4 as uuid
// const uuid = require("uuid"); method - 2
console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));

console.log(uuid());
// console.log(uuid.v4) method - 2
