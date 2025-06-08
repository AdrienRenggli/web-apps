# 🧭 Web App Launcher

A simple web app that displays a categorized list of web tools and games. Each item includes an icon (image or Font Awesome icon), a name, and a short description. Clicking an item redirects you to the corresponding application or game.

## 📂 Features
Categorized web apps (Games & Applications)
Custom icon per app (supports image files or Font Awesome icons)
Clean, responsive layout
Click-to-launch functionality
Footer with a link to this repository

## 🛠️ Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (CDN)

## 📝 Customizing the List
In script.js, modify the webApps object to add your own items. You can use either:

- icon (for image files: "images/my-icon.png")
- faIcon (for Font Awesome icons: "fas fa-chess" or "fab fa-github")

```javascript
{
    name: "GitHub",
    url: "https://github.com",
    description: "Version control and collaboration.",
    icon: "images/github.png"
}
```
or
```javascript
{
    name: "GitHub",
    url: "https://github.com",
    description: "Version control and collaboration.",
    faIcon: "fab fa-github"
}
```
