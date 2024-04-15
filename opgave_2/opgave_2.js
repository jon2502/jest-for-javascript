class Person  {
    first_name;
    last_name;
    date_Of_Birth;
    eye_color
    constructor(fname,lname,dob,ec) {
        this.first_name=fname
        this.last_name=lname
        this.date_Of_Birth=dob
        this.eye_color=ec
    }
    getfname(){
        return this.first_name
    }
    getlname(){
        return this.last_name
    }
    getdob(){
        return this.date_Of_Birth
    }
    getec(){
        return this.eye_color
    }

    setdob(newdob){
        const re = /(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/
        if (re.test(newdob)){
            var yeardiff = 2022-re.exec(newdob)[3]
            if(yeardiff>120){
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    setfname(newfname){
        const re2 = /^[a-zA-Z-]+$/
        if(newfname.match(re2)){
            return true
        } else {
            return false
        }
    }
    setlname(newlname){
        const re2 = /^[a-zA-Z-]+$/
        if(newlname.match(re2)){
            return true
        } else {
            return false
        }
    }
}
module.exports = Person;