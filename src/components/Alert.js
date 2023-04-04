import React from 'react'

export default function Alert(props) {
    function capitalize(word) {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    // function capitalize(word) {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    //   }

    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}: {props.alert.message}</strong>

        </div>
    )
}
