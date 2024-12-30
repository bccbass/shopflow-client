const dateStamp = new Date(Date.now()).toLocaleDateString('en-AU').split('T')[0]


const addDays = (days, date = Date.now()) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toISOString().split('T')[0];
}

const calculateNextContact = (lead) =>{
    if (lead.bookedTrial) {
        return addDays(2);
    }
    else if (lead.followUp.length <= 1) {
        return addDays(2);
    }
    else if (lead.followUp.length == 1) {
        return addDays(3);
    }
    else if (lead.followUp.length == 2) {
        return addDays(4);
    }
    else if (lead.followUp.length == 3) {
        return addDays(7);
    }
    else return ''

}

export { addDays, calculateNextContact, dateStamp }