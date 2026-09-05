from fastapi import FastAPI, HTTPException, Path
import json
from fastapi.responses import JSONResponse
from pydantic import BaseModel, Field, EmailStr, computed_field, model_validator
from typing import Annotated, Literal
import pickle
import pandas as pd

#import the ml model
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

app = FastAPI()

# pydantic model to validate the input data
class userinput(BaseModel):
    name: Annotated[str, Field(..., description="The name of the patient", example="John Doe")] # ... defirnes that this field is required
    age: Annotated[int, Field(..., gt=0, lt=120, description="The age of the patient", example=30)]
    email: Annotated[EmailStr, Field(..., description="The email of the patient", example="john.doe@example.com")]
    contact_details: Annotated[dict, Field(..., description="The contact details of the patient", example={"phone": "123-456-7890", "address": "123 Main St"})]
    weight: Annotated[float, Field(..., gt=0, description="The weight of the patient", example=70.5)]
    height: Annotated[float, Field(..., gt=0, description="The height of the patient", example=1.75)]


    @computed_field
    @property
    def bmi(self) -> float:
        bmi = self.weight / (self.height ** 2)
        return bmi

    @computed_field
    @property
    def bmi_category(self) -> Literal["Underweight", "Normal weight", "Overweight", "Obesity"]:
        bmi = self.bmi
        if bmi < 18.5:
            return "Underweight"    
        elif bmi < 24.9:
            return "Normal weight"
        elif bmi < 29.9:
            return "Overweight"
        else:
            return "Obesity"
        

    @computed_field
    @property
    def age_group(self) -> Literal["Child", "Teenager", "Adult", "Senior"]:
        age = self.age
        if age < 13:
            return "Child"
        elif age < 20:
            return "Teenager"
        elif age < 60:
            return "Adult"
        else:
            return "Senior"
        

@app.post("/predict")
def predict_premium(user_input: userinput):

    input_df = pd.DataFrame([{
        
        "age": user_input.age,
        "bmi": user_input.bmi,
        "bmi_category": user_input.bmi_category,
        "age_group": user_input.age_group
    }])
    predictions = model.predict(input_df)

    return JSONResponse(status_code=200, content={"predicted_premium": predictions})
