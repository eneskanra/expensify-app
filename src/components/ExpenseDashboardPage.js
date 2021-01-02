import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "../components/ExpenseListFilters";

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList></ExpenseList>
    </div>
    
);

export default ExpenseDashboardPage;