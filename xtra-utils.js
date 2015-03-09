'use strict';

var xtra_utils = {
    /*compare sorts an array. it can sort an array of objects with a reference.*/
    compare: function(order, sorter) {
        /*. order = 1 for ascending or order = 0 for descending*/
        switch (order){
            case 0 :
                /*returns a compare function that tells sort function to sort in descending order*/
                return function (a, b) {
                    a = a[sorter] ? a[sorter] : a;
                    b = b[sorter] ? b[sorter] : b;
                    if (a > b)
                        return -1;
                    if (a < b)
                        return 1;
                    return 0;
                };

            case 1 :
                /*returns a compare function that tells sort function to sort in ascending order*/
                return function (a, b) {
                    a = a[sorter] ? a[sorter] : a;
                    b = b[sorter] ? b[sorter] : b;
                    if (a < b)
                        return -1;
                    if (a > b)
                        return 1;
                    return 0;
                };
                
            default :
                return function (a, b) {
                    /*returns a compare function that tells sort function to sort in ascending order*/
                    a = a[sorter] ? a[sorter] : a;
                    b = b[sorter] ? b[sorter] : b;
                    if (a < b)
                        return -1;
                    if (a > b)
                        return 1;
                    return 0;
                };
        }
    },

    isValidEmail: function(email) {
        /*uses RFC2822 regex pattern for email validation*/
        var pattern = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        return pattern.test(email);
    },

    getUniqueElements: function(array) {
        var uniqueElm = {};
        array.forEach(function(entry) {
            uniqueElm[entry] = 1;
        });

        return Object.keys(uniqueElm);
    },

    countUnique: function(array) {
        var uniqueElm = {}, count = 0;
        array.forEach(function(entry) {
                uniqueElm[entry] = ++uniqueElm[entry] || 1;
        });
        return uniqueElm;
    }
};

module.exports = xtra_utils;


/*-------------------------------Test Codes----------------------------------------------*/
if(require.main === module) {
    var arr = [{ count: 1}, {count: 5}, {count: 3}];
    var arr1 = [1,2,5,3,2];
    arr.sort(xtra_utils.compare(1, 'count'));
    console.log(arr);
    console.log(xtra_utils.getUniqueElements(arr1));
    console.log(xtra_utils.countUnique(arr1));
}