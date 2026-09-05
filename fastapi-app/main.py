from fastapi import FastAPI, HTTPException, Path 
import json

app = FastAPI()

def load_data():
    with open("data.json", "r") as f:
        data = json.load(f)
    return data

@app.get("/")
def read_root():
    return {"message": "Patient Management System API"}

@app.get("/about")
def read_about():
    return {"message": "A fully functional API to manage your patient records."}

@app.get('/view')
def view_patients():
    data = load_data()
    return {"patients": data}

@app.get('/view/{patient_id}')
def view_patient(patient_id: str = Path(..., description="The ID of the patient to retrieve", example="POO1")):
    # load all the partients
    data = load_data()
    # find the patient with the given id
    if patient_id in data:
        return {"patient": data[patient_id]}
    else:
        raise HTTPException(status_code=404, detail="Patient not found")
    # instead of returning json response, we can raise an HTTPException with a 404 status code and a detail message indicating that the patient was not found. This will result in a more appropriate response for the client when the requested patient ID does not exist in the data.