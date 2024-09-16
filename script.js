function launchMission() {
    // Add the "big" class to the prepare-ship paragraph
    document.getElementById('prepare-ship').classList.add('big');
    
    // Remove the "big" class from the ship-ready paragraph
    document.getElementById('ship-ready').classList.remove('big');

    // Log all the <li> elements (mission checks) to the console
    const missionChecks = document.getElementsByTagName('ul li');
    missionChecks.forEach(check => console.log(check.textContent));

    // Update the mission destination link href and text
    const destinationLink = document.querySelector('.destination-link');
    destinationLink.href = 'https://mars.nasa.gov/';
    destinationLink.textContent = 'Mars';

    // Hide the countdown paragraph
    document.getElementById('countdown').style.display = 'none';

    // Show the mission-complete paragraph
    document.getElementById('mission-complete').style.display = 'block';

    // Get the astronaut name input and set the welcome message in <h1>
    const astronautName = document.getElementById('name-input').value;

    document.querySelector('h1').textContent = `Greetings, ${astronautName} from Earth!`;

    /*

    1. Why is querySelector('h1') Used?

        querySelector('h1') selects the first <h1> element it finds in the document. 
        This works if you have one <h1> element on the page (which is often the case).
         In that case, you don't need an index because querySelector only returns the first match, not a collection of all matches.

        It’s a convenient way to get the first occurrence of an element, especially when you know you’ll 
        only ever have one <h1> (or you only care about the first one).

    2. Why Don't We Need Indexes with querySelector?

        querySelector only returns one element, the first one that matches the CSS selector you provide (like h1, #id, .class, etc.).

        This means you don’t need to specify an index, because querySelector is designed to give you just one element. 
        You would only need an index if the method returned multiple elements, as in the case of getElementsByTagName.

    3. Alternatives to querySelector

    If you wanted to use getElementsByTagName, you would need to use an index because 
    getElementsByTagName returns a live HTMLCollection (which can contain multiple elements).

    So, if you have more than one <h1> on the page (dont do that bad for SEO), you would need to use an index to specify which one you want:

    document.getElementsByTagName('h1')[0].textContent = `Greetings, ${astronautName} from Earth!`;

        Why use [0]? Because getElementsByTagName('h1') returns a collection of all <h1> elements on the page. The [0] grabs the first <h1> from that collection.

    4. So, Why Use querySelector Here?

    You might use querySelector('h1') here because:

        Simplicity: It’s easier and more readable when you only care about the first <h1> on the page.
        
        Consistency: If you’re using querySelector elsewhere in the code (for classes, attributes, or more complex selectors), 
        it can be convenient to use it uniformly, even for tag selection.

        */
}
