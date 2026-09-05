from pyexpat import model
from pydantic import BaseModel, Field, field_validator, EmailStr, model_validator
from typing import List, Dict

class patient(BaseModel):
    name: str
    email: EmailStr
    age: int = Field(gt=0, lt=120)
    weight: float = Field(gt=0)
    married: bool
    allergies: List[str]
    contact_details: Dict[str, str]

    @field_validator('email')
    @classmethod
    def email_validator(cls, value):
        valid_domains = ['hdfc.com', 'icici.com']

        domail_name = value.split('@')[-1]

        if domail_name not in valid_domains:
            raise ValueError('not a valid domain')
        
        return value
    
    @model_validator(mode='after')
    def validate_emergency_contact(cls, values):
        if model.age < 60 and 'emergency_contact' not in model.contact_details:
            raise ValueError('emergency contact is required')
        return model

def insert_patient_data(patient: patient):

    print(patient.name)
    print(patient.age)
    print('inserted')

patient1 = patient(name="John Doe", age=30)
insert_patient_data(patient1)
