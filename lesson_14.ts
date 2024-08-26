class General {
}

class Vector<T> extends General {

}

function sumVectors<T>(a1: Vector<T>, a2: Vector<T>): Vector<T> {
  if (a1.length !== a2.length) {
    return null;
  }

  const result = new Vector<T>();

  for (let i = 0; i < a1.length; i++) {
    result[i] = a1[i] + a2[i];
  }

  return result;
}
