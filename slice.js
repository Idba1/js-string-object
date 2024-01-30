/* const address = "Birulia";
const addressPart = address.slice(0,3);
console.log(addressPart);
 */


// string to array
const friendsName = "Rahim,karim,fahim,nadim,sahim";
console.log(friendsName.split());
console.log(friendsName.split(""));
console.log(friendsName.split(" "));
console.log(friendsName.split("a"));
console.log(friendsName.split(","));


// Array to string
const realFriend = [ 'Rahim', 'karim', 'fahim', 'nadim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));