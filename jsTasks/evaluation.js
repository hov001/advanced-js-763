// const evaluations = [
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 70,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 60,
//   },
//   {
//     studentId: 1, // Unique identifier for each student
//     studentName: "John Doe",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 60,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 50,
//   },
//   {
//     studentId: 2, // Unique identifier for each student
//     studentName: "Tom Colins",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 40,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 1, // Unique identifier for each course
//     courseName: "JS Bootcamp",
//     score: 45,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 2, // Unique identifier for each course
//     courseName: "JS Level 0",
//     score: 35,
//   },
//   {
//     studentId: 3, // Unique identifier for each student
//     studentName: "Sarah Conor",
//     courseId: 3, // Unique identifier for each course
//     courseName: "JS Level 1",
//     score: 25,
//   },
// ];

// const res = evaluations.reduce((acc, { courseId, courseName, score }) => {
//   acc[courseId] = acc[courseId]
//     ? {
//         courseName,
//         score: acc[courseId].score + score,
//         count: ++acc[courseId].count,
//       }
//     : {
//         courseName,
//         score,
//         count: 1,
//       };

//   return acc;
// }, {});

// const result = [];

// for (const key in res) {
//   const { courseName, score, count } = res[key];

//   result.push({
//     courseId: key,
//     courseName,
//     average: score / count,
//   });
// }

// console.log("result", result);

// {
//   [courseId]: {
//     courseName,
//     score,
//     count,
//   },
// }

// []
