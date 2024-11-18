void main() {
  //var에서 타입을 지정하지 않거나
  var name;

  name = "name";

  name = 1;

  //dynamic 으로 명시적 선언
  dynamic otherName;

  if (name is String) {
    print("name is a string");
  }

  if (otherName is String) {
    print("otherName is a string");
  }
}
