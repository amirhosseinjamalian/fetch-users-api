const container = document.querySelector(".container");
const loading = document.querySelector(".loading");

setTimeout(() => {
  fetch("./fakestoreapi.com/users.json")
    .then((response) => response.json())
    .then((data) => {
      loading.classList.add("hidden");
      data.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("container_users");
        div.innerHTML = `
        <h3>یوزر ${item.id}</h3>
        <p><b>نام: </b>${item.name.firstname} ${item.name.lastname}</p>
        <p><b>ایمیل: </b>${item.email}</p>
        <p><b>تلفن: </b>${item.phone}</p>
      `;

        container.appendChild(div);
      });
    })
    .catch(() => {
      const div = document.createElement("div");
      div.classList.add("container_users");
      div.innerHTML = `
        خطا در دریافت اطلاعات
      `;
    });
}, 1000);
