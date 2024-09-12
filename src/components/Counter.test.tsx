import {screen, render, fireEvent} from '@testing-library/react'
import Counter from './Counter'


test("Counter1 ", () => {

    render(<Counter initialValue={5}/>)
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();
})

test("Counter1 ", () => {

    render(<Counter initialValue={5}/>)
    let text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();

    const btn = screen.getByText("Inc");
    fireEvent.click(btn);
    text = screen.getByText("Counter: 6");
    expect(text).toBeInTheDocument();


})

test("Counter1 ", () => {

    render(<Counter initialValue={5}/>)
    let text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();

    const input = screen.getByPlaceholderText("count");
    fireEvent.change(input, {target: {value: 10}});
    text = screen.getByText("Counter: 10");
    expect(text).toBeInTheDocument();

    
})