import os
import streamlit as st

os.environ["OPENAI_API_KEY"] = ""

from langchain.llms import OpenAI
llm = OpenAI()

content = "방학"
result = llm.predict(content + "에 가면 좋을 여행지를 알려줘")
print(result)

from langchain_openai import ChatOpenAI

chatgpt = ChatOpenAI()
chatgpt = ChatOpenAI(model_name="gpt-3.5-turbo", max_tokens = 512)
answer = chatgpt.invoke("방학에 가면 좋을 여행지를 알려줘")
print(answer)

import streamlit as st


#st.title('인공지능 시인'_
#st.title('_streamlit_is :blue[cool] :sunglasses:')

st.set_page_config(
    page_title='DirChat',
    page_icon=':books:')

st.title("_Private Data :red[QA Chat]_ :books:")

with st.sidebar:
    openai_api_key = st.text_input("OpenAI API key", key="chatbot_api_key",
type="password:")
    process = st.button("process")
if process:
   if not openai_api_key:
    st.info("please add your OpenAI API key to continue.")
    st.stop()

content = st.text_input('시의 주제를 제시해 주세요.')
if st.button('시 작성 요청하기'):
    with st.spinner('시 작성 중....'):
        result = chatgpt.predict(content + "에 대한 시를 써줘")
        st.write(result)
            
            