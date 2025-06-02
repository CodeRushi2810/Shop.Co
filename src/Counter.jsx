import { useState, useCallback } from "react";

function Counter() {
    const [counter, setCounter] = useState(10);

    const [userData, setUserData] = useState({
        firstname: { id: "firstname", label: "First Name", value: "" },
        lastname: { id: "lastname", label: "Last Name", value: "" },
        role: { id: "role", label: "Role", value: "" },
        desc: { id: "desc", label: "Description", value: "" }
    });

    const handleAdd = useCallback(() => {
        if (counter < 20) setCounter((prev) => prev + 1);
    }, [counter]);

    const handleSubtract = useCallback(() => {
        if (counter > 0) setCounter((prev) => prev - 1);
    }, [counter]);

    const handleChange = useCallback((event) => {
        const { id, value } = event.target;
        setUserData((prev) => ({
            ...prev,
            [id]: { ...prev[id], value }
        }));
    }, []);

    const handleClearForm = useCallback(() => {
        setUserData((prev) =>
            Object.fromEntries(
                Object.entries(prev).map(([key, field]) => [
                    key,
                    { ...field, value: "" }
                ])
            )
        );
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>🚀 User Profile Manager</h1>
            <div style={styles.counter}>
                <button style={styles.counterBtn} onClick={handleSubtract}>−</button>
                <span style={styles.counterValue}>Counter: {counter}</span>
                <button style={styles.counterBtn} onClick={handleAdd}>+</button>
            </div>

            <form style={styles.form}>
                {Object.values(userData).map(({ id, label, value }) => (
                    <div key={id} style={styles.formGroup}>
                        <label htmlFor={id} style={styles.label}>{label}</label>
                        <input
                            id={id}
                            type="text"
                            value={value}
                            placeholder={`Enter ${label}`}
                            onChange={handleChange}
                            style={styles.input}
                        />
                    </div>
                ))}
                <button type="button" onClick={handleClearForm} style={styles.clearBtn}>
                    Clear All Fields
                </button>
            </form>

            <div style={styles.summary}>
                <h2>📝 Summary</h2>
                {Object.values(userData).map(({ id, label, value }) => (
                    <p key={id}><strong>{label}:</strong> {value || "—"}</p>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        maxWidth: "600px",
        margin: "0 auto",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    },
    heading: {
        textAlign: "center",
        color: "#333",
        marginBottom: "20px"
    },
    counter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginBottom: "30px"
    },
    counterBtn: {
        fontSize: "24px",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        background: "#007bff",
        color: "#fff",
        cursor: "pointer"
    },
    counterValue: {
        fontSize: "18px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginBottom: "30px"
    },
    formGroup: {
        display: "flex",
        flexDirection: "column"
    },
    label: {
        marginBottom: "5px",
        fontWeight: "bold",
        color: "#555"
    },
    input: {
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px"
    },
    clearBtn: {
        padding: "12px",
        marginTop: "10px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer"
    },
    summary: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #eee"
    }
};

export default Counter;