import { useState } from 'react';
import './theater.css';

const rows = ['A', 'B', 'C', 'D', 'E'];
const cols = 10;
const seatPrice = 50;

function Theater() {
    const generateSeats = () => {
        let seats = [];
        rows.forEach((row) => {
            for (let i = 1; i <= cols; i++) {
                seats.push({ id: `${row}${i}`, row, number: i, selected: false, booked: false });
            }
        });
        return seats;
    };

    const [seats, setSeats] = useState(generateSeats());

    const handleSeatClick = (id) => {
        setSeats(prev => prev.map(seat => {
            if (seat.id === id && !seat.booked) {
                return { ...seat, selected: !seat.selected };
            }
            return seat;
        }));
    };

    const selectedSeats = seats.filter(seat => seat.selected);
    const totalPrice = selectedSeats.length * seatPrice;

    const handleBookSeats = () => {
        setSeats(prev => prev.map(seat => seat.selected ? { ...seat, booked: true, selected: false } : seat));
    };

    return (
        <div className="app dark-theme">
            <h1 className="title">🎬 Book Your Movie Seat</h1>
            <div className="screen">SCREEN</div>

            <div className="main-layout">
                <div className="seating-area">
                    {rows.map(row => (
                        <div key={row} className="seat-row">
                            {seats.filter(seat => seat.row === row).map(seat => (
                                <button
                                    key={seat.id}
                                    data-tooltip={`${seat.id} • ₹${seatPrice}`}
                                    className={`seat ${seat.booked ? 'booked' : seat.selected ? 'selected' : 'available'}`}
                                    onClick={() => handleSeatClick(seat.id)}
                                >
                                    {seat.number}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="sidebar">
                    <h3>🪑 Selected Seats</h3>
                    <ul>
                        {selectedSeats.map(seat => <li key={seat.id}>{seat.id}</li>)}
                    </ul>
                    <h4>Total Price: ₹{totalPrice}</h4>
                    <button className="book-btn" onClick={handleBookSeats} disabled={selectedSeats.length === 0}>Book Selected</button>
                </div>
            </div>
        </div>
    );
}

export default Theater;
