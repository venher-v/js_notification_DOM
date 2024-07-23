"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const div = document.createElement("div");
    document.body.append(div);
    div.classList = `notification ${type}`;
    div.style.top = `${posTop}px`;
    div.style.right = `${posRight}px`;
    const h2 = document.createElement("h2");
    h2.classList = "title";
    h2.style.whiteSpace = "nowrap";
    h2.textContent = title;
    div.append(h2);
    const p = document.createElement("p");
    p.textContent = description;
    div.append(p);
    setTimeout(()=>{
        div.style.display = "none";
    }, 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map