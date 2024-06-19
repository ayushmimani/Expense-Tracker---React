// import { useSelector } from "react-redux";

// function Table() {
//   const expense = useSelector((state) => state.expense.Expense);

//   return (
//     <>
//       {/* <!-- expense table --> */}
//       <div id="expense_table" className="mt-6">
//         <table className="min-w-full bg-white">
//           {/* <!-- table head --> */}
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//                 Category
//               </th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//                 Amount
//               </th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//                 Date
//               </th>
//               <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           {/* <!-- table body --> */}
//           <tbody id="tbody">
//             <tr>
//               {" "}
//               <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
//                 other
//               </td>
//               <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
//                 1000
//               </td>
//               <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
//                 12-03-2024
//               </td>
//               <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
//                 <button className="DeleteBtn bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//             {expense.map((expenselist) => (
//               <tr id={expenselist.id} key={expenselist.id}>
//                 <td>{expenselist.category}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Table;

// import { useSelector } from "react-redux";

// function Table() {
//   const expenses = useSelector((state) => state.Expense);
//   console.log(expenses);

//   return (
//     <div id="expense_table" className="mt-6">
//       <table className="min-w-full bg-white">
//         {/* <!-- table head --> */}
//         <thead>
//           <tr>
//             <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//               Category
//             </th>
//             <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//               Amount
//             </th>
//             <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//               Date
//             </th>
//             <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
//               Action
//             </th>
//           </tr>
//         </thead>
//         {/* <!-- table body --> */}
//         <tbody id="tbody"></tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeexpense } from "../store/ExpenseSlice";

function Table() {
  const expenses = useSelector((state) => state.expense.Expense);
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(removeexpense(id));
  };

  return (
    <div id="expense_table" className="mt-6">
      <table className="min-w-full bg-white">
        {/* <!-- table head --> */}
        <thead>
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
              Category
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
              Amount
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
              Date
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        {/* <!-- table body --> */}
        <tbody id="tbody">
          {expenses.map((expense) => (
            <tr key={expense.id} id={expense.id}>
              <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
                {expense.Category}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
                {expense.Amount}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
                {expense.Date}
              </td>
              <td className="px-4 py-2 border-b border-gray-300 text-sm text-gray-700">
                <button
                  onClick={() => handledelete(expense.id)}
                  className="DeleteBtn bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
