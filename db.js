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
  {firstName: 'Curly', lastName: 'Bazz', email: 'curly.b@student.com', gpa: '3.7'}];

const School = conn.define('school', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING
  }
});

const Student = conn.define('student', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.STRING,
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
    console.error(error)
  }
};

syncAndSeed();

module.exports = {
  conn,
  School,
  Student,
  syncAndSeed
}
