# Expfactory.js

This is a helper JavaScript module for storing and submitting data to an experiment
factory ready container. You can use it in your experiments if needed. To decide if
this is the case, start by reading the [criteria for an experiment here](https://expfactory.github.io/expfactory/contribute#contribute-an-experiment). Generally, you need to:

 - submit data to `/save` in jsonified format `{"data": data}`
 - then navigate to `/next`
 - use ajax to submit so that the ajaxSetup embedded by the container can grab the csrf_token

If you don't want to use the ajaxSetup / ajax, you are also free to add a header to your
template that includes `{{ csrf_token }}`. This isn't optimal because it will only render
into the token given use in the Experiment Factory container, but if your template is
intended for export here, it should be ok :)

## Dependencies
This small module requires JQuery to be able to use ajax.

## Example Usage
You would want to create an instance of `Expfactory`

```javascript
exp = new Expfactory();
```

### Add Data
To add a data point to it (between trials, for example)

```javascript
data = {"value": 1};
exp.addData(data);
```

### Save Data
To save data to the server, which should be done before going to the next experiment:

```javascript
exp.save();
```

### Proceed to Next
This should be called after you have saved.

```javascript
exp.next();
```
### Full Example

Thus, a full example might look like this:

```javascript
exp = new Expfactory();

data = {"value": 1};
exp.addData(data);
exp.save();
exp.next();
```

## Functions

In order for your (static experiment) to also be able to run locally, you can define
the `localSave` function, which is called if the post to the expected Experiment Factory Container
endpoint (`/next`) does not work. That might look like this:

```javascript
exp = new Expfactory();
exp.localSave = function(data) {
  jsPsych.data.localSave('spatial-span_results.csv', 'csv');
}
```
