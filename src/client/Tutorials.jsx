import React from "react";

// React Class Component
// Renderが必要
// Reactの考え Component → UI（画面）
// render():画面に何を表示するかを決める場所だから必要. このcomponentがこれを表示するとReactに教える。
// render()がないと何を表示するかわからない。エラーになる。
// UIは必ずrender()を書く。
// 親
class Tutorials extends React.Component {
  render() {
    const user = {
      name: "Alxender",
      age: 30,
      job: "Engineer",
      isEmployee: true
    };

    return (
      <div>
        <h1>React Sample App</h1>

        {/* JSX expression */}
        {/* {} の中でJavaScriptを書ける */}
        <p>Age next year: {user.age + 1}</p>

        {/* JSX if statement (ternary) */}
        {/* 条件分岐 */}
        <p>
          Status: {user.isEmployee ? "Employee" : "Not Employee"}
        </p>

        {/* React Component + Props */}
        <UserCard name={user.name} age={user.age} job={user.job}/>
      </div>
    );
  }
}

// React Functional Component + Props Destructuring
// Component 再利用できる。UIの部品
// 子
function UserCard({ name, age, job }) {
  return (
    <div
      // JSX attributes 
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      <h2>User Info</h2>

      {/* JSX expression */}
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

      {/* JSX if statement */}
      <p>{age >= 20 ? "Adult" : "Minor"}</p>
    </div>
  );
}

export default Tutorials;