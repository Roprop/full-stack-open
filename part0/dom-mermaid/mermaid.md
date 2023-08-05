# Exercise 0.4

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>browser: 302 FOUND
    deactivate server
    
    Note right of browser: Server deals with form data sent by browser (storing it in a database / data file)

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Note right of browser: Browser loads as before, but with a changed data.json as a result, such that the additional note is displayed.
```

# Exercise 0.5

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: The data.json file
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
```

# Exercise 0.6

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

    activate server
    server->>browser: 201 CREATED (response body: {"message":"note created"})
    deactivate server

    Note right of browser: As part of the script which executes the POST request, the rendered notes also change (redraw).;
```