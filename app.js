const express = require('express');
const md  = require('./mod');
const app = express();

// Computed Propertry or getter or setter

const People = {
    name :'Junaid',
    surname:'Ahmed',

    get FullName(){
        return this.name + ' ' + this.surname;
    } ,
    set FullName(fullname)
    {
        console.log('seter is called');
        let spl = fullname.split(' ');
        
        this.name =spl[0];
        this.surname  =spl[1];

    },
    getFullNameAgain:function()
    {
        return this.name;
    }
};

// Class Example 

class person
{
    constructor(name,surname,middlename,age)
    {
        this.name = name;
        this.surname = surname;
        this.middlename = middlename;
        this.age = age;
    }
    getFullName()
    {
        return this.name + ' ' + this.middlename + ' ' + this.surname;
    }
    static Older (p1,p2)
    {
      return  (p1.age > p2.age) ? p1:p2;
    }
}
class PersonWithAddress extends person
{   
    constructor(name,middlename,surname,age,address)
    {
        super(name,surname,middlename,age);
        this.address = address;
    }
    getFullDetails ()
    {
      return  this.getFullName() + ' ' + this.address; 
    }

}

var person1  = new person('junaid','mahmood','malik',30);
var person2  = new person('ammar','mahmood','malik',20);
 console.log( md.getProp());
console.log(person1.getFullName());
// get and set call
console.log('---Getter and setter ----');
People.FullName="junaid mahmood";
console.log(People.FullName);
console.log(People.getFullNameAgain());
app.listen(3000,function(){
    console.log('server is runing ..');
});