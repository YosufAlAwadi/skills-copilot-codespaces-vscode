function skillsmember() {
    var member = {
        name: "John Doe",
        age: 25,
        skills: ["HTML", "CSS", "JS"],
        details: function() {
            console.log(this.name + " is " + this.age + " years old. He knows " + this.skills);
        }
    }
    member.details();
}