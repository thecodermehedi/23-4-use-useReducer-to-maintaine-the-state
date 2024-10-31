import { useReducer } from "react";

const initialState = {
 name: "",
 age: "",
 hobbies: []
}

const reducer = (currentState, action) => {
 switch (action.type) {
  case "add_name":
   return { ...currentState, name: "programming-hero" }
   break;

  default:
   break;
 }
}

const UserInfoWithUseReducer = () => {

 const [state, dispatch] = useReducer(reducer, initialState);
 console.log(state);


 return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
   <div className="max-w-md w-full space-y-8">
    <form className="mt-8 space-y-6">
     <div className="rounded-md shadow-sm -space-y-px">
      <div>
       <label htmlFor="name" className="sr-only">
        Name
       </label>
       <input
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        onChange={() => dispatch({ type: "add_name" })}
       />
      </div>
      <div>
       <label htmlFor="age" className="sr-only">
        Age
       </label>
       <input
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
        min="0"
       />
      </div>
      <div>
       <label htmlFor="hobbies" className="sr-only">
        Hobbies
       </label>
       <input
        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="Hobbies (comma-separated)"
       />
      </div>
     </div>

     <code>
      { }
     </code>

     <div>
      <button
       type="submit"
       className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
       Save Information
      </button>
     </div>
    </form>
   </div>
  </div>
 )
};

export default UserInfoWithUseReducer;
