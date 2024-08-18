class Circle {
    private int _radius;
    public void Round(int radius) {
        this._radius = radius;
    }

    // С помощью final метод getSquare нельзя переопределять в классах потомках
    public final double getSquare() {
        return Math.sqrt(_radius) * Math.PI;
    }
}