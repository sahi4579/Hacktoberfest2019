# -*- coding: utf-8 -*-
"""
Created on Thu Aug 29 13:42:35 2019

@author: CSED
"""

#import matplotlib.pyplot as plt
#import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split


dataset = pd.read_csv('C:/Users/g s khagta/Desktop/50_Startups.csv')
X = dataset.iloc[:,:-1].values
Y = dataset.iloc[:,-1].values

from sklearn.preprocessing import LabelEncoder, OneHotEncoder
labelencoder = LabelEncoder()
X[:, -1] = labelencoder.fit_transform(X[:,-1])

onehotencoder =  OneHotEncoder(categorical_features = [-1])
X = onehotencoder.fit_transform(X).toarray()

[X_train, X_test, Y_train, Y_test] = train_test_split(X, Y, test_size = 1/3, random_state = 0)


from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, Y_train)
Y_predict = regressor.predict(X_test)
print('Model Score:' + str(regressor.score(X_test, Y_test)) )

#import numpy as np
#X_train = np.append (arr=np.ones([X_train.shape[0],1]).astype(int), values = X_train, axis = 1)

# Backward Elimination Model
import statsmodels.api as sm




X_opt = [0,1,2,3,4,5]
regressor = sm.OLS(Y_train, X_train[:,X_opt]).fit()
print(regressor.summary())




X_opt = [0,1,2,3]
regressor_OLS = sm.OLS(Y_train, X_train[:,X_opt]).fit()
print(regressor_OLS.summary())




X_train, X_test, Y_train, Y_test = train_test_split(X[:,X_opt], Y, test_size = 1/3, random_state = 0)

from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train,Y_train)

print('Model score: '+str(model.score(X_test,Y_test)))