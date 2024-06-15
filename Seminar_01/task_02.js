
let lesson = new Map();

lesson.set('Математика', 'Смирнов').set('История', 'Иванова');

console.log(`Преподаватель по математике: ${lesson.get('Математика')}`); // Смирнов

const ivanLessons = new Set();
ivanLessons.add('Математика').add(' История');

const students = new Map();

students.set('Иван', ivanLessons);

console.log(`Уроки Ивана: ${[...students.get('Иван')]}`); // Уроки Ивана: Математика, История

