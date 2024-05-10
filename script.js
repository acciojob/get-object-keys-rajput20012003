//your JS code here. If required.
// Define the student object
const student = {
  name: "John"
};

// Add the getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
console.log(student.getKeys()); // Output: ["name"]

