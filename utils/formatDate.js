const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    // Concatenate the formatted components with "-"
    return `${day}/${month}/${year}`;
}

export default formatDate;