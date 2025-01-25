import pandas as pd
from sklearn.tree import DecisionTreeRegressor #Creates models

# save filepath to variable for easier access
melbourne_file_path = './melb_data.csv'
# read the data and store data in DataFrame titled melbourne_data
melbourne_data = pd.read_csv(melbourne_file_path) 
# print a summary of the data in Melbourne data
melbourne_data.describe()

#  see list of all columns in the data set
#print(melbourne_data.columns)

#dropna drops missing values (na aka 'not available')
melbourne_data = melbourne_data.dropna(axis=0)

y = melbourne_data.Price

melbourne_features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']

X = melbourne_data[melbourne_features]

#print(X.describe())

# shows top few rows
#print(X.head())

#scikit-learn library helps us create models
# Define - What type of model is it? Decision tree? Paramaters of the model type as well
# Fit - Capture patterns from provided data. The heart of modeling
# Predict 
# Evaluate - Determine how accurate model's predictions are

# setting the random state ensures same results each run
melbourne_model = DecisionTreeRegressor(random_state=1)

#Fit model
melbourne_model.fit(X, y)

print("Making predictions for the following 5 houses:")
print(X.head())
print("The predictions are")
print(melbourne_model.predict(X.head()))