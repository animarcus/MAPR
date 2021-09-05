let mylist = [];

for (i=0; i<6; i++) {
    mylist.push({
                    "num": Math.round(Math.random()*10+1)
                });
}

logSorted(mylist);

mylist.sort(compare);

logSorted(mylist);



function compare(v1, v2) {
    if (v1.num < v2.num) {  // leave v1, v2 in the same order (return <= 0)
        return -1
    } else {
        return 1    // sort v2 before v1
    }
    // return 0
}


function logSorted(lst) {
    let tmp = [];
    lst.forEach(i => {
        tmp.push(i.num)
    });
    console.log(tmp)
}
