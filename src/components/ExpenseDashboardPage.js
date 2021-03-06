import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "../components/ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary></ExpensesSummary>
        <ExpenseListFilters></ExpenseListFilters>
        <ExpenseList></ExpenseList>
    </div>
    
);

export default ExpenseDashboardPage;