from fastapi import FastAPI, HTTPException, Path, Query
from pydantic import BaseModel, Field, EmailStr, computed_field, model_validator
import json
from typing import Annotated

app = FastAPI()

class Patient(BaseModel):
    name: Annotated[str, Field(..., description="The name of the patient", example="John Doe")]
    age: Annotated[int, Field(..., description="The age of the patient", example=30)]
    email: Annotated[EmailStr, Field(..., description="The email of the patient", example="john.doe@example.com")]
    contact_details: Annotated[dict, Field(..., description="The contact details of the patient", example={"phone": "123-456-7890", "address": "123 Main St"})]
    weight: Annotated[float, Field(..., description="The weight of the patient", example=70.5)]
    height: Annotated[float, Field(..., description="The height of the patient", example=1.75)]


    @computed_field
    def bmi(self) -> float:
        bmi = self.weight / (self.height ** 2)
        return bmi
    
@app.post("/patients")
def create_patient(patient: Patient):
    # load existing data
    data = load_data()
    # check if patient already exists
    if patient.name in data:
        raise HTTPException(status_code=400, detail="Patient already exists")
    # add new patient
    data[patient.id] = patient.model_dump(exclude={"id"})
    # save data
    save_data(data)
    return {"message": "Patient created successfully", "patient": patient.dict()}


@app.put("/edit/{patient_id}")
def edit_patient(patient_id: str, patient_update: Patient):
    # load existing data
    data = load_data()
    # check if patient exists
    if patient_id not in data:
        raise HTTPException(status_code=404, detail="Patient not found")
    # update patient information
    existing_patient = data[patient_id]
    updated_patient = patient_update.model_dump(exclude_unset=True)
    existing_patient.update(updated_patient)
    data[patient_id] = existing_patient
    # save data
    save_data(data)
    return {"message": "Patient updated successfully", "patient": existing_patient}