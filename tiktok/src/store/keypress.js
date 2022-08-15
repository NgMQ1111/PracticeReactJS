
export function handleEnterAdd(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        document.getElementById("myBtn-add").click();
    }
}

export function handleEnterUpdate(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        document.getElementById("myBtn-update").click();
    }
}