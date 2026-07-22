# uv run streamlit run main.py
import streamlit as st

st.title("Hello chai app")
st.subheader("This is streamlit app")
st.text("welcome to streamlit app")
st.write("choose your favorite language")

chai = st.selectbox("your chai: ", ["masala chai", "lemon tea"])

st.write("your choose {chai}. excellent choice!")

st.success("you have successfully choose your chai")