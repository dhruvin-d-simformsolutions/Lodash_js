import * as _ from "lodash";

// console.log(_.VERSION); //-->4.17.21

//First and Last array element
const words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];
const lel = _.last(words);
const fel = _.first(words);
// console.log(`First element: ${fel}`); //-->sky
// console.log(`Last element: ${lel}`); //-->universe


//nth element
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(_.nth(nums, 3)); //-->4
// console.log(_.nth(nums, -3)); //->6


//chunking array
const c1 = _.chunk(nums, 2);
// console.log(c1);// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
const c2 = _.chunk(nums, 3);
// console.log(c2);//[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]


//array slice
const c3 = _.slice(nums, 2, 6)
// console.log(c3);//[3,4,5,6]
const c4 = _.slice(nums, 0, 8)
// console.log(c4);//[1,2,3,4,5,6,7,8]


//random Number
// console.log(_.random(5,10)); //Random number between 5 to 10 


//Random array element
const c5 = _.sample(words)
// console.log(c5); //Random element from words array


//shuffling array element
const c6 = _.shuffle(words)
// console.log(c6);//['ocean',  'universe','pear',   'falcon','wood',   'sky','forest']


// // _.times function
// _.times(5, () => {
//     console.log("Dhruvin");
// })


// //_.delay function
// function message()
// {
//     console.log("Some message");
// }
// _.delay(message, 150);
// console.log("Some other message");
// //-->Some other message
// //-->Some message


//_.range(startpoint,endpoint,increment(optional)) function
const c7 = _.range(12, 19, 2)
// console.log(c7);//-->[12,14,16,18]


//_.min,_.max,_.minby(array,'array property'),_.maxby(array,'array property')
const obs = [{ n: 12 }, { n: -4 }, { n: 4 }, { n: -11 }];
// console.log(_.minBy(obs,'n')); //-->{n:-11}
// console.log(_.maxBy(obs,'n')); //-->{n:12}


// //_.curry function
// function multiply(a : number, b : number, c : number) {
//     return a * b * c;
// }
// const curried = _.curry(multiply);
// const ret = curried(2)(3)(4);
// console.log(ret); //-->24


//_.filter function
const nums1 = [4, -5, 3, 2, -1, 7, -6, 8, 9];

const pos_nums = _.filter(nums1, (e) => e > 0);
// console.log(pos_nums); //-->[ 4, 3, 2, 7, 8, 9 ]


//Collection find
const users = [
    { name: 'John', age: 25 },
    { name: 'Lenny', age: 51 },
    { name: 'Andrew', age: 43 },
    { name: 'Peter', age: 81 },
    { name: 'Anna', age: 43 },
    { name: 'Albert', age: 76 },
    { name: 'Adam', age: 47 },
    { name: 'Robert', age: 72 }
];

const u1 = _.find(users, { name: 'Adam' });
// console.log(u1); //-->{ name: 'Adam', age: 47 }

const u2 = _.find(users, (u) => { return u.age > 60 });
// console.log(u2); //-->{ name: 'Peter', age: 81 }

const u3 = _.findLast(users, (u) => { return u.age > 60 });
// console.log(u3); //-->{ name: 'Robert', age: 72 }


//collection pull
const nums20 = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(nums20, 1, 2);
// console.log(nums20);//-->[ 3, 4, 5, 7, 8 ]


//collection take
// const nums0 = [1, 2, 3, 4, 5, 6]

// const nums2 = _.take(nums0);
// const nums3 = _.take(nums0, 2);
// const nums4 = _.takeRight(nums0, 3)

// console.log(nums2); //-->[2]
// console.log(nums3); //-->[1,2]
// console.log(nums4); //-->[4,5,6]


//collection partition
const nums10 = [4, -5, 3, 2, -1, 7, -6, 8, 9];
const [nums2, nums3] = _.partition(nums10, (e) => e < 0);

// console.log(nums2); //-->[ -5, -1, -6 ]
// console.log(nums3); //-->[ 4, 3, 2, 7, 8, 9 ]


//string case
console.log(_.map(words, _.camelCase));
console.log(_.map(words, _.capitalize));
console.log(_.map(words, _.kebabCase));
console.log(_.map(words, _.lowerCase));
console.log(_.map(words, _.upperCase));


// _.startsWith(),_.endsWith()
words.forEach(e => {
    if (_.startsWith(e,'s')){
        // console.log(e); //-->sky
    }
    if(_.endsWith(e,'n')){
        // console.log(e); //-->dalcon,ocean
    }
})


//Object properties
const p = {age: 24, name: "Rebecca", occupation: "teacher"};
_.forIn(p, (value, key) => {
    console.log(`${key}: ${value}`);
})