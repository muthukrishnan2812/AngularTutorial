import { Component } from '@angular/core';
import _, { add, drop, dropRight, isEqual, split, zip, bind, over } from 'lodash';
@Component({
  selector: 'app-lodash',
  templateUrl: './lodash.component.html',
  styleUrl: './lodash.component.scss'
})
export class LodashComponent {
  mylist: any[] = ['water', 'chicken', 'banana', 'banana', 'cake', 'water', '']
  newlist: any = _.difference(this.mylist, ['chicken', 'cake'])
  anotherlist: any = _.join(this.mylist, '|')
  withoutlist: any = _.without(this.mylist, 'cake')
  uniqlist: any = _.uniq(this.mylist)
  chunklist: any = _.chunk(this.mylist, 3);
  compactlist: any = _.compact(this.mylist);
  concatarray: any = _.concat(this.mylist, ['watermelon', 'grapes'])
  differenceby: any = _.differenceBy([1, 2, 3], [2, 4, 6], Math.floor);
  differencewith: any = _.differenceWith(this.mylist, ['water', 'chicken'], _.isEqual);
  drop: any = _.drop(this.mylist, 1);
  users: any[] = [{ 'user': 'muthu', 'active': true, 'age': 20 }, { 'user': 'krishnan', 'active': false, 'age': 25 }, { 'user': 'bala', 'active': true, 'age': 22 }, { 'user': 'stephen', 'active': false, 'age': 32 }]
  newarray: any = [1, 2, 3, 4]
  newobject:any={'x':5,'y':10}
  onearray: any[] = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
  others: any = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }, { 'x': 1, 'y': 2 }]
  arrayforpull: any = [{ 'x': 1, 'y': 1 }, { 'x': 2, 'y': 2 }, { 'x': 3, 'y': 3 }]
  slicearray: any = [10, 20, 30, 40, 50, 60, 70, 80, 90]
  zipped: any = _.zip(['a', 'b'], [1, 2], [true, false]);
  without: any = [1, 2, 2, 4]
  bindUser = {
    name: 'muthu',
    greeting: function (greeting: any) {
      console.log(greeting + ',' + this.name);
    }
  }
  constructor() {
    //show mylist of array
    console.log(this.mylist);

    //difference in loadashpackage 
    console.log(this.newlist);

    //joins of mylist array using |
    console.log('joins->', this.anotherlist);

    //withoutlist using to show without cake in the mylist array 
    console.log('without specific list  from array ->', this.withoutlist);

    //uniq using for remove duplicates
    console.log('uniqlist->remove duplicates', this.uniqlist);

    //chunklist for original array as splited into mulitply array
    console.log('chunklist->', this.chunklist);

    //compactlist using to remove false,null, 0 values 
    console.log('compactlist->remove false, null, o values', this.compactlist);

    //concat using in lodash for merging original array with specific array values
    console.log('concat array-> merging array and add new values', this.concatarray);

    //check the original array before merging concat of array
    console.log('concat not affect the mylist of original array->', this.mylist);

    //difference of two array
    console.log('difference of two array', _.difference([2, 5, 8], [2, 6, 3]));

    //difference by using lodash for same values of two array are removed showing difference values
    console.log('difference by->', this.differenceby);

    //difference with comparing two array difference values are removed
    console.log('difference with loadash for compare mylist and newarray is show equal values ->', this.differencewith);

    //Creates a slice of array with n elements dropped from the beginning.
    console.log('drop of lodash->', this.drop);

    //rightdrop
    console.log('rightdrop->', _.dropRight(this.mylist, 2));

    //dropwhile when active is true from left side of object 0
    console.log('dropwhile->', _.dropWhile(this.users, { 'active': true }));

    //droprightwhile when active is false from right side of object 0
    console.log('droprightwhile', _.dropRightWhile(this.users, { 'active': false }));

    //fill in lodash
    console.log('fill new array number to string ->', _.fill(this.newarray, 'a'));
    //check original array
    console.log('original array', this.newarray);

    console.log(_.fill(this.newarray, 'b', 2, 3));
    //fill the value for specific positon of array
    console.log(_.fill(this.newarray, '*', 1, 4));

    //findindex of array
    console.log('find index of array', _.findIndex(this.users, { active: false }));

    //findlastindex of array display number of values in a array 
    console.log('findlastindec of array', this.users);

    //sort of find lastindex of array
    console.log('findlastindex of array->', _.findLastIndex(this.users, 'active'));

    //flatten in array
    console.log('flatten in array', _.flatten([1, 2, 3, [4, [5]]]));

    //flattendeep in array
    console.log('flatten deep in array->', _.flattenDeep([1, 2, 3, [4, [5]]]));

    //flatten depth
    console.log('flatten depth in array', _.flattenDepth([1, 2, 3, [4, [5]]], 3));

    //formpairs are return a object
    console.log('formpairs form a array return object ->', _.fromPairs([[4, 5], [1, 1]]));

    //head
    console.log(this.newarray);
    console.log('head in lodask->', _.head(this.newarray));

    //index of 
    console.log('index of ->', _.indexOf([1, 4, 3, 2], 3, 2));

    //intersection unique value from all arrays
    console.log('intersection', _.intersection([1, 2], [2, 4, 3], [3, 2]));

    //intersection by
    console.log('intersectionby', _.intersectionBy([1.2, 2.6], [2.8, 3.6], Math.floor));

    //intersection within
    console.log('intersection within ->', _.intersectionWith(this.onearray, this.others, _.isEqual));

    //last in lodash
    console.log('last in lodash', _.last([5, 10, 15, 20]));

    //last index of 
    console.log('last index of ->', _.lastIndexOf([5, 10, 15, 20], 20, 3));

    //nth array of 
    console.log('nth for called where index value its returns value of array', _.nth([5, 10, 20, 40], 2));

    //pull remove same value from the array
    console.log('pull remove some value', _.pull([10, 20, 30, 40, 10], 10));

    //pullall 
    console.log('pull all remove same value', _.pullAll([1, 2, 3, 4, 2], [2]));

    //pullallwith
    console.log('pull all by', _.pullAllBy(this.others, [{ 'x': 1 }], 'x'));

    //pull all with
    console.log('pull all with', _.pullAllWith(this.arrayforpull, [{ 'x': 2, 'y': 2 }], _.isEqual));[10, 20, 30, 40, 50, 60, 70, 80, 90]

    //pull at Returns the new array of removed elements.
    console.log('pull at', _.pullAt(this.mylist, [1, 3]));
    console.log(this.mylist);

    //remove from array using function for separte even number from given array
    console.log('remove from array', _.remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function (n: any) { return n % 2 == 0 }));

    //reverse
    console.log('reverse array', _.reverse(this.mylist));

    //slice
    console.log('slice from lodash', _.slice(this.slicearray, 3));
    console.log(this.slicearray);

    //sort index
    console.log('sort index of array', _.sortedIndex(this.slicearray, 15));
    console.log(this.slicearray);

    //sort index by
    console.log('sort index by', _.sortedIndexBy(this.others, { 'x': 2 }, 'x'));

    //sortindexof
    console.log('sort index of ', _.sortedIndexOf([1, 3, 2, 5, 6, 5], 5));

    //sortlastindex
    console.log('sort last index of', _.sortedLastIndex([1, 3, 2, 5, 6, 5], 5));

    //tail removes the first element
    console.log('tail removes first element', _.tail([1, 2, 3, 4]));

    //take from ladash
    console.log('take slice of the first element', _.takeRight([1, 2, 3, 4]));

    //union of lodash
    console.log('union of merging 2 array same value print at 1 time ', _.union([2], [2, 4], [2, 4, 8]));

    //union with
    console.log('', _.unionWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }], _.isEqual));

    //union by
    console.log('union by->', _.unionBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 2 }], 'x'));

    //zip and unzip
    console.log('zip', this.zipped);//group of one array
    //unzip
    console.log('unzip', _.unzip(this.zipped));//separte array
    //unzipwith
    console.log('unzipwith', _.unzipWith(this.zipped, _.add));

    //without
    console.log('without in lodash', _.without(this.without, 1, 2));

    /* loadash-collections */

    //countby
    console.log('countby', _.countBy([10, 20, 30, 30, 10]));
    console.log('letter counter', _.countBy(['one', 'two', 'three', 'four'], 'length'));

    //groupby
    console.log('groupby', _.groupBy([10, 20, 30, 40, 50, 10]));


    //filter 
    console.log('filter in users ', _.filter(this.users, function (o) { return !o.active }))

    //find
    console.log('find the users', _.find(this.users, function (o) { return o.age >= 25 }));

    //flatMap
    console.log('flatmap using function for duplicate array values', _.flatMap([1, 2], this.duplicate));

    //foreach
    console.log('foreach in collection', _.forEach([{ 'a': 1, 'b': 5 }], function (n, m) { return n }));

    //includes answer getting in boolean
    console.log('includes -> chech the value in the collection->', _.includes([1, 2, 3, 4, 5], 1));

    //key up
    console.log('keyup', _.keyBy(this.users, 'user'));

    //map
    console.log('map', _.map([10, 20], this.square));

    //orderby sort the array from ascending and desending order
    console.log('orderby', _.orderBy(this.users, ['user'], ['desc']));

    //partition return group of two elements one is true another one is false
    console.log('partition->', _.partition(this.users, function (n) { return n.active }));
    console.log('partitin', _.partition(this.users, ['active', false]));

    //reduce sum of all the values
    console.log('reduce ->', _.reduce([10, 20, 30, 40, 50], function (n, sum) { return n + sum }));

    //reduceright
    console.log('reduce right', _.reduceRight([[1, 2, 3], [4, 5, 6]], function (m: any, n: any) { return m + n }));

    //reject {opposite of filter in collection}
    console.log('reject', _.reject(this.users, { 'active': false }));//reject display the opposite of filter data if data is true using inthis reject get false

    //sample random pick the value from the array
    console.log('random', _.sample([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));

    //shuffle
    console.log('shuffle arrray', _.shuffle(this.slicearray));

    //size of array
    console.log('size of arr', _.size(this.slicearray));

    //some of array
    console.log('some', _.some(this.slicearray, function (m) { return m > 100 }));

    //sort by user
    console.log('sortby', _.sortBy(this.users, ['user']));

    //date
    _.defer(function (time) { console.log(_.now() - time) }, _.now())


    /* functions in lodash*/
    const after = _.after(3, () => {
      console.log('all tasks completed');
    })
    setTimeout(() => {
      after()
    }, 1000);
    setTimeout(() => {
      after()
    }, 2000);
    setTimeout(() => {
      after()
    }, 3000);

    //ary()


    //before
    const greetTwice = _.before(3, this.greet);
    greetTwice()
    greetTwice()
    greetTwice()

    //bind
    const helloUser = _.bind(this.greetforbind, this);
    helloUser('good morning', '!')

    //bindkey
    const bindkey = _.bindKey(this.bindUser, 'greeting', 'good afternonn')
    bindkey()

    //curry
    var abc = function (a: any, b: any, c: any) {
      console.log('curried->', [a, b, c]);
    }
    var curried = _.curry(abc)
    curried(3)(1)(2)

    var curriedRight = _.curryRight(abc)
    curriedRight(3)(1)(2)

    //debounce
    const debounceupdate = _.debounce(this.debounce, 300)
    debounceupdate('h')
    debounceupdate('hi')
    debounceupdate('hello')

    //defer
    console.log('defer', _.defer(this.deferLog, 'have a nice day'));
    //delay
    console.log('delay', _.delay(this.deferLog, 1000, 'time delay for 1000 milliseconds'));

    //flipped
    const flipped: any = _.flip(function () { console.log(_.toArray(arguments)) });
    flipped(22, 3, 44, 99)

    //memorize
    const memoized = _.memoize(add, (a, b) => `${a}-${b}`);
    console.log('memoize', memoized(5, 10));  // First call, calculates and caches
    console.log('memoize', memoized(5, 2));  // Second call, recalculates

    //negate
    console.log('negate', _.filter([9, 5, 7, 8, 6, 2, 1, 3, 4], _.negate(this.even)));

    //once
    const onceLodash = _.once(this.initialize)
    console.log(onceLodash());
    console.log(onceLodash());
    console.log(onceLodash());

    //overargs
    const overargs = _.overArgs(function (x, y) { return [x, y] }, [this.square, this.double])
    console.log('firstvalue is square and second value is double', overargs(4, 4));

    //partial
    const partial = _.partial(this.welcome, 'hello');
    partial('prem')

    //parital right
    const partialright = _.partialRight(this.welcome, 'hello')
    partialright('kumar')

    //re arg  text rearrange function
    var rearged = _.rearg(function (a, b, c, d, e) {
      return [a, b, c, d, e];
    }, [4, 0, 1, 3, 2]);
    console.log(rearged('m', 'u', 't', 'h', 'u'));

    //rest
    const rest = _.rest(function sum() { return _.sum(arguments) }, 2)
    console.log(rest(1, 2, 3, 4));

    //spread create function and bind data from that function
    var say = _.spread(function (x, y) {
      return x + ' ' + 'says' + ' ' + y
    })
    console.log(say(['x', 'hello']));

    //
    const throttledResizeHandler = _.throttle(this.resizeHandler, 100);
    window.addEventListener('resize', throttledResizeHandler);

    /*lang*/
    //conforms
    const checker = _.conforms({
      'x':function(n:any){ return n>1},
      'y':function(m:any){return m>1}
    })
    console.log('conforms ->',checker(this.newobject));
    
    console.log('eq',_.eq(this.newobject,this.newarray));
    
    //gt
    console.log('gt',_.gt(6,2));

    //gte its works for greater than and equal values
    console.log('gte',_.gte(3,3));
    
    
  }
  duplicate(n: any) {
    return [n, n]
  }
  square(n: any) {
    return n * n
  }
  double(n: any) {
    return n * 2
  }
  greet() {
    console.log('hello lodash');
  }
  greetforbind(greeting: any, punctuations: any) {
    console.log(greeting + ',' + this.bindUser.name + punctuations);
  }
  debounce(query: any) {
    console.log('queryupdate ${query}', query);
  }
  deferLog(msg: any) {
    console.log(msg);
  }
  add(a: number, b: number): number {
    return a + b
  }
  even(n: number) {
    return n % 2 !== 0
  }
  initialize() {
    console.log("Initialization performed.");
    return "Initialization Result";
  }
  welcome(greeting: any, name: any) {
    console.log(greeting + ' ' + name);
  }
  resizeHandler() {
    console.log('Window resized to', window.innerWidth, 'x', window.innerHeight);
  }


}
