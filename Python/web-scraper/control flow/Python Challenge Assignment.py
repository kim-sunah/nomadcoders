
# BLUEPRINT | DONT EDIT
playing = True

a = int(input("Choose a number:\n"))
b = int(input("Choose another one:\n"))
operation = input(
    "Choose an operation:\n    Options are: + , - , * or /.\n    Write 'exit' to finish.\n"
)
# /BLUEPRINT

# 👇🏻 YOUR CODE 👇🏻:
while True:
    if operation == 'exit':
        break
    if operation in ['+', '-', '*', '/']:
        if operation == '+':
            result = a + b
        elif operation == '-':
            result = a - b
        elif operation == '*':
            result = a * b
        elif operation == '/':
            if b == 0:
                print("Cannot divide by zero.")
                continue
            result = a / b

        print(f"{a} {operation} {b} = {result}")

    else:
        print("Invalid operation. Please choose one of the following: +, -, *, /.")

    a = int(input("Choose a number:\n"))
    b = int(input("Choose another one:\n"))
    operation = input(
        "Choose an operation:\n    Options are: + , - , * or /.\n    Write 'exit' to finish.\n"
    )

# /YOUR CODE