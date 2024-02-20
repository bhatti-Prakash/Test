// Q-1
const students = [
    { name: "John", grade: 9, subjects: ["Math", "Science", "History"] },
    { name: "Alice", grade: 10, subjects: ["Math", "Biology", "Physics"] },
    { name: "Bob", grade: 11, subjects: ["Chemistry", "Physics", "Literature"] }
  ];
  
  function transformStudents(students) {
    const transformed = {};
    
    students.forEach(student => {
      student.subjects.forEach(subject => {
        if (!transformed[subject]) {
          transformed[subject] = [];
        }
        transformed[subject].push(student.name);
      });
    });
    
    return transformed;
  }
  
  console.log(transformStudents(students));
  
//   Q-2
  const unSortedArray = [2, 1, 7, 3, 8, 9, 4, 3];
  
  function findSecondLargest(arr) {
      let firstLargest = arr[0];
      let secondLargest = arr[0];
  
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > firstLargest) {
              secondLargest = firstLargest;
              firstLargest = arr[i];
          } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
              secondLargest = arr[i];
          }
      }
  
      return secondLargest;
  }
  
  const secondLargest = findSecondLargest(unSortedArray);
  console.log(secondLargest,"is the second largest value in the array");
  