//01

class Employee {
    #baseSalary = 0;
    #additionalSalary = 0;

    constructor(baseSalary, additionalSalary) {
        this.workingHours = [];
        this.#baseSalary = baseSalary;
        this.#additionalSalary = additionalSalary;
    }

    addWorkinghours(hours) {
        this.workingHours.push(hours);
    }
  
    calculateSalary() {
        const baseSalaryHour = 100000;
        const additionalSalaryHour = 75000;
        
        let totalSalary = 0;
        for (let workingHour of this.workingHours) {
            if (workingHour > 6) {
                totalSalary += (baseSalaryHour * 6) + (additionalSalaryHour * (workingHour - 6));
            } else {
                totalSalary += baseSalaryHour * workingHour;
            }
        }

        return totalSalary;
    }
 
}

    class FulltimeEmployee extends Employee {
    constructor() {
        super(100000, 75000);
    
    }
}
    class ParttimeEmployee extends Employee {
    constructor() {
        super(50000, 30000);
    }
}


const employee1 = new FulltimeEmployee();
employee1.addWorkinghours(1);
employee1.addWorkinghours(1);
employee1.addWorkinghours(7);

const employee2 = new ParttimeEmployee();
employee2.addWorkinghours(7);
employee2.addWorkinghours(8);
employee2.addWorkinghours(2);

const fulltimeSalary = employee1.calculateSalary();
const parttimeSalary = employee2.calculateSalary();


console.log(`Full-time employee salary is IDR ${fulltimeSalary}`);
console.log(`Part-time employee salary is IDR ${parttimeSalary}`);



