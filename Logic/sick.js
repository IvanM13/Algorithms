function foo(sick) {
    if (sick) {
        let tabl = Math.floor(Math.random() * 10);
        console.log(tabl);
        if (tabl >= 5) {
            return 'Помоглa таблетка';
        }else{
            let doctor = Math.floor(Math.random() * 10);
            console.log(doctor);
            if (doctor >= 5) {
                return 'Помог доктор';
            } else{
                return 'Лег в больницу';
            }
        }
    }
    return 'Молодец Здоров!'
}

let sick = (Math.floor(Math.random() * 10) >= 5) ? true : false;
console.log(foo(sick));