<body>
  <h2>JavaScript DOM & Event Questions</h2>

  <h3>Q: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?</h3>
  <p><b>Ans:</b> All of these are used to find elements from the DOM, but their actions are different.</p>
  <ul>
    <li><b>getElementById:</b> Returns only one element as ID is always unique. If not found, it returns null.</li>
    <li><b>getElementsByClassName:</b> Returns all elements with this class as an HTMLCollection (array-like object, but not an array).</li>
    <li><b>querySelector:</b> Helps to find elements by CSS selector. It returns only the first matching element.</li>
    <li><b>querySelectorAll:</b> Also helps to find elements by CSS selector but returns all of the matching elements.</li>
  </ul>

  <h3>Q: How do you create and insert a new element into the DOM?</h3>
  <p><b>Ans:</b> We can create and insert a new element with 3 steps.</p>
  <ol>
    <li>Create element by using createElement.</li>
    <li>Add text to the element by innerText or textContent.</li>
    <li>Insert this into a parent by using appendChild.</li>
  </ol>

  <h3>Q: What is Event Bubbling and how does it work?</h3>
  <p><b>Ans:</b> When an event occurs on an element, the event propagates from the innermost element to the outer elements. This is called Event Bubbling.</p>
  <p><b>Work flow:</b> If I click on a button, it will trigger the event of the button, then the parent div, then the body.</p>

  <h3>Q: What is Event Delegation in JavaScript? Why is it useful?</h3>
  <p><b>Ans:</b> Adding an event listener to the parent element, then handling child elements using event bubbling.</p>
  <p><b>Useful because:</b></p>
  <ul>
    <li>We can add event listeners to multiple child elements at once by adding the event listener to the parent.</li>
    <li>As the DOM manipulation is reduced, performance becomes better.</li>
    <li>If any child is added in the future, the event will be handled dynamically.</li>
  </ul>

  <h3>Q: What is the difference between preventDefault and stopPropagation methods?</h3>
  <p><b>Ans:</b> Both are used to control the behavior of events. But the difference is:</p>
  <ul>
    <li><b>preventDefault:</b> Stops the default behavior like reloading the page on form submission.</li>
    <li><b>stopPropagation:</b> Stops the event from bubbling.</li>
  </ul>
</body>
