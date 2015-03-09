'use strict';

var xtra_utils = {
    /*sort sorts an array. it can sort an array of objects with a reference.*/
    sort: function(order, sorter) {
        /*. order = 1 for ascending or order = 0 for descending*/
        switch (order){
            case 0 :
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
    }
};



/*-------------------------------Test Codes----------------------------------------------*/
if(require.main === module) {
    var arr = [{ count: 1}, {count: 5}, {count: 3}];
    var arr1 = [1,2,5,3];
    arr.sort(xtra_utils.sort(1, 'count'));
    console.log(arr);

}