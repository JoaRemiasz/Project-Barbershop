form.addEventListener("submit", () => {
    const rezerwacja = {
        lastname: lastname.value,
        date: date.value,
        fromTime: fromTime.value,
        upTime: upTime.value,
        service: service.value,
    }
    fetch("/api/rezerwacja", {
        method: "POST",
        body: JSON.stringify(rezerwacja),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if(data.status == "error"){
                success.style.display = "none"
                error.style.display = "block"
                error.innerText = data.error
            }else{
                error.style.display = "none"
                success.style.display = "block"
                success.innerText = data.success
            }
        })
})