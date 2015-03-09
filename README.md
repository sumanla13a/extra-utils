# extra-utils
This module has some of the simple but recurring tasks in javascript project. This is intended to make such tasks reliable and easier


Document:

xtra_utils.sort: This function is intended to help on sorting an array. It can sort a normal array as well as an array of objects with a reference key of the object.

It has two parameters. 
i.e.   xtra_utils.sort(order, sorter);
order: is in boolean,
       1 for ascending order sorting and
       0 for descending order sorting.

sorter: is only required for an array of objects. 
        It is the key that you want to reference in order to sort the array.

eg: 
var arr = [{ count: 1}, {count: 5}, {count: 3}];
var arr1 = [1,2,5,3];
arr.sort(xtra_utils.sort(1, 'count'));
arr1.sort(xtra_utils.sort(0);


isValidEmail: This is a function intended to validate the email in practical implementation of RFC2822 standard. Will return true for valid email and false for invalid email
