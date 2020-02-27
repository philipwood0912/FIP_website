export default {
    template: `
        <div id="signin">
            <div class="avatar"><i class="fas fa-user fa-7x" style="color:#4a4a4a;"></i></div>
            <h2>Sign in to your account</h2>
            <form id="signinform" action="index.php" method="post">
                <label class="hidden">Username</label>
                <input name="username" type="text value="" placeholder="Username">
                <label class="hidden">Password</label>
                <input name="password" type="password" value="" placeholder="Password">
                <button name="submit">Sign In</button>
            </form>
        </div>
    `
}