import React from "react";

const userFactory = (fname, lname, age) => {
  if (!fname || !lname || !age) {
    throw new Error("Something is missing");
  }
  return {
    firstName: fname,
    lastName: lname,
    age: age,
    getFullName: () => {
      return `${fname} ${lname}`;
    },
    eligibleForVote: () => {
      return age >= 18;
    },
  };
};

const ankit = userFactory("Ankit", "Singh Rawat", "27");
const rohit = userFactory("Rohit", "Sharma", "17");
const tony = userFactory("Tony", "Gony", "29");

const users = [ankit, rohit, tony];

/*
now we have created userfactory , so we just need to call that function with require fields
there is no chance to create an object with wrong key cox now factory method is handling that 
**/

function FactoryPattern() {
  return (
    <div>
        <h3>3. Factory Pattern</h3>
      {users?.map((user) => (
        <li>
          {user.getFullName()} and they can{" "}
          {user.eligibleForVote() ? "vote" : "not Vote"}
        </li>
      ))}
    </div>
  );
}

export default FactoryPattern;
