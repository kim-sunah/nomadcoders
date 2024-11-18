void main() {
  String? name = 'name';
  name = null;
  print(name?.isNotEmpty);
}
