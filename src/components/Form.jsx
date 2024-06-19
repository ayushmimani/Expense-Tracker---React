import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import addExpense from "../store/ExpenseSlice";
import { addExpense } from "../store/ExpenseSlice"; // Correct import

function Form() {
  const [category, setcategory] = useState("");
  const [amount, setamount] = useState("");
  const [date, setdate] = useState("");

  const dispatch = useDispatch();

  // const handleform = (e) => {
  //   e.preventDefault();
  //   dispatch(addExpense({ category, amount, date }));
  //   console.log(category);
  //   // setamount("");
  //   // setdate("");
  // };

  const handleform = (e) => {
    e.preventDefault();

    const expenseData = {
      category,
      amount,
      date,
    };

    dispatch(addExpense(expenseData)); // Correct payload structure

    // Optionally clear the form fields after dispatching the action
    setcategory("Food");
    setamount("");
    setdate("");
  };

  useEffect(() => {
    setcategory("Food");
  }, setcategory);

  return (
    <>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 ">
        <h2 className="text-2xl font-bold  mb-4">Expense Tracker</h2>
        <form id="ExpenseTracker" className="space-y-4" onSubmit={handleform}>
          {/* <!-- category  --> */}
          <div className="flex space-x-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              category
            </label>
            <select
              name="category"
              id="category"
              required
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              // onChange={(e) => setcategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Rent">Rent</option>
              <option value="other">other</option>
            </select>
          </div>
          {/* <!-- Amount --> */}
          <div className="flex  flex-col">
            <label
              className="block text-sm text-gray-700 font-medium mb-1"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              required
              name="amount"
              placeholder="10000"
              // onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {/* <!-- Date --> */}
          <div className="flex flex-col">
            <label
              className="block text-gray-700 mb-1 font-medium text-sm"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              type="date"
              name="date"
              required
              value={date}
              onChange={(e) => setdate(e.target.value)}
              id="date"
              // onChange={(e) => setDate(e.target.value)}
            />
          </div>
          {/* <!-- Add btn --> */}
          <div>
            <input
              type="submit"
              className="w-full bg-indigo-600 text-white px- py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id="AddBtn"
              value="Add"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
