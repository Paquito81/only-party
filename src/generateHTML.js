function generateHTML(team) {
    console.log(team);
    return`
    <!DOCTYPE html>
    <html lang= "en">
    <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Super Team</title>
    </head>
    
    <body>
        <header class="justify-content-center bg-warning text-light flex-row">
        <h1>Super Team</h1>
        <h2>team manager: ${team[0].name}</h2>
    </body>    
        `
}

module.exports = generateHTML;