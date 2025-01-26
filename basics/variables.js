const accountId=12345    // const uses when the value of the variable is not changed in the future
let accountEmail="harshdeep@gmail.com"  // can be change in the future
var accountPassword="4321" // it contains the block and functional scope problem so we use the let keyword as a variable

accountCity="Etawah"

accountEmail="guptaji@gmail.com"
accountPassword="111111"
accountCity="Mysore"

console.table([accountId, accountEmail, accountPassword,accountCity]) // for printing all the variables in one go


