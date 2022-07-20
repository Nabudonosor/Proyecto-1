var Alumno1 = {
    nombre: "Juan",
    edad: 20,
    nivel: 1
};
var Alumno2 = {
    nombre: "Antonio",
    edad: 26,
    nivel: 2
};
var alumnos = [Alumno1, Alumno2];
alumnos.sort(function (a, b) {
    if (a.nombre < b.nombre) {
        return -1;
    }
    if (a.nombre > b.nombre) {
        return 1;
    }
    return 0;
});
console.log(alumnos);
