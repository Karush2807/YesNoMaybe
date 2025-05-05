# Speed Dating Match Prediction

## Project Overview
This project analyzes data from an experimental speed dating event to build a logistic regression model that predicts whether participants would want to have a second date based on various factors. The model examines how attributes like attractiveness, fun, intelligence, and demographic information influence dating outcomes.

## Dataset Description
The dataset contains information from participants in an experimental speed dating event, including:
- Ratings of dates on six key attributes (attractiveness, fun, intelligence, etc.)
- Participant demographic information
- Dating habits and preferences
- Match outcomes (whether participants wanted a second date)

## Project Objectives
1. Explore and understand factors influencing dating decisions
2. Develop a logistic regression model to predict match outcomes
3. Identify key predictors of successful matches
4. Evaluate model performance with appropriate metrics

## Methodology
1. **Data Preparation and Exploration**
   - Clean and preprocess the dataset
   - Handle missing values
   - Explore relationships between variables
   - Generate descriptive statistics

2. **Feature Engineering**
   - Transform relevant variables
   - Create interaction terms if needed
   - Select significant predictors

3. **Model Development**
   - Split data into training and testing sets
   - Implement logistic regression
   - Optimize model parameters
   - Evaluate performance (accuracy, precision, recall, ROC-AUC)

4. **Results Analysis**
   - Interpret model coefficients
   - Identify significant factors in dating decisions
   - Assess model strengths and limitations


## Model Details
- **Type**: Supervised Learning
- **Category**: Classification (Binary)
- **Algorithm**: Logistic Regression
- **Target Variable**: Second date decision (Yes/No)

## Requirements
- Python 3.10
- Libraries: pandas, numpy, scikit-learn, matplotlib, seaborn