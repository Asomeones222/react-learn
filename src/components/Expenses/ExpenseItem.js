import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
/**
 * @param  {Object} props
 * @param  {String} props.title
 ** @param {number} props.amount
 **/
function ExpenseItem({ title, amount, date }) {
    const [_title, setTitle] = useState(title);
    const clickHandler = () => {
        setTitle("Updated!");
        console.log(_title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{_title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}
export default ExpenseItem;
