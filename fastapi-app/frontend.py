import streamlit as st
import requests

API_URL = "http://localhost:8000/predict"

st.title("Health Insurance Premium Prediction")

st.markdown("Enter the patient details below to predict the health insurance premium.")

age = st.number_input("Age", min_value=0, max_value=120, value=30)
weight = st.number_input("Weight (kg)", min_value=0.0, value=70.0)
height = st.number_input("Height (m)", min_value=0.0, value=1.75)   

if st.button("Predict Premium"):
    # Prepare the input data
    input_data = {
        "age": age,
        "weight": weight,
        "height": height
    }

    # Send a POST request to the FastAPI backend
    response = requests.post(API_URL, json=input_data)

    if response.status_code == 200:
        prediction = response.json()
        st.success(f"Predicted Health Insurance Premium: ${prediction['predicted_premium']:.2f}")
    else:
        st.error("Error in prediction. Please check the input data.")

if __name__ == "__main_":
    main.run(host="0.0.0.0", debug=True)