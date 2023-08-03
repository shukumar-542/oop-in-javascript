class Student{
    constructor(subjects, tuitionFees){
        this._subjects = subjects;
        this._tuitionFees = tuitionFees;
    }
    get subjects(){
        return this._subjects
    }
    get tuitionFees(){
        return this.tuitionFees
    }
}

module.exports = Student;