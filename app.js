var student0 = {firstName:"Ekaterina", lastName:"Anokhina", age:23, university:"Aalto University", faculty: "New Media"};
var student1 = {firstName:"Maria", lastName:"Korneeva", age:25, university:"Technical University of Berlin", faculty: "Economical Ingeneering"};
var student2 = {firstName:"Saeb", lastName:"Sadek", age:26, university:"University of Bielefeld", faculty: "Anglo-American Studies"};

var student = [student0, student1, student2];
var i=0; 


function myFunc (i) {
	return student[i].firstName + " " + student[i].lastName + " " + "goes to" + " " + student[i].university + " " + "and studies" + " " + student[i].faculty;
}
console.log (myFunc(1));