// function findKeyOfBiggestValue(object = {}) {
//   let foundKey = "";

//   let bigNumber = -Infinity;

//   for (const key in object) {
//     if (object[key] > bigNumber) {
//       bigNumber = object[key];
//       foundKey = key;
//     }
//   }

//   return foundKey;
// }

// function mostFrequentItem(items = []) {
//   const countOfItems = items.reduce((acc, item) => {
//     acc[item] = (acc[item] ?? 0) + 1;

//     return acc;
//   }, {});

//   return findKeyOfBiggestValue(countOfItems);
// }

// console.log(mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])); Output: 4
// console.log(
//   mostFrequentItem([
//     "apple",
//     "banana",
//     "apple",
//     "orange",
//     "banana",
//     "banana",
//     "apple",
//   ])
// ); // Output: 'banana'
// mostFrequentItem([10, 20, 10, 30, 20, 10]); Output: 10

const evaluations = [
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 70,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 60,
  },
  {
    studentId: 1, // Unique identifier for each student
    studentName: "John Doe",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 60,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 50,
  },
  {
    studentId: 2, // Unique identifier for each student
    studentName: "Tom Colins",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 40,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 1, // Unique identifier for each course
    courseName: "JS Bootcamp",
    score: 45,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 2, // Unique identifier for each course
    courseName: "JS Level 0",
    score: 35,
  },
  {
    studentId: 3, // Unique identifier for each student
    studentName: "Sarah Conor",
    courseId: 3, // Unique identifier for each course
    courseName: "JS Level 1",
    score: 25,
  },
];

function groupBy(arr, getKey) {
  return arr.reduce((res, item) => {
    const key = getKey(item);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(item);
    return res;
  }, {});
}

function course_avgEval(arr) {
  let courses = groupBy(arr, (record) => record.courseId);

  return Object.keys(courses).map((courseId) => {
    let records = courses[courseId];
    let totalScore = records.reduce((sum, record) => sum + record.score, 0);
    let average = totalScore / records.length;

    return {
      courseId,
      courseName: records[0].courseName,
      average: average,
    };
  });
}

console.log(course_avgEval(evaluations));
