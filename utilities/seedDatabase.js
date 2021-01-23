const { Campuses, Students } = require('../database/models');

const makeStudent = (firstName, lastName, email, gpa, imageUrl) => ({ firstName, lastName, email, gpa, imageUrl }),
      makeCampus = (name, address, description, imageUrl) => ({ name, address, description, imageUrl })

const seedDatabase = async () => {
  await Promise.all([
    Campuses.create({
        ...makeCampus(
            "SUNY Albany",
            "1400 Washington Ave, Albany, NY 12222",
            "SUNY College"
        ),
        students: [
            makeStudent("Daniel", "Durban", "something@test.edu", 3.8),
            makeStudent("Eli", "Schmidt", "elifake@mail.edu", 2.4),
            makeStudent("Noah", "Burgerface", "smartnotsmart@fakenotreal.com", 2)
        ]
    }, { include: [{ association: Campuses.students }]}),
    Students.create({
      ...makeStudent("Kyrie", "Irving", "test123@blah.edu", 3),
      campus: makeCampus("Brooklyn College", "2900 Bedford Ave, Brooklyn, NY 11210", "CUNY College")
    }, { include: [{ association: Students.campus }]}),
    Students.create(makeStudent("LeBron", "James", "lbjames@notreal.goat", 4)),
    Campuses.create(makeCampus("Unreal Tech College", "1 Surreal Lane, Infinity, NY 11111", "A non-existent college with no students"))
  ]);
}


module.exports = seedDatabase;
