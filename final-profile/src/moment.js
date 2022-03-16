var moment = require('moment'); // require
moment().format();

export function DateOfBirth(dob) {
    var birthday = moment(dob);
    let datestring = birthday.format("D MMM YYYY");
    return datestring;
}

/*console.log(DateOfBirth(moment()));*/