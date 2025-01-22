# 👇🏻 YOUR CODE 👇🏻:
# 1. get_yearly_revenue (연간 매출 계산)
# monthly_revenue (월간 매출)를 인수로 받고, revenue for a year (연간 매출)를 리턴.
# takes monthly_revenue and returns revenue for a year.

# 2. get_yearly_expenses (연간 비용 계산)
# monthly_expenses (월간 비용)를 인수로 받고, expenses for a year (연간 비용)를 리턴.
# takes monthly_expenses returns expenses for a year.


# 3. get_tax_amount (세금 계산)
# profit (이익) 를 인수로 받고, tax_amount (세금 금액) 를 리턴.
# takes profit returns tax_amount.


# 4. apply_tax_credits (세액 공제 적용)
# tax_amount (세금 금액), tax_credits (세액 공제율)를 인수로 받고, amount to discount (할인할 금액)를 리턴.
# takes tax_amount and tax_credits returns amount to discount.


# Requirements (요구사항)
# get_tax_amount 함수는 if/else 를 사용해야한다.
# 만약 (if) profit이 100,000 초과이면. 세율은 25% 이다.
# 아닌 경우에는 (else). 세율은 15% 이다.

# /YOUR CODE

# BLUEPRINT | DONT EDIT

monthly_revenue = 5500000
monthly_expenses = 2700000
tax_credits = 0.01

# 1. get_yearly_revenue (연간 매출 계산)
def get_yearly_revenue(monthly_revenue):
    return monthly_revenue * 12

yearly_revenue = get_yearly_revenue(monthly_revenue)

# 2. get_yearly_expenses (연간 비용 계산)
def get_yearly_expenses(monthly_expenses):
    return monthly_expenses * 12

yearly_expenses = get_yearly_expenses(monthly_expenses)

profit = yearly_revenue - yearly_expenses

# 3. get_tax_amount (세금 계산)
# profit (이익) 를 인수로 받고, tax_amount (세금 금액) 를 리턴.
# takes profit returns tax_amount.
def get_tax_amount():
    return tax_amount

tax_amount = get_tax_amount(profit)


# 4. apply_tax_credits (세액 공제 적용)
# tax_amount (세금 금액), tax_credits (세액 공제율)를 인수로 받고, amount to discount (할인할 금액)를 리턴.
# takes tax_amount and tax_credits returns amount to discount.
def apply_tax_credits(tax_amount, tax_credits):
    return tax_amount * tax_credits

final_tax_amount = tax_amount - apply_tax_credits(tax_amount, tax_credits)

# Requirements (요구사항)
# get_tax_amount 함수는 if/else 를 사용해야한다.
# 만약 (if) profit이 100,000 초과이면. 세율은 25% 이다.
# 아닌 경우에는 (else). 세율은 15% 이다.


if profit > 100000:
    tax_rate = 0.25
else:
    tax_rate = 0.15

print(f"Your tax bill is: ${final_tax_amount}")

# /BLUEPRINT