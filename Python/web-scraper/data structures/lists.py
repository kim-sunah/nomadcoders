days_of_week = ["mon", "tue", "wed", "thu", "fri"]

print(days_of_week.count('wed'))

#배열을 반대로
days_of_week.reverse()
print(days_of_week)

#리스트 초기화
days_of_week.clear()
print(days_of_week)

#마지막에 데이터를 삽입
days_of_week.append("sat")
days_of_week.append("sun")
print(days_of_week)

#특정 데이터 삭제
days_of_week.remove("sun")
print(days_of_week)

print(days_of_week[0])