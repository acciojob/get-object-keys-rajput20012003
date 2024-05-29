// Create the student object
const student = {
    name: 'Alice'
};

// Add the getKeys method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Test the getKeys method
console.log(student.getKeys()); // Output: ['name']
