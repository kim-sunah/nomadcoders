from random import randint
user_choice = int(input("Choose number : "))
pc_choice = randint(1,50)

if user_choice==pc_choice:
    print("you won!")
elif user_choice>pc_choice:
    print("Lower!")
elif user_choice<pc_choice:
    print("Higher!")
