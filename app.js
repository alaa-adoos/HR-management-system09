let Id=999;
function managementSystem(employeeId,fullName,departmentHr,levelHr,imageUrl,salaryHr){
    this.id=employeeId;
    this.id=++Id;
    this.name=fullName;
    this.department=departmentHr;
    this.level=levelHr;
    this.image=imageUrl;
    this.salary=salaryHr;
}
managementSystem.prototype.uniqueId=function(){
console.log(Id);
}
managementSystem.prototype.gitRandomSalary=function(max,min){
    let salary=Math.floor(Math.random()*(max-min)+min);
    let netSalary=salary-(salary*0.075);
  document.write("Employee salary : "+salary );
   // console.log("the netTax is "+netSalary);
}
managementSystem.prototype.print=function(){
    document.write("Employee name: "+this.name);
    document.write("</br>")
    document.write("Department: "+this.department);
    document.write("</br>")
}

const Ghazi=new managementSystem("","Ghazi Samer","Administration","Senior")
const Lana=new managementSystem("","Lana Ali","Finance","Senior")
const Tamara=new managementSystem("","Tamara Ayoub","Marketing","Senior")
const Safi=new managementSystem("","Safi Walid","Administration","Mid-Senior")
const Omar=new managementSystem("","Omar Zaid","Development","Senior")
const Rana=new managementSystem("","Rana Saleh","Development","Junior")
const Hadi=new managementSystem("","Hadi Ahmad","Finance","Mid-Senior")
document.write("</br></br>");
Ghazi.print();
Ghazi.gitRandomSalary(2000,1500);
document.write("</br></br>");
Lana.print();
Lana.gitRandomSalary(2000,1500);
document.write("</br></br>");
Tamara.print();
Tamara.gitRandomSalary(2000,1500);
document.write("</br></br>");
Safi.print();
Safi.gitRandomSalary(1500,1000);
document.write("</br></br>");
Omar.print();
Omar.gitRandomSalary(2000,1500);
document.write("</br></br>");
Rana.print();
Rana.gitRandomSalary(1000,500);
document.write("</br></br>");
Hadi.print();
Hadi.gitRandomSalary(1500,1000);