const Sequelize = require('sequelize');
const conn = new Sequelize (process.env.DATABASE_URL || 'postgres://localhost/acme_schools');

const schoolData = [
  {
    "name": "MIT",
    "imageURL": ""
  },
  {
    "name": "Harvard",
    "imageURL": ""
  },
  {
    "name": "UCLA",
    "imageURL": ""
  },
  {
    "name": "CCNY",
    "imageURL": ""
  },
  {
    "name": "Brown",
    "imageURL": ""
  },
  {
    "name": "Apex Tech",
    "imageURL": ""
  }
];

const studentData = [
  {firstName: 'Moe', lastName: 'Foo', email: 'moe.f@student.com', gpa: '3'},
  {firstName: 'Larry', lastName: 'Bar', email: 'larry.b@student.com', gpa: '3.5'},
  {firstName: 'Curly', lastName: 'Bazz', email: 'curly.b@student.com', gpa: '3.7'},
  {firstName: 'Debra', lastName: 'Nightingale', email: 'brenda.n@student.com', gpa: '2.9'},
  {firstName: 'Steven', lastName: 'Lamarche', email: 'steven.s@student.com', gpa: '3.9'},
  {firstName: 'Greg', lastName: 'Smith', email: 'greg.s@student.com', gpa: '4.0'},
  {firstName: 'Kevin', lastName: 'Maberry', email: 'kevin.m@student.com', gpa: '2.5'},
  {firstName: 'Lisa', lastName: 'Delvalle', email: 'lisa.d@student.com', gpa: '3.3'},
  {firstName: 'Sarah', lastName: 'Pomerleau', email: 'sarah.p@student.com', gpa: '3.66'},
  {firstName: 'Rhonda', lastName: 'Demaria', email: 'rhonda.d@student.com', gpa: '2.8'}];

const School = conn.define('school', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING
  },
  imageURL: {
    type: Sequelize.STRING
  }
});

const Student = conn.define('student', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.STRING
  }
});

Student.belongsTo(School);
School.hasMany(Student);

const syncAndSeed = async() => {
  try {
    await conn.sync({ force: true });

    const schools = await Promise.all (
      schoolData.map(school => School.create({
        name: school.name,
        imageURL: school.img
      }))
    );

    const students = await Promise.all (
      studentData.map(student => Student.create({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        gpa: student.gpa
      }))
    )
  } catch (err) {
    console.error(err)
  }
};

syncAndSeed();

module.exports = {
  conn,
  School,
  Student,
  syncAndSeed
}
