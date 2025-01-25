- `Decision Tree` - Basic building block for modeling in data science
- `Training` - Also called `fitting`, a way of capturing patterns from data. A way of splitting up data into paths.
- `Training data` - The data used to `fit` a model. After a model has been fit, you can use the data to `predict`
- `Leaf` - The point in a decision tree where we make a prediction

### Prediction Target

- A single column is stored in a `series`, which is like a DataFrame with a single column of data
- We can use dot notation to select the column we want to predict, which is the prediction target

```python
y = melbourne_data.Price
```

- The columns inputted into the model, and used to make predictions, are called 'features'.
  - In this case it would be the columns used to determine the home price. You can use any column, except for the target, as a feature (although not all will be predictive and not needed in the model).

```python
melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']
```

Where I stopped: https://www.kaggle.com/code/dansbecker/model-validation
