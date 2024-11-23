# Schema  and model Options
Data types
----------

The different data types a schema can hold. 

*   string
*   number
*   date
*   schema: have another document structure as a type
*   \[dataType\]: array of that type
*   Javascript objects

Example

```text-plain
const userSchema = new mongooose.Schema({
	name: String,
	age: Number,
	createdAt: Date,
	bestFriend: mongoose.SchemaTypes.ObjectId,
	hobbies: [string],
	address:{
		street: String,
		city: String
	},
	customDocSchema: varToDocSchema,
});
```

Data Validation
---------------

You can set data validation within the model itself. Validation like: 

*   required
*   immutability
*   min and max
*   and even custom validation 

```text-plain
const doc = new mongoose.Schema({
	age: {
		type: Number, 
		min: 1,
		max: 100,
		immutable: true,
		required: true
		validate: { // custom validation logic
			validator: (value)=>{value % 2 === 0},
			message: (props) => {props.value} is not even
		}
	}
});
```