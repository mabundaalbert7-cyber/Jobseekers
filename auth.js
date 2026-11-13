import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getAuth, onAuthStateChanged, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const $ = (id) => document.getElementById(id);
const configured = !firebaseConfig.apiKey.startsWith("PASTE");
window.__authEnabled = configured;
const account = $("account");

function msg(text, ok) {
  const m = $("message");
  if (!m) return;
  m.textContent = text;
  m.className = "message " + (ok ? "ok" : "bad");
}

const friendly = {
  "auth/email-already-in-use": "That email already has an account. Try logging in.",
  "auth/invalid-email": "That email doesn't look right.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/invalid-credential": "Wrong email or password.",
  "auth/user-not-found": "No account with that email.",
  "auth/wrong-password": "Wrong email or password.",
  "auth/too-many-requests": "Too many tries. Wait a few minutes and try again.",
  "auth/network-request-failed": "No internet connection. Try again.",
  "auth/operation-not-allowed": "Sign up is not turned on yet. In Firebase, enable Email/Password sign-in.",
  "auth/unauthorized-domain": "This website address is not allowed yet. In Firebase, add mabundaalbert7-cyber.github.io to Authorized domains.",
  "auth/invalid-api-key": "The Firebase API key in firebase-config.js is wrong.",
  "auth/configuration-not-found": "Authentication is not set up in Firebase yet. Open Authentication and tap Get started.",
  "auth/admin-restricted-operation": "Sign up is switched off in Firebase."
};
const explain = (e) => friendly[e.code] || ("Something went wrong (" + (e.code || e.message) + "). Please try again.");

if (!configured) {
  if ($("authBox")) msg("Login is not switched on yet. The site owner needs to add the Firebase settings.", false);
  if (account) account.textContent = "";
} else {
  const auth = getAuth(initializeApp(firebaseConfig));

  onAuthStateChanged(auth, (user) => {
    window.__user = user;
    window.__authReady = true;
    document.dispatchEvent(new Event("authchange"));
    if (account) {
      account.textContent = "";
      if (user) {
        const hi = document.createElement("span");
        hi.textContent = "Hi, " + (user.displayName || user.email) + "  ";
        const out = document.createElement("button");
        out.textContent = "Log out";
        out.onclick = () => signOut(auth);
        account.append(hi, out);
      } else {
        const a = document.createElement("a");
        a.href = "login.html";
        a.textContent = "Log in / Sign up";
        account.append(a);
      }
    }
    if (user && $("authBox")) location.href = "index.html";
  });

  if ($("authBox") && location.search.includes("apply")) msg("Please sign up or log in (free) to apply for jobs.", true);

  const signup = $("signupForm"), login = $("loginForm");
  if (signup) signup.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg("Creating your account...", true);
    try {
      const cred = await createUserWithEmailAndPassword(auth, $("suEmail").value.trim(), $("suPass").value);
      await updateProfile(cred.user, { displayName: $("suName").value.trim() });
      location.href = "index.html";
    } catch (err) { msg(explain(err), false); }
  });
  if (login) login.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg("Logging in...", true);
    try {
      await signInWithEmailAndPassword(auth, $("liEmail").value.trim(), $("liPass").value);
    } catch (err) { msg(explain(err), false); }
  });
  const reset = $("resetLink");
  if (reset) reset.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = $("liEmail").value.trim();
    if (!email) return msg("Type your email above first, then tap Forgot password.", false);
    try { await sendPasswordResetEmail(auth, email); msg("Password reset email sent. Check your inbox and spam.", true); }
    catch (err) { msg(explain(err), false); }
  });
}
