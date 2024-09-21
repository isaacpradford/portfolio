const state = process.env.REACT_APP_STATE;
export var backendUrl;

if (state === "DEVELOPMENT") {
  backendUrl = "https://iradford.onrender.com/"; // You'll need to fix this lol
} else if (state === "LOCAL") {
  backendUrl = "http://localhost:5500/";
} else {
  backendUrl = "";
}
