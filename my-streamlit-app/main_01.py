import streamlit as st

st.title("Cute Anushka.T app")

if st.button("make anushka happy"):
    st.success("anushka is happy")

add_kiss = st.checkbox("add kiss")

if add_kiss:
    st.write("anushka is sending you a kiss")

kiss_type = st.radio("pick your kiss type: ", ["blow kiss", "air kiss", "french kiss"])

st.write(f"selected kiss type: {kiss_type}")

flavour = st.selectbox("choose flavour: ", ["chocolate", "strawberry", "vanilla"])

st.write(f"selected flavour: {flavour}")

time = st.slider("kiss time", 3, 5, 4)
st.write(f"selected time level {time}")

st.write(f"Selected time level {time}")
cups = st.number_input ("How many kisses", min_value=1,
max_value=10, step=1)
st.write(f"Selected sugar level {cups}")

name = st.text_input("Enter your name")
if name:
    st.write(f"Welcome, {name} ! Your kiss is on the way")

dob = st.date_input("select your date of kiss")
st.write(f"your date of kiss is {dob}")

