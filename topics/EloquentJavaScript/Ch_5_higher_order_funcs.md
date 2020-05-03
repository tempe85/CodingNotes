<small>[Return Home](../../README.md)</small> | <small>[Return to Eloquent JS](index.md)</small>

|Keyword | Definition|
|-------|------------|
|`Abstraction` | Hide details and give us the ability to talk about problems at a higher (more abstract) level. 
|`Higher  Order Functions` | Functions that operate on other functions, either by taking them in as arguments or returning them
|`Serialize`| Convert into a flat description

* Size almost always involves complexity, and complexity confuses programmers.

### Abstraction

>Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.


vs.

>Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.
>
>Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes

The second recipe is shorter but requires us to understand how to perform abstract concepts (`soak`, `simmer`, `chop`) which the first recipe describes in detail. We have abstracted away these concepts to make the recipe more concise and easier to read. 

### Higher-order functions
* Allow us to abstract over actions, not just values. 

* Map transforms an array (projects it into something else)
  * `arr.map(l => l.name)`
* Reduce summarizes a collection
  * Builds a value by repeatedly taking a single element form the array and combining it with the current value. 
  * reduce(array, combine, start)
  * `console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));` //Returns 10
  
### Composability
