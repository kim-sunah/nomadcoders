# 기본값을 설정하는 방법
def say_hello(user_name='lala'):
    print('hello', user_name)

say_hello('sunah')
say_hello()

def plus(a=1,b=4):
    print (a+b);

plus(2)
plus(2, 33)