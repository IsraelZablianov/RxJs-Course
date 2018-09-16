import { fromEvent, from, of } from "rxjs";
import { map, mergeMap, filter } from 'rxjs/operators';
/**
 * There are many operators and every operator is important.
 * I will list the most popular and important to remember as they come frequently in use and samples
 * the sampels are taken from learn-rxjs - https://www.learnrxjs.io
 */






/**
 * fromEvent -> creates an observable of event, will be emitted after 'israel button' will be pressed 
 */
const fromEventSource = fromEvent(document.getElementById("israel"), "click");
fromEventSource.subscribe((event: Event) => {
    console.log(event)
})



/**
 * of -> Emit variable amount of values in a sequence.
 * Emits any number of provided values in sequence
 */
const source = of(1, 2, 3, 4, 5);
source.subscribe(val => console.log(val));
//output: 1,2,3,4,5

const sourceWithDiffTypes = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
});
sourceWithDiffTypes.subscribe(val => console.log(val));
//output: {name: 'Brian}, [1,2,3], function hello() { return 'Hello' }



/**
 * from -> Turn an array, promise, or iterable into an observable.
 */
const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe(val => console.log(val));
//output: 1,2,3,4,5



/**
 * map -> Apply projection with each value from source.
 */
const sourceMap = from([1, 2, 3, 4, 5]);
const exampleMap = sourceMap.pipe(map(val => val + 10));
exampleMap.subscribe(val => console.log(val));
//output: 11,12,13,14,15



/**
 * mergeMap -> Map to observable, emit values.
 * flatMap is an alias for mergeMap.
 * map to inner observable and flatten.
 */
const mergeSource = of('Hello');
const mergeExample = mergeSource.pipe(mergeMap(val => of(`${val} World!`)));
mergeExample.subscribe(val => console.log(val));
//output: 'Hello World!'



/**
 * filter -> Emit values that pass the provided condition.
 */
const sourceFilter = from([
    {
        name: 'Joe',
        age: 31
    },
    {
        name: 'Bob',
        age: 25
    }
]);
const exampleFilter = sourceFilter.pipe(filter(person => person.age >= 30));
exampleFilter.subscribe(person => console.log(`Over 30: ${person.name}`));
//output: "Over 30: Joe"