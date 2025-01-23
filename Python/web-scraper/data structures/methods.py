days_of_week = ["mon", "tue", "wed", "thu", "fri"]

for i in days_of_week:
    print(i.upper())

"""
https://docs.python.org/ko/3/library/
"""
name = "sunah"

#전체 대문자 변경
print(name.upper())

#첫글자만 대문
print(name.capitalize())

#첫 문자가 해당 문자인지를 확인
print(name.startswith("n"))

#마지막 문자가 해당 문자인지 확인
print(name.endswith("d"))

#특정 문자를 찾아서 변환
print(name.replace("s", "_"))

print(name.split("n"))