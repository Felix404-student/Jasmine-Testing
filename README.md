# Jasmine-Testing
Jasmine Testing Exercises for Springboard/UMass bootcamp

<h2>Loan Calculator</h2>
<p>You are given the HTML, CSS, and JavaScript for a loan calculator. Your goal
is to fill in the JavaScript to make the loan calculator functional.  The
calculator takes an amount to loan (the <em>principle</em>), a term in years, and a yearly rate.
The output should be the monthly payment of the loan.</p>
<p>To calculate the monthly payment, use the following formula:</p>
<div class="math notranslate nohighlight">
\[\text{monthly payment} = \frac{P \times i}{\rule{0pt}{1em} 1 - {(1 + i)}^{-n}}\]</div>
<p>Where:</p>
<ul class="simple">
<li><cite>P</cite> = Amount of principle</li>
<li><cite>i</cite> = periodic interest rate (in our case yearly rate ÷ 12)</li>
<li><cite>n</cite> = total number of payments (years × 12)</li>
</ul>
<p>There is also a jasmine test file (<cite>calculator-test.js</cite>).  Your goal is to write
tests for the <cite>calculateMontlyPayment</cite> function.  There are a few suggested
tests, but if you can think of more, feel free to add to it.</p>
</div>
<div class="section" id="further-study-tip-pool">
<h2>Further Study: Tip Pool</h2>
<p>In this exercise you will take an existing code base and write tests using the Jasmine testing library.</p>
<p>‘Tip Pool’ is an application that tracks the total tips generated from a group of servers in a restaurant. It then calculates the payout for each server.</p>
<p>Your task is  to thoroughly test each function in the app!</p>
</div>
<div class="section" id="step-one-complete-server-test-js">
<h2>Step One: Complete server.test.js</h2>
<p>Take a minute to read through the codebase, currently there is only one test in <code class="docutils literal notranslate"><span class="pre">server.test.js</span></code></p>
<p>Notice that the string ‘Alice’ is getting left on the dom after the first test is run, this is because we didn’t tear down our tests properly</p>
<p>To get started:</p>
<ul class="simple">
<li>Thoroughly read the code base</li>
<li>Clean up the dom after the test is run using <code class="docutils literal notranslate"><span class="pre">afterEach</span></code></li>
<li>Write a test for each function found in <code class="docutils literal notranslate"><span class="pre">server.js</span></code></li>
</ul>
</div>
<div class="section" id="step-two-test-the-remainder-of-the-app">
<h2>Step Two: Test the remainder of the app</h2>
<p>Repeat the process from step one for <code class="docutils literal notranslate"><span class="pre">payments.js</span></code> and <code class="docutils literal notranslate"><span class="pre">helpers.js</span></code></p>
<ul class="simple">
<li>Create a <code class="docutils literal notranslate"><span class="pre">helpers.test.js</span></code> file and test each function in <code class="docutils literal notranslate"><span class="pre">helpers.js</span></code></li>
<li>Create a <code class="docutils literal notranslate"><span class="pre">payments.test.js</span></code> file and test each function in <code class="docutils literal notranslate"><span class="pre">payments.js</span></code></li>
<li>When finished you should have three .test.js files one for each .js file</li>
</ul>
</div>
<div class="section" id="step-three-test-your-own-code">
<h2>Step Three: Test your own code</h2>
<p>Get a feel for testing your own code</p>
<p>First we will build out functionality for removing a server from the server table</p>
<ul>
<li><p class="first">Review the functionality of <code class="docutils literal notranslate"><span class="pre">appendTd(tr,</span> <span class="pre">value)</span></code></p>
</li>
<li><p class="first">Create a <code class="docutils literal notranslate"><span class="pre">appendDeleteBtn(tr)</span></code>, it will be similar to <code class="docutils literal notranslate"><span class="pre">append(tr,</span> <span class="pre">value)</span></code>. This function will create a ‘td’ with the value ‘X’, when clicked it will delete the table row it belongs to</p>
</li>
<li><p class="first">Write the functionality for appending a ‘td’ to a ‘tr’ with the value ‘X’</p>
</li>
<li><p class="first">Set an click event listener on the ‘td’ that will remove the parent ‘tr’ from the dom. You will have to find a way to access the parent row of the ‘td’ from the click event</p>
</li>
<li><p class="first">Write tests for <code class="docutils literal notranslate"><span class="pre">appendDeleteBtn(tr)</span></code></p>
<p>You may notice the difficulty of simulating a click with vanilla javascript so do not spend too much time on testing the html after the DOM is updated (later we will study approaches for this with other libraries).</p>
</li>
<li><p class="first">Repeat the process for removing a payment from the payment table</p>
</li>
</ul>
</div>
