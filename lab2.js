//QUESTIONS:-

//1.)count the frequency of elements in an array
// function frequency(arr){
//     let freq={};
//     for(let i of arr){
//         if(freq[i]){
//             freq[i]++;
//         }
//         else{
//             freq[i]=1
//         }
//     }
//     return freq;

// }
// const arr=[1,2,3,1,2,3,4,2,5,4,6];
// console.log(frequency(arr));



//2.)groups the students by department
// function grouping(students){
//     const group={};
//     for(let i of students){
//         let dept=i.department;
//         if(!group[dept]){
//             group[dept]=[];
//         }
        
//         group[dept].push(i.name);
//     }
//     return group;
// }
// const student=[
//     {name:"Riya",department:"CSE"},
//     {name:"Amit",department:"IT"},
//     {name:"Rahul",department:"CSE"},
//     {name:"Neha",department:"ECE"},
//     {name:"Karan",department:"IT"},
// ];
// console.log(grouping(student));



//3.)find duplicate elements from an array
// function duplicate(arr){
//     const freq={};
//     const dup=[];
//     for(let i of arr){
//         if(freq[i]){
//             freq[i]++;
//         }else{
//             freq[i]=1;
//         }
//     }
//     for(let key in freq){
//         if(freq[key]>1){
//             dup.push(key);
//         }
//     }
//     return dup;
// }
// const arr=[2,4,5,2,7,5,8,9,2];
// console.log(duplicate(arr));




//4.)return the employee with highest salary
// function highest(employees){
//     let highest=employees[0];
//     for(let emp of employees){
//         if(emp.salary>highest.salary){
//             highest=emp;
//         }
//     }
//     return highest;
// }
// const employees=[
//     {name:"Rahul",salary:50000},
//     {name:"Amit",salary:80000},
//     {name:"Riya",salary:65000},
//     {name:"Neha",salary:90000}
// ];
// console.log(highest(employees));



