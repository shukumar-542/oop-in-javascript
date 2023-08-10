let birthDay = "1987-03-04"

class Players{
    #birthDay
    constructor(name,birthDay,monthlySalary, noOfMonth){
        this.name = name,
        this.#birthDay = birthDay,
        this.monthlySalary = monthlySalary,
        this.noOfMonth = noOfMonth
    }
    calculate_age(){
        const diff_ms = (Date.now() - new Date(this.#birthDay).getTime());
        const age_dt = (new Date(diff_ms));
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    get_Salary(){
        const totalSalary = (this.monthlySalary * this.noOfMonth)
        return totalSalary
    }

}

const Sakib  = new Players('sakib', "1987-03-04", 200000,6) 
console.log(Sakib.calculate_age());
// console.log(Sakib.birthDay);