<div canvas="" class="contact-overlay">

    <i class="fa fa-times" aria-hidden="true" id="close-form"></i>

    <h2>Let&#39;s Work<br>Together</h2>

    <form method="post" action="form.php">


        <input type="text" name="name" id="name" placeholder="NAME *" required>


        <input type="email" name="email" id="email" placeholder="EMAIL *" required>


        <input type="tel" name="phone" id="phone" placeholder="PHONE">


        <select name="budget" id="budget">
            <option value="0" selected disabled class="option">ESTIMATED BUDGET</option>
            <option value="option1" class="option">Under &#36; 1000</option>
            <option value="option2" class="option">&#36;1000 to &#36;2000</option>
            <option value="option3" class="option">Above &#36;2000</option>

        </select>

        <textarea placeholder="PROJECT DETAILS *" name="comments" id="comments" required></textarea>

        <input type="submit" value="SEND" placeholder="SEND" class="button">

    </form>

</div>